import { useState, useCallback, useEffect } from 'react';
import { getTopicById, ALL_TOPICS } from './data/topics';
import { ArticleData, ReadingListItem } from './types';
import { Masthead } from './components/Masthead';
import { ArticleView } from './components/ArticleView';
import { ReadingControls } from './components/ReadingControls';
import { TopicListModal } from './components/TopicListModal';
import { FrontpageNavigator } from './components/FrontpageNavigator';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import {
  getLastTopicId,
  saveLastTopicId,
  getCachedArticle,
  cacheArticle,
  getReadTopics,
  getReadingList,
  toggleArticleInReadingList,
  removeArticleFromReadingList,
} from './services/storage';
import { RotateCcw, AlertCircle, ArrowLeft } from 'lucide-react';

export default function App() {
  const [topicId, setTopicId] = useState<number>(() => getLastTopicId());
  const [article, setArticle] = useState<ArticleData | null>(() => getCachedArticle(getLastTopicId()));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [readTopics, setReadTopics] = useState<number[]>(() => getReadTopics());
  // User explicitly requested: "berikan juga menu navigasi awal jngan langsung membaca, tapi biarkan user memilih dulu apa ayng mau dibaca"
  const [currentView, setCurrentView] = useState<'menu' | 'reader'>('menu');
  const [cachedTopicIds, setCachedTopicIds] = useState<number[]>([1, 2]);
  const [readingList, setReadingList] = useState<ReadingListItem[]>(() => getReadingList());

  const handleToggleSaveArticle = (targetArticle: ArticleData) => {
    const result = toggleArticleInReadingList(targetArticle);
    setReadingList(result.list);
  };

  const handleRemoveFromReadingList = (removeTopicId: number) => {
    const updated = removeArticleFromReadingList(removeTopicId);
    setReadingList(updated);
  };

  const refreshCachedTopics = useCallback(async () => {
    // 1. Try backend API first
    try {
      const res = await fetch('/api/cached-topics');
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data = await res.json();
        if (Array.isArray(data.cachedIds) && data.cachedIds.length > 0) {
          setCachedTopicIds(data.cachedIds);
          return;
        }
      }
    } catch {
      // Backend API not reachable or static deployment
    }

    // 2. Fallback to static articles database (supports pure static Vercel / Vite presets)
    try {
      const staticRes = await fetch('/data/articles_db.json');
      const contentType = staticRes.headers.get('content-type') || '';
      if (staticRes.ok && contentType.includes('application/json')) {
        const db = await staticRes.json();
        const ids = Object.keys(db).map(Number).filter((n) => !isNaN(n));
        if (ids.length > 0) {
          setCachedTopicIds(ids);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    refreshCachedTopics();
  }, [refreshCachedTopics]);

  const currentTopic = getTopicById(topicId) || ALL_TOPICS[0];

  // Fetch or generate article for a given targetId
  const loadArticleForTopic = useCallback(async (targetId: number, forceRefresh = false) => {
    setErrorMsg(null);
    saveLastTopicId(targetId);
    setTopicId(targetId);

    // Check localStorage cache first unless forced
    if (!forceRefresh) {
      const cached = getCachedArticle(targetId);
      if (cached) {
        setArticle(cached);
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(true);
    try {
      let articleData: ArticleData | null = null;

      // 1. Try backend API first (works in Node/serverless environment)
      try {
        const res = await fetch('/api/generate-briefing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topicId: targetId, forceRefresh }),
        });
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('application/json')) {
          const data = await res.json();
          if (data.success && data.article) {
            articleData = data.article;
          }
        }
      } catch {
        // Backend API failed or unavailable
      }

      // 2. If API was unavailable or returned non-JSON (e.g. pure static Vercel Vite deployment)
      if (!articleData) {
        try {
          const staticRes = await fetch('/data/articles_db.json');
          const contentType = staticRes.headers.get('content-type') || '';
          if (staticRes.ok && contentType.includes('application/json')) {
            const db = await staticRes.json();
            if (db && db[targetId]) {
              articleData = db[targetId];
            }
          }
        } catch {
          // static fallback failed
        }
      }

      if (!articleData) {
        throw new Error('Edisi bahan koran tidak dapat dimuat. Pastikan koneksi atau database aktif.');
      }

      setArticle(articleData);
      cacheArticle(articleData);
      setReadTopics(getReadTopics());
      refreshCachedTopics();
    } catch (err: any) {
      let rawMsg = err?.message || 'Terjadi gangguan saat memuat briefing harian.';
      try {
        const parsed = JSON.parse(rawMsg);
        if (parsed?.error?.message) {
          rawMsg = parsed.error.message;
        }
      } catch {
        // keep as is
      }
      if (rawMsg.includes('503') || rawMsg.includes('high demand') || rawMsg.includes('UNAVAILABLE')) {
        rawMsg = 'Model AI sedang mengalami lonjakan antrean sementara (503). Sistem telah mencoba mengalihkan model. Silakan tekan tombol "Coba Generate Kembali".';
      }
      console.error('Error generating article:', rawMsg);
      setErrorMsg(rawMsg);
    } finally {
      setIsLoading(false);
    }
  }, [refreshCachedTopics]);

  // When user selects a topic to start reading
  const handleStartReading = (targetId: number) => {
    setCurrentView('reader');
    loadArticleForTopic(targetId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Continue reading current topic
  const handleContinueCurrent = () => {
    setCurrentView('reader');
    loadArticleForTopic(topicId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to Next Topic ("Baca Hari Ini")
  const handleReadTodayNext = () => {
    if (topicId < ALL_TOPICS.length) {
      const nextId = topicId + 1;
      loadArticleForTopic(nextId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigate to Previous Topic ("Topik Sebelumnya")
  const handlePreviousTopic = () => {
    if (topicId > 1) {
      const prevId = topicId - 1;
      loadArticleForTopic(prevId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Regenerate current topic
  const handleRegenerate = () => {
    loadArticleForTopic(topicId, true);
  };

  // Jump to specific topic from curriculum modal
  const handleSelectTopicFromModal = (selectedId: number) => {
    setCurrentView('reader');
    loadArticleForTopic(selectedId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
      {/* NEWSPAPER CONTENT CONTAINER */}
      <main className="flex-1 pb-12">
        {/* NEWSPAPER MASTHEAD */}
        <Masthead
          currentTopicId={topicId}
          totalTopics={ALL_TOPICS.length}
          professionName={currentTopic.professionName}
          onOpenMenu={() => setCurrentView('menu')}
          activeView={currentView}
        />

        {/* VIEW 1: FRONTPAGE / MENU NAVIGASI AWAL */}
        {currentView === 'menu' && (
          <FrontpageNavigator
            currentTopicId={topicId}
            readTopicIds={readTopics}
            cachedTopicIds={cachedTopicIds}
            readingList={readingList}
            onRemoveFromReadingList={handleRemoveFromReadingList}
            onStartReading={handleStartReading}
            onContinueCurrent={handleContinueCurrent}
            totalTopics={ALL_TOPICS.length}
          />
        )}

        {/* VIEW 2: READER MODE */}
        {currentView === 'reader' && (
          <>
            {/* THIN BLACK READING PROGRESS BAR FIXED TO TOP OF VIEWPORT */}
            <ReadingProgressBar />

            {/* BACK TO MENU HEADER BAR */}
            <div className="w-full max-w-[680px] mx-auto px-4 sm:px-6 mb-2">
              <button
                onClick={() => setCurrentView('menu')}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-neutral-100 font-meta text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Menu Pilihan Kurikulum</span>
              </button>
            </div>

            {/* TOP READING CONTROLS */}
            <ReadingControls
              currentTopicId={topicId}
              totalTopics={ALL_TOPICS.length}
              isLoading={isLoading}
              onReadTodayNext={handleReadTodayNext}
              onPreviousTopic={handlePreviousTopic}
              onRegenerate={handleRegenerate}
              onOpenTopicList={() => setIsModalOpen(true)}
              hasNext={topicId < ALL_TOPICS.length}
              hasPrev={topicId > 1}
            />

            {/* LOADING INDICATOR (Classic Newspaper Printing style) */}
            {isLoading && (
              <div
                id="loading-banner"
                className="w-full max-w-[680px] mx-auto px-4 sm:px-6 my-4"
              >
                <div className="border border-[#1A1A1A] p-5 text-center bg-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A] font-semibold animate-pulse">
                    [ MENULIS EDISI NO. {topicId} · REDAKTUR SEDANG MENGOLAH WAWASAN ]
                  </p>
                  <p className="text-[14px] font-body text-[#1A1A1A] mt-2">
                    Mengompilasi model mental & insting praktikal profesi {currentTopic.professionName}: "{currentTopic.topicTitle}"...
                  </p>
                  <p className="text-[11px] font-mono text-neutral-600 mt-2">
                    Menghasilkan ulasan feature mendalam & padat (±1.500 kata)...
                  </p>
                </div>
              </div>
            )}

            {/* ERROR STATE BANNER */}
            {errorMsg && (
              <div
                id="error-banner"
                className="w-full max-w-[680px] mx-auto px-4 sm:px-6 my-4"
              >
                <div className="border border-[#1A1A1A] p-4 bg-white text-left">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Pemberitahuan Redaksi</span>
                  </div>
                  <p className="text-sm font-body text-[#1A1A1A] mt-2">
                    {errorMsg}
                  </p>
                  <button
                    onClick={() => loadArticleForTopic(topicId, true)}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#1A1A1A] text-xs font-mono uppercase tracking-wider hover:bg-neutral-100 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Coba Generate Kembali</span>
                  </button>
                </div>
              </div>
            )}

            {/* MAIN ARTICLE VIEW */}
            {article && (
              <ArticleView
                article={article}
                isLoading={isLoading}
                isSaved={readingList.some((item) => item.topicId === article.topicId)}
                onToggleSave={handleToggleSaveArticle}
              />
            )}

            {/* BOTTOM READING CONTROLS FOR CONVENIENCE AFTER READING */}
            {article && !isLoading && (
              <div className="mt-8">
                <ReadingControls
                  currentTopicId={topicId}
                  totalTopics={ALL_TOPICS.length}
                  isLoading={isLoading}
                  onReadTodayNext={handleReadTodayNext}
                  onPreviousTopic={handlePreviousTopic}
                  onRegenerate={handleRegenerate}
                  onOpenTopicList={() => setIsModalOpen(true)}
                  hasNext={topicId < ALL_TOPICS.length}
                  hasPrev={topicId > 1}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-[680px] mx-auto px-4 sm:px-6 py-6 border-t border-[#1A1A1A] text-center text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#1A1A1A]">
        <div>POLYMATH DAILY BRIEFING · EST. 2026</div>
        <div className="mt-1 text-neutral-600">
          230 HARI · 23 PROFESI · GAYA KORAN EDITORIAL CETAK
        </div>
      </footer>

      {/* CURRICULUM BROWSER MODAL */}
      <TopicListModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentTopicId={topicId}
        readTopicIds={readTopics}
        onSelectTopic={handleSelectTopicFromModal}
      />
    </div>
  );
}
