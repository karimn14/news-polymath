import React from 'react';
import { ArrowLeft, ArrowRight, BookOpen, RotateCw, List } from 'lucide-react';

interface ReadingControlsProps {
  currentTopicId: number;
  totalTopics: number;
  isLoading: boolean;
  onReadTodayNext: () => void;
  onPreviousTopic: () => void;
  onRegenerate: () => void;
  onOpenTopicList: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const ReadingControls: React.FC<ReadingControlsProps> = ({
  currentTopicId,
  totalTopics,
  isLoading,
  onReadTodayNext,
  onPreviousTopic,
  onRegenerate,
  onOpenTopicList,
  hasNext,
  hasPrev,
}) => {
  return (
    <nav
      id="reading-controls"
      aria-label="Navigasi Edisi Koran"
      className="w-full max-w-[680px] mx-auto px-4 sm:px-6 my-8"
    >
      <div className="border border-[#1A1A1A] p-4 bg-[#FFFFFF]">
        <div className="text-[10px] font-mono tracking-widest uppercase border-b border-[#1A1A1A] pb-2 mb-3 flex justify-between items-center text-[#1A1A1A]">
          <span>NAVIGASI EDISI</span>
          <span>TOPIK {currentTopicId} / {totalTopics}</span>
        </div>

        {/* PRIMARY ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* Main "Baca Hari Ini / Lanjut" button */}
          <button
            id="btn-read-today"
            onClick={onReadTodayNext}
            disabled={isLoading || !hasNext}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#1A1A1A] text-[#FFFFFF] hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed border border-[#1A1A1A] font-meta text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            {isLoading ? (
              <>
                <RotateCw className="w-4 h-4 animate-spin" />
                <span>Mencetak Edisi Hari Ini...</span>
              </>
            ) : hasNext ? (
              <>
                <BookOpen className="w-4 h-4" />
                <span>Baca Hari Ini (Topik #{currentTopicId + 1})</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <span>Siklus 230 Topik Selesai</span>
            )}
          </button>
        </div>

        {/* SECONDARY ROW: Topik Sebelumnya, Daftar 230 Topik, Generate Ulang */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-[#1A1A1A]">
          {/* Small button: Topik Sebelumnya */}
          <button
            id="btn-previous-topic"
            onClick={onPreviousTopic}
            disabled={isLoading || !hasPrev}
            className="flex items-center gap-1.5 py-1.5 px-3 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed font-meta text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            title="Baca Ulang Topik Sebelumnya"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Topik Sebelumnya</span>
          </button>

          {/* Button: Daftar 230 Topik */}
          <button
            id="btn-browse-topics"
            onClick={onOpenTopicList}
            className="flex items-center gap-1.5 py-1.5 px-3 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-neutral-100 font-meta text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <List className="w-3.5 h-3.5" />
            <span>Daftar 230 Topik</span>
          </button>

          {/* Small button: Generate Ulang */}
          <button
            id="btn-regenerate"
            onClick={onRegenerate}
            disabled={isLoading}
            className="flex items-center gap-1.5 py-1.5 px-3 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-neutral-100 disabled:opacity-30 font-meta text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            title="Tulis ulang edisi ini dengan Gemini AI"
          >
            <RotateCw className="w-3 h-3" />
            <span>Tulis Ulang</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
