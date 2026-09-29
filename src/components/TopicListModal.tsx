import React, { useState } from 'react';
import { PROFESSIONS, ALL_TOPICS } from '../data/topics';
import { X, Check, Search } from 'lucide-react';

interface TopicListModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTopicId: number;
  readTopicIds: number[];
  onSelectTopic: (topicId: number) => void;
}

export const TopicListModal: React.FC<TopicListModalProps> = ({
  isOpen,
  onClose,
  currentTopicId,
  readTopicIds,
  onSelectTopic,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfId, setSelectedProfId] = useState<number | null>(null);

  if (!isOpen) return null;

  const filteredTopics = ALL_TOPICS.filter((t) => {
    const matchesSearch =
      t.topicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.professionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.professionCategory.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProf = selectedProfId === null || t.professionId === selectedProfId;
    return matchesSearch && matchesProf;
  });

  return (
    <div
      id="modal-topic-list-backdrop"
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3 sm:p-6"
    >
      <div
        id="modal-topic-list"
        className="w-full max-w-[680px] max-h-[90vh] bg-[#FFFFFF] border-2 border-[#1A1A1A] flex flex-col shadow-none"
      >
        {/* MODAL HEADER */}
        <div className="border-b-2 border-[#1A1A1A] p-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-headline uppercase tracking-tight text-[#1A1A1A]">
              Indeks Kurikulum 230 Topik
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#1A1A1A]">
              23 Profesi × 10 Hari Pembelajaran Polymath
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-[#1A1A1A] hover:bg-neutral-100 cursor-pointer"
            aria-label="Tutup Daftar"
          >
            <X className="w-5 h-5 text-[#1A1A1A]" />
          </button>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="p-4 border-b border-[#1A1A1A] space-y-3 bg-[#FAFAFA]">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]" />
            <input
              type="text"
              placeholder="Cari topik atau profesi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-[#1A1A1A] text-xs font-mono bg-white focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Quick Profession Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono no-scrollbar">
            <button
              onClick={() => setSelectedProfId(null)}
              className={`px-2.5 py-1 whitespace-nowrap border border-[#1A1A1A] transition-colors cursor-pointer ${
                selectedProfId === null
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'
              }`}
            >
              Semua (23)
            </button>
            {PROFESSIONS.map((prof) => (
              <button
                key={prof.id}
                onClick={() => setSelectedProfId(prof.id === selectedProfId ? null : prof.id)}
                className={`px-2.5 py-1 whitespace-nowrap border border-[#1A1A1A] transition-colors cursor-pointer ${
                  selectedProfId === prof.id
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-white text-[#1A1A1A] hover:bg-neutral-100'
                }`}
              >
                {prof.id}. {prof.name}
              </button>
            ))}
          </div>
        </div>

        {/* TOPICS SCROLLABLE LIST */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#1A1A1A]">
          {filteredTopics.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-[#1A1A1A]">
              Tidak ada topik yang cocok dengan pencarian.
            </div>
          ) : (
            filteredTopics.map((item) => {
              const isCurrent = item.id === currentTopicId;
              const isRead = readTopicIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectTopic(item.id);
                    onClose();
                  }}
                  className={`py-3 px-2 flex items-start gap-3 cursor-pointer transition-colors ${
                    isCurrent
                      ? 'bg-neutral-200 font-semibold'
                      : 'hover:bg-neutral-100'
                  }`}
                >
                  <div className="w-8 shrink-0 text-right font-mono text-xs font-bold text-[#1A1A1A] pt-0.5">
                    #{item.id}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]">
                      <span>{item.professionName}</span>
                      <span>·</span>
                      <span>HARI {item.dayInProfession}/10</span>
                      {isRead && (
                        <span className="flex items-center gap-0.5 border border-[#1A1A1A] px-1 text-[9px]">
                          <Check className="w-2.5 h-2.5" /> SUDAH DIBACA
                        </span>
                      )}
                    </div>
                    <div className="text-[13px] sm:text-[14px] font-headline text-[#1A1A1A] mt-0.5">
                      {item.topicTitle}
                    </div>
                  </div>

                  {isCurrent && (
                    <span className="shrink-0 text-[10px] font-mono uppercase border border-[#1A1A1A] bg-[#1A1A1A] text-white px-2 py-0.5 self-center">
                      Aktif
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="p-3 border-t border-[#1A1A1A] bg-[#FAFAFA] flex items-center justify-between text-[11px] font-mono text-[#1A1A1A]">
          <span>{readTopicIds.length} dari 230 Topik Terbaca</span>
          <button
            onClick={onClose}
            className="px-3 py-1 border border-[#1A1A1A] bg-white hover:bg-neutral-100 uppercase tracking-wider text-[10px] cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
