import React, { useState } from 'react';
import { PROFESSIONS, ALL_TOPICS } from '../data/topics';
import { ReadingListItem } from '../types';
import { BookOpen, Search, ArrowRight, RotateCcw, Bookmark, Trash2 } from 'lucide-react';
import { getReadingList, removeArticleFromReadingList } from '../services/storage';

interface FrontpageNavigatorProps {
  currentTopicId: number;
  readTopicIds: number[];
  cachedTopicIds?: number[];
  readingList?: ReadingListItem[];
  onRemoveFromReadingList?: (topicId: number) => void;
  onStartReading: (targetTopicId: number) => void;
  onContinueCurrent: () => void;
  totalTopics: number;
}

export const FrontpageNavigator: React.FC<FrontpageNavigatorProps> = ({
  currentTopicId,
  readTopicIds,
  cachedTopicIds = [],
  readingList: propReadingList,
  onRemoveFromReadingList,
  onStartReading,
  onContinueCurrent,
  totalTopics,
}) => {
  const [selectedProfId, setSelectedProfId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [localReadingList, setLocalReadingList] = useState<ReadingListItem[]>(() =>
    propReadingList || getReadingList()
  );

  const readingList = propReadingList ?? localReadingList;

  const handleRemoveSaved = (e: React.MouseEvent, targetTopicId: number) => {
    e.stopPropagation();
    if (onRemoveFromReadingList) {
      onRemoveFromReadingList(targetTopicId);
    } else {
      const updated = removeArticleFromReadingList(targetTopicId);
      setLocalReadingList(updated);
    }
  };

  const savedTopicIds = readingList.map((item) => item.topicId);

  const currentTopic = ALL_TOPICS.find((t) => t.id === currentTopicId) || ALL_TOPICS[0];
  const readCount = readTopicIds.length;
  const progressPercent = Math.round((readCount / totalTopics) * 100);

  // Filter topics
  const filteredTopics = ALL_TOPICS.filter((t) => {
    const matchesSearch =
      t.topicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.professionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.professionCategory.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProf = selectedProfId === null || t.professionId === selectedProfId;
    return matchesSearch && matchesProf;
  });

  return (
    <div id="frontpage-navigator" className="w-full max-w-[680px] mx-auto px-4 sm:px-6 py-6">
      {/* MEJA REDAKSI BANNER / HERO CARD */}
      <div className="border-2 border-[#1A1A1A] p-5 sm:p-6 bg-white mb-6">
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-2 mb-4 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A]">
          <span>MEJA REDAKSI & KURIKULUM</span>
          <span>PROGRES BACA: {readCount} / {totalTopics} ({progressPercent}%)</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-tight text-[#1A1A1A] mb-2">
          Selamat Pagi, Rekan Polymath.
        </h2>

        {/* STATUS DATABASE LENGKAP */}
        <div className="mb-3.5 inline-flex items-center gap-2 border border-[#1A1A1A] bg-[#1A1A1A] text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>ARSIP DATABASE: {cachedTopicIds.length} / {totalTopics} EDISI SIAP BACA INSTAN (0s LOADING)</span>
        </div>

        <p className="text-[14px] sm:text-[15px] font-body leading-[1.65] text-[#1A1A1A] mb-4">
          Aplikasi ini membedah model mental, insting lapangan, dan trik praktis dari 23 profesi secara runtut.
          Seluruh bahan koran (230 edisi lengkap) telah diproduksi dan tersimpan di database—semua materi siap langsung dibaca tanpa perlu menunggu proses generate lagi.
        </p>

        {/* JUMP / ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-[#1A1A1A]">
          <button
            id="btn-continue-reading"
            onClick={onContinueCurrent}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#1A1A1A] text-white hover:bg-neutral-800 border border-[#1A1A1A] font-meta text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Baca Topik Saat Ini: #{currentTopic.id} ({currentTopic.professionName})</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {currentTopicId > 1 && (
            <button
              onClick={() => onStartReading(1)}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-neutral-100 font-meta text-xs uppercase tracking-wider transition-colors cursor-pointer"
              title="Mulai Ulang dari Edisi #1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ke Topik #1</span>
            </button>
          )}
        </div>
      </div>

      {/* SECTION: READING LIST (ARTIKEL TERSIMPAN) */}
      <div id="reading-list-section" className="border border-[#1A1A1A] p-4 sm:p-5 bg-white mb-6">
        <div className="border-b border-[#1A1A1A] pb-2 mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#1A1A1A] fill-[#1A1A1A]" />
            <h3 className="text-xs sm:text-sm font-bold font-meta uppercase tracking-[0.2em] text-[#1A1A1A]">
              Reading List ({readingList.length})
            </h3>
          </div>
          <span className="text-[10px] font-mono uppercase text-[#1A1A1A]">
            Koleksi Pribadi
          </span>
        </div>

        {readingList.length === 0 ? (
          <div className="py-5 px-4 text-center border border-dashed border-neutral-300 bg-[#FAFAFA]">
            <p className="text-xs font-mono uppercase text-[#1A1A1A] font-semibold">
              [ READING LIST MASIH KOSONG ]
            </p>
            <p className="text-[13px] font-body text-neutral-600 mt-1 max-w-md mx-auto">
              Simpan artikel yang menarik minat Anda dengan menekan tombol <strong>"Simpan"</strong> saat membaca. Artikel tersimpan akan muncul di sini untuk dibaca kapan saja.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {readingList.map((item) => (
              <div
                key={item.topicId}
                id={`reading-list-item-${item.topicId}`}
                onClick={() => onStartReading(item.topicId)}
                className="border border-[#1A1A1A] p-3.5 bg-white hover:bg-neutral-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A] mb-1">
                    <span className="border border-[#1A1A1A] bg-[#1A1A1A] text-white px-1.5 py-0.5 text-[9px] font-bold">
                      EDISI #{item.topicId}
                    </span>
                    <span className="font-bold">{item.professionLabel}</span>
                  </div>
                  <h4 className="font-headline font-bold text-[14px] sm:text-[15px] text-[#1A1A1A] leading-snug line-clamp-2 group-hover:underline">
                    {item.headline}
                  </h4>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartReading(item.topicId);
                    }}
                    className="inline-flex items-center gap-1.5 py-1 px-2.5 bg-[#1A1A1A] text-white hover:bg-neutral-800 text-[11px] font-mono uppercase tracking-wider cursor-pointer transition-colors"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Baca</span>
                  </button>
                  <button
                    onClick={(e) => handleRemoveSaved(e, item.topicId)}
                    className="inline-flex items-center gap-1 py-1 px-2 border border-neutral-300 hover:border-[#1A1A1A] hover:bg-neutral-100 text-[11px] font-mono text-neutral-600 hover:text-black cursor-pointer transition-colors"
                    title="Hapus dari Reading List"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span className="hidden sm:inline">Hapus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION: PILIH PROFESI & TOPIK */}
      <div className="border border-[#1A1A1A] p-4 sm:p-5 bg-white mb-6">
        <div className="border-b border-[#1A1A1A] pb-2 mb-3 flex items-center justify-between">
          <h3 className="text-xs sm:text-sm font-bold font-meta uppercase tracking-[0.2em] text-[#1A1A1A]">
            Pilih Bahan Bacaan Hari Ini (23 Profesi)
          </h3>
          <span className="text-[10px] font-mono uppercase text-[#1A1A1A]">
            {filteredTopics.length} Topik Tersedia
          </span>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]" />
          <input
            type="text"
            placeholder="Cari kata kunci topik (misal: 'sidang', 'radar', 'forensik', 'kontrak')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-[#1A1A1A] text-xs font-mono bg-[#FAFAFA] focus:outline-none focus:bg-white focus:ring-1 focus:ring-black"
          />
        </div>

        {/* PROFESSIONS QUICK FILTER */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 text-[11px] font-mono border-b border-[#1A1A1A]">
          <button
            onClick={() => setSelectedProfId(null)}
            className={`px-2.5 py-1 whitespace-nowrap border border-[#1A1A1A] transition-colors cursor-pointer ${
              selectedProfId === null
                ? 'bg-[#1A1A1A] text-white'
                : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'
            }`}
          >
            Semua (23 Profesi)
          </button>
          {PROFESSIONS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProfId(p.id === selectedProfId ? null : p.id)}
              className={`px-2.5 py-1 whitespace-nowrap border border-[#1A1A1A] transition-colors cursor-pointer ${
                selectedProfId === p.id
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'
              }`}
            >
              {p.id}. {p.name}
            </button>
          ))}
        </div>

        {/* TOPIC LIST FOR QUICK SELECTION */}
        <div className="max-h-[500px] overflow-y-auto divide-y divide-[#1A1A1A] pr-1">
          {filteredTopics.map((topic) => {
            const isCurrent = topic.id === currentTopicId;
            const isRead = readTopicIds.includes(topic.id);
            const isCached = cachedTopicIds.includes(topic.id);
            const isSaved = savedTopicIds.includes(topic.id);

            return (
              <div
                key={topic.id}
                onClick={() => onStartReading(topic.id)}
                className={`py-3 px-2 flex items-start gap-3 cursor-pointer transition-colors ${
                  isCurrent
                    ? 'bg-neutral-200'
                    : 'hover:bg-neutral-100'
                }`}
              >
                <div className="w-8 shrink-0 text-right font-mono text-xs font-bold text-[#1A1A1A] pt-0.5">
                  #{topic.id}
                </div>

                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]">
                    <span className="font-bold">{topic.professionName}</span>
                    <span>·</span>
                    <span>HARI {topic.dayInProfession}/10</span>
                    {isCached && (
                      <span className="border border-[#1A1A1A] bg-[#1A1A1A] text-white px-1 text-[9px] font-mono uppercase">
                        ARSIP SIAP
                      </span>
                    )}
                    {isSaved && (
                      <span className="inline-flex items-center gap-0.5 border border-[#1A1A1A] bg-neutral-100 px-1 text-[9px] font-mono uppercase font-semibold">
                        <Bookmark className="w-2.5 h-2.5 fill-black" />
                        <span>SIMPANAN</span>
                      </span>
                    )}
                    {isRead && (
                      <span className="border border-[#1A1A1A] px-1 text-[9px] font-mono uppercase">
                        SUDAH BACA
                      </span>
                    )}
                  </div>
                  <div className="text-[14px] font-headline text-[#1A1A1A] mt-1 leading-[1.35]">
                    {topic.topicTitle}
                  </div>
                </div>

                <div className="shrink-0 self-center">
                  <span className="text-[11px] font-mono uppercase border border-[#1A1A1A] px-2 py-1 bg-white hover:bg-black hover:text-white transition-colors">
                    {isCurrent ? 'Buka Edisi' : 'Pilih'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
