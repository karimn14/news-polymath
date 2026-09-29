import React, { useState, useEffect } from 'react';
import { ArticleData } from '../types';
import { Copy, Check, Bookmark, BookmarkCheck } from 'lucide-react';
import { isArticleSaved, toggleArticleInReadingList } from '../services/storage';

interface ArticleViewProps {
  article: ArticleData;
  isLoading?: boolean;
  isSaved?: boolean;
  onToggleSave?: (article: ArticleData) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  isLoading,
  isSaved: propIsSaved,
  onToggleSave,
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState<boolean>(() => {
    if (typeof propIsSaved === 'boolean') return propIsSaved;
    return isArticleSaved(article.topicId);
  });

  useEffect(() => {
    if (typeof propIsSaved === 'boolean') {
      setSaved(propIsSaved);
    } else {
      setSaved(isArticleSaved(article.topicId));
    }
  }, [propIsSaved, article.topicId]);

  const handleToggleSave = () => {
    if (onToggleSave) {
      onToggleSave(article);
    } else {
      const result = toggleArticleInReadingList(article);
      setSaved(result.isSaved);
    }
  };

  // Calculate total word count of the entire briefing article
  const totalWords = React.useMemo(() => {
    const text = [
      article.headline,
      article.leadParagraph,
      ...article.sections.map((s) => `${s.title} ${s.content}`),
      ...article.takeaways,
      article.reflectiveQuestion,
    ].join(' ');
    return text.trim().split(/\s+/).filter(Boolean).length;
  }, [article]);

  const readingMinutes = Math.max(article.readingTimeMinutes || 0, Math.ceil(totalWords / 200));

  const handleCopyMarkdown = () => {
    let md = article.rawMarkdown;
    if (!md) {
      const sectionsText = article.sections
        .map((s) => `### ${s.title}\n\n${s.content}`)
        .join('\n\n');
      const takeawaysText = article.takeaways
        .map((t) => `- ${t}`)
        .join('\n');
      md = `## [${article.professionLabel}]
# [${article.headline}]
*${article.leadParagraph}*

${sectionsText}

---
**Yang Bisa Dibawa Pulang**
${takeawaysText}

---
*${article.reflectiveQuestion}*`;
    }

    navigator.clipboard.writeText(md).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article
      id="newspaper-article-container"
      className={`w-full max-w-[680px] mx-auto px-4 sm:px-6 transition-opacity duration-200 ${
        isLoading ? 'opacity-40 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* KOP / LABEL PROFESI (dengan garis tipis solid di atas dan bawah) */}
      <div className="border-t border-b border-[#1A1A1A] py-1.5 my-4 text-center">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] font-meta text-[#1A1A1A]">
          {article.professionLabel}
        </span>
      </div>

      {/* HEADLINE */}
      <h2
        id="article-headline"
        className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-[1.25] font-headline text-[#1A1A1A] my-4 text-left"
      >
        {article.headline}
      </h2>

      {/* BYLINE / METADATA & COPY RAW BUTTON */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A] border-b border-[#1A1A1A] pb-2 mb-6">
        <span>KONTRIBUTOR JURNALIS & REDAKSI</span>
        <div className="flex items-center gap-2">
          <span>±{totalWords.toLocaleString('id-ID')} KATA · {readingMinutes} MENIT BACA</span>
          <button
            id="btn-save-reading-list-top"
            onClick={handleToggleSave}
            className={`inline-flex items-center gap-1 border border-[#1A1A1A] px-2 py-0.5 text-[10px] font-mono cursor-pointer transition-colors ${
              saved
                ? 'bg-[#1A1A1A] text-white hover:bg-neutral-800'
                : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'
            }`}
            title={saved ? 'Hapus dari Reading List' : 'Simpan ke Reading List'}
          >
            {saved ? (
              <>
                <BookmarkCheck className="w-3 h-3 text-white" />
                <span>Tersimpan</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3 h-3" />
                <span>Simpan</span>
              </>
            )}
          </button>
          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-1 border border-[#1A1A1A] px-2 py-0.5 hover:bg-neutral-100 text-[10px] font-mono cursor-pointer transition-colors"
            title="Salin Naskah Format Markdown / Arsip"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span>Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Salin Teks</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* LEAD PARAGRAPH (dengan drop cap klasik) */}
      <div
        id="article-lead"
        className="drop-cap text-lg sm:text-[19px] leading-[1.75] font-body text-[#1A1A1A] mb-6 text-justify"
      >
        {article.leadParagraph}
      </div>

      {/* MAIN SECTIONS DENGAN SUB-HEADING & CRISP DIVIDERS */}
      <div className="space-y-6">
        {article.sections.map((section, idx) => (
          <section key={idx} className="border-t border-[#1A1A1A] pt-4">
            <h3 className="text-lg sm:text-[19px] font-bold font-headline text-[#1A1A1A] mb-2">
              {section.title}
            </h3>
            <div className="text-[16px] sm:text-[17px] leading-[1.75] font-body text-[#1A1A1A] text-justify space-y-3">
              {section.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* KOTAK: WAWASAN YANG BISA DIBAWA PULANG */}
      <aside
        id="takeaways-box"
        className="border border-[#1A1A1A] p-5 sm:p-6 my-8 bg-transparent"
      >
        <div className="border-b border-[#1A1A1A] pb-2 mb-4">
          <h4 className="text-xs sm:text-[13px] font-bold font-meta uppercase tracking-[0.2em] text-[#1A1A1A]">
            Wawasan yang Bisa Dibawa Pulang
          </h4>
          <p className="text-[11px] font-mono text-[#1A1A1A] mt-0.5">
            Pelajaran untuk Insinyur Hardware & Wirausahawan
          </p>
        </div>

        <ul className="space-y-3">
          {article.takeaways.map((item, idx) => (
            <li key={idx} className="flex items-start text-[15px] sm:text-[16px] leading-[1.65] font-body text-[#1A1A1A]">
              <span className="inline-block mr-2.5 font-bold font-mono select-none">
                [{idx + 1}]
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* PERTANYAAN REFLEKTIF PENUTUP */}
      <div
        id="reflective-question"
        className="border-t border-b border-[#1A1A1A] py-4 my-6"
      >
        <span className="block text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] mb-1 font-semibold">
          Pertanyaan Reflektif Hari Ini:
        </span>
        <p className="text-[16px] sm:text-[17px] font-headline italic leading-[1.6] text-[#1A1A1A]">
          "{article.reflectiveQuestion}"
        </p>
      </div>

      {/* ACTION BAR BAWAH: SIMPAN & SALIN */}
      <div
        id="article-bottom-actions"
        className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-[#1A1A1A] p-4 bg-white my-6"
      >
        <div className="text-left">
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
            Koleksi Pribadi & Reading List
          </p>
          <p className="text-[12px] font-body text-neutral-600">
            Simpan edisi ini untuk dibaca kembali kapan saja melalui menu depan.
          </p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            id="btn-save-reading-list-bottom"
            onClick={handleToggleSave}
            className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 border border-[#1A1A1A] px-3.5 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors ${
              saved
                ? 'bg-[#1A1A1A] text-white hover:bg-neutral-800'
                : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'
            }`}
          >
            {saved ? (
              <>
                <BookmarkCheck className="w-3.5 h-3.5 text-white" />
                <span>Tersimpan di Reading List</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5" />
                <span>Simpan ke Reading List</span>
              </>
            )}
          </button>
          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center justify-center gap-1.5 border border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-neutral-100 px-3 py-2 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors"
            title="Salin Naskah Format Markdown"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? 'Tersalin' : 'Salin Teks'}</span>
          </button>
        </div>
      </div>

      {/* FOOTER ARTIKEL */}
      <div className="text-center py-4 border-t border-[#1A1A1A] text-[10px] font-mono tracking-widest uppercase text-[#1A1A1A]">
        *** AKHIR DARI BRIEFING EDISI INI ***
      </div>
    </article>
  );
};
