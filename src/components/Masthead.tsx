import React from 'react';

interface MastheadProps {
  currentTopicId: number;
  totalTopics: number;
  professionName: string;
  onOpenMenu?: () => void;
  activeView?: 'menu' | 'reader';
}

export const Masthead: React.FC<MastheadProps> = ({
  currentTopicId,
  totalTopics,
  professionName,
  onOpenMenu,
  activeView,
}) => {
  // Format current date in Indonesian
  const today = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date()).toUpperCase();

  return (
    <header id="newspaper-masthead" className="w-full max-w-[680px] mx-auto pt-6 pb-4 px-4 sm:px-6">
      {/* Top Meta Line: Date, Paper Name, Issue */}
      <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono tracking-widest uppercase border-b border-[#1A1A1A] pb-1.5 text-[#1A1A1A]">
        <span>{today}</span>
        {onOpenMenu && (
          <button
            onClick={onOpenMenu}
            className="hover:underline font-bold cursor-pointer uppercase"
          >
            {activeView === 'menu' ? '● Meja Kurikulum' : '← Buka Menu Kurikulum'}
          </button>
        )}
        <span>NO. {currentTopicId} / {totalTopics}</span>
      </div>

      {/* Main Newspaper Masthead Title */}
      <div className="text-center py-4 sm:py-6">
        <h1
          onClick={onOpenMenu}
          className="text-3xl sm:text-5xl font-black tracking-tight font-headline uppercase text-[#1A1A1A] cursor-pointer hover:opacity-90"
          title="Kembali ke Menu Pilihan"
        >
          Koran Pagi Polymath
        </h1>
        <p className="mt-1 text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-meta text-[#1A1A1A] font-medium">
          Wawasan Lintas Disiplin & Model Mental 23 Profesi
        </p>
      </div>

      {/* Double Border Rule (classic newspaper separator) */}
      <div className="border-t border-b border-[#1A1A1A] py-1.5 px-1 flex justify-between items-center text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]">
        <span>FOKUS: {professionName}</span>
        <span className="text-center hidden sm:inline">SATU TOPIK SETIAP PAGI · 20 MENIT BACA</span>
        <span>PROGRES: {Math.round((currentTopicId / totalTopics) * 100)}%</span>
      </div>
    </header>
  );
};
