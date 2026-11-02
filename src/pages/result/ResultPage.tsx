import React, { useState } from 'react';
import { RotateCcw, BookOpen, X, ChevronRight } from 'lucide-react';
import { StoryAnswer, Story } from '../../types';
import { STORYBOARD_CAMPAIGN } from '../../data/storyboardData';
import { MAX_POINTS_PER_STORY, calculateStoryPoints } from '../../hooks/useGameState';
import { AudioToggle } from '../../components/AudioToggle';
import { playSoundEffect } from '../../utils/audio';
import { getSlotLabel } from '../../utils/text';
import logoJenama from '../../../assets/logo-jenama.webp?v2';

interface ResultPageProps {
  score: number;
  answers: StoryAnswer[];
  isMuted: boolean;
  onToggleAudio: () => void;
  onRestart: () => void;
  getRank: (score: number) => { title: string; desc: string; color: string };
}

export function ResultPage({
  score,
  answers,
  isMuted,
  onToggleAudio,
  onRestart,
  getRank
}: ResultPageProps) {
  const rank = getRank(score);
  const maxScore = STORYBOARD_CAMPAIGN.length * MAX_POINTS_PER_STORY;
  const accuracy = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  // Rekap modal & selected story states
  const [isRekapOpen, setIsRekapOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <div
      id="result-page"
      className="min-h-screen w-screen bg-transparent relative flex flex-col items-center justify-start sm:justify-center p-2.5 sm:p-6 lg:p-10 2xl:p-16 text-slate-800 overflow-y-auto"
    >
      {/* Top Left: Logo Jenama Pusbuk - Matched with detektif digital */}
      <div
        id="result-logo-container"
        className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 z-30 shrink-0 animate-fadeIn"
      >
        <img
          id="result-logo-image"
          src={logoJenama} 
          alt="Logo Pusbuk" 
          className="h-6 sm:h-9 md:h-14 lg:h-18 2xl:h-28 w-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.45)]"
        />
      </div>

      {/* Top Right: Audio Mute/Unmute Button - Scaled for 2xl */}
      <div
        id="result-audio-container"
        className="absolute top-3 right-3 sm:top-5 sm:right-6 lg:top-8 lg:right-10 2xl:top-12 2xl:right-14 z-20 shrink-0 animate-fadeIn"
      >
        <AudioToggle
          id="result-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20 bg-white/90 backdrop-blur-sm shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[4px_4px_0px_#0f172a]"
        />
      </div>

      <div
        id="result-content-container"
        className="z-10 max-w-4xl 2xl:max-w-6xl w-full flex flex-col items-center py-8 sm:py-8 2xl:py-14 select-none animate-fadeIn"
      >
        {/* Headings */}
        <h2
          id="result-title"
          className="text-lg sm:text-3xl lg:text-4xl 2xl:text-5xl font-black font-display mb-3 sm:mb-6 2xl:mb-10 text-center tracking-wide text-slate-900"
        >
          Hasil Evaluasi Storyboarding
        </h2>

        {/* Rank & Score Dashboard Card - Strictly Flex Row Across All Devices */}
        <div
          id="result-dashboard-card"
          className="flex flex-row items-stretch gap-2 sm:gap-6 2xl:gap-8 w-full mb-3 sm:mb-8 2xl:mb-12"
        >
          {/* Circular Score Circle */}
          <div
            id="result-accuracy-card"
            className="w-5/12 sm:w-1/3 brutalist-card rounded-xl sm:rounded-2xl 2xl:rounded-3xl p-2 sm:p-5 2xl:p-8 flex flex-col items-center justify-center text-center bg-white shrink-0"
          >
            <span
              id="result-accuracy-label"
              className="text-[7.5px] sm:text-[9px] 2xl:text-sm font-display font-bold text-slate-500 tracking-wider mb-1 sm:mb-3 2xl:mb-4"
            >
              Nilai Akhir
            </span>
            <div
              id="result-accuracy-circle"
              className="relative w-14 h-14 sm:w-28 sm:h-28 2xl:w-40 2xl:w-40 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border-2 sm:border-4 2xl:border-6 border-slate-200"></div>
              <div 
                className="absolute inset-0 rounded-full border-2 sm:border-4 2xl:border-6 border-[#346641]"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span id="result-accuracy-percentage" className="text-sm sm:text-2xl 2xl:text-4xl font-black font-display text-slate-900">{accuracy}%</span>
                <span id="result-accuracy-completed" className="text-[6.5px] sm:text-[8px] 2xl:text-xs font-display text-[#346641] font-bold mt-0.5">
                  {score}/{maxScore} Poin
                </span>
              </div>
            </div>
          </div>

          {/* Rank Badge description */}
          <div
            id="result-rank-card"
            className="w-7/12 sm:w-2/3 brutalist-card rounded-xl sm:rounded-2xl 2xl:rounded-3xl p-2.5 sm:p-5 2xl:p-8 flex flex-col justify-between bg-white relative overflow-hidden"
          >
            <div>
              <span
                id="result-rank-label"
                className="text-[7.5px] sm:text-[9px] 2xl:text-sm font-display font-bold text-slate-500 tracking-wider block mb-1 2xl:mb-2"
              >
                Kategori Kemahiran
              </span>
              
              <div
                id="result-rank-badge"
                className={`inline-flex self-start px-2 sm:px-3 2xl:px-4 py-0.5 sm:py-1 2xl:py-2 rounded-md sm:rounded-lg 2xl:rounded-xl text-[9px] sm:text-xs 2xl:text-lg font-display font-bold mb-1 sm:mb-2 2xl:mb-4 ${rank.color}`}
              >
                {rank.title}
              </div>

              <p
                id="result-rank-desc"
                className="text-slate-700 text-[9.5px] sm:text-xs 2xl:text-base leading-tight sm:leading-relaxed max-w-lg 2xl:max-w-2xl mb-1.5 sm:mb-3 2xl:mb-5 font-medium line-clamp-3 sm:line-clamp-none"
              >
                {rank.desc}
              </p>
            </div>
            
            <div
              id="result-stats-summary"
              className="flex flex-wrap items-center gap-1.5 sm:gap-4 2xl:gap-6 text-[7.5px] sm:text-xs 2xl:text-sm font-display text-slate-500 font-bold border-t border-slate-100 pt-1.5 2xl:pt-3"
            >
              <div id="result-stat-arranged" className="flex items-center gap-1 2xl:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 2xl:w-3.5 2xl:h-3.5 rounded-full bg-emerald-500 border border-slate-900"></div>
                <span>Total Poin: {score}/{maxScore}</span>
              </div>
              <div id="result-stat-evaluated" className="flex items-center gap-1 2xl:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 2xl:w-3.5 2xl:h-3.5 rounded-full bg-[#346641] border border-slate-900"></div>
                <span>Evaluasi: {STORYBOARD_CAMPAIGN.length} Level</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Left (Rekap Level) and Right (Ulangi) - Flex Fit Container */}
        <div
          id="result-action-buttons-group"
          className="flex flex-row items-center justify-center gap-2 sm:gap-4 2xl:gap-6 w-full max-w-md 2xl:max-w-xl mb-4"
        >
          <button
            id="result-rekap-button"
            type="button"
            onClick={() => {
              playSoundEffect('pop');
              setIsRekapOpen(true);
            }}
            className="flex-1 brutalist-button px-3 sm:px-6 2xl:px-8 py-2.5 sm:py-3.5 2xl:py-5 rounded-xl 2xl:rounded-2xl font-bold font-display text-[11px] sm:text-sm 2xl:text-lg tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 2xl:gap-3 cursor-pointer bg-slate-900 text-white border-2 2xl:border-3 border-slate-900 shadow-[3px_3px_0px_#346641] sm:shadow-[4px_4px_0px_#346641] 2xl:shadow-[6px_6px_0px_#346641] hover:bg-slate-800 active:translate-x-[1px] active:translate-y-[1px]"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6 text-white shrink-0 stroke-[2.5]" />
            <span className="whitespace-nowrap">Rekap Level</span>
          </button>

          <button
            id="result-restart-button"
            type="button"
            onClick={onRestart}
            className="flex-1 brutalist-button px-3 sm:px-6 2xl:px-8 py-2.5 sm:py-3.5 2xl:py-5 rounded-xl 2xl:rounded-2xl font-bold font-display text-[11px] sm:text-sm 2xl:text-lg tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 2xl:gap-3 cursor-pointer bg-[#346641] hover:bg-[#2b5436] text-white border-2 2xl:border-3 border-slate-900 shadow-[3px_3px_0px_#0f172a] sm:shadow-[4px_4px_0px_#0f172a] 2xl:shadow-[6px_6px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6 text-white shrink-0 stroke-[2.5]" />
            <span className="whitespace-nowrap">Ulangi</span>
          </button>
        </div>
      </div>

      {/* Story Detail Compact Modal */}
      {selectedStory && (
        <div
          id="story-review-modal-backdrop"
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 2xl:p-8 animate-fadeIn"
        >
          <div
            id="story-review-modal-dismiss"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedStory(null)}
          />
          <div
            id="story-review-modal-container"
            className="relative w-full max-w-lg 2xl:max-w-2xl h-[95vh] brutalist-card bg-white rounded-2xl 2xl:rounded-3xl p-4 sm:p-6 2xl:p-8 flex flex-col justify-between z-10 select-none shadow-[6px_6px_0px_#0f172a]"
          >
            {/* Modal Header */}
            <div id="story-review-modal-header" className="flex items-center justify-between border-b-2 2xl:border-3 border-slate-900 pb-3 2xl:pb-4 shrink-0">
              <div className="flex items-center gap-2 2xl:gap-3 text-[#346641] min-w-0 pr-2">
                <BookOpen className="w-5 h-5 2xl:w-7 2xl:h-7 shrink-0" />
                <h4 id="story-review-modal-title" className="font-display text-xs 2xl:text-base font-bold tracking-wider truncate">
                  Ulasan Level {selectedStory.id}: {selectedStory.title}
                </h4>
              </div>
              <button
                id="story-review-modal-close-button"
                type="button"
                onClick={() => setSelectedStory(null)}
                className="p-1 2xl:p-2 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer shrink-0"
              >
                <X className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-800" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div id="story-review-modal-body" className="flex-1 py-4 2xl:py-6 flex flex-col gap-4 2xl:gap-6 overflow-y-auto">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] 2xl:text-xs font-display font-bold text-slate-500 tracking-widest">
                  Struktur & Analisis Alur Narasi:
                </span>
                <p
                  id="story-review-narrative-explanation"
                  className="text-slate-800 text-xs sm:text-sm 2xl:text-base leading-relaxed font-sans text-justify font-medium bg-slate-50 border-2 2xl:border-3 border-slate-900 p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl shadow-[2px_2px_0px_#0f172a]"
                >
                  {selectedStory.explanation}
                </p>
              </div>

              {/* Adegan Preview Mini List */}
              <div id="story-review-scenes-list" className="flex flex-col gap-2 pt-2">
                <span className="text-[10px] 2xl:text-xs font-display font-bold text-slate-500 tracking-widest">
                  Urutan Kronologis Adegan:
                </span>
                <div className="grid grid-cols-2 gap-2 2xl:gap-3">
                  {selectedStory.scenes.map((s, idx) => (
                    <div
                      key={s.id}
                      id={`story-review-scene-item-${s.id}`}
                      className="p-2 2xl:p-3 border 2xl:border-2 border-slate-900 rounded-lg 2xl:rounded-xl bg-slate-50 flex items-center gap-2 2xl:gap-3"
                    >
                      <img
                        id={`story-review-scene-img-${s.id}`}
                        src={s.imageUrl}
                        alt={s.title}
                        className="w-14 sm:w-16 2xl:w-20 aspect-video object-cover rounded bg-slate-950 border border-slate-900 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span id={`story-review-scene-slot-${s.id}`} className="text-[8px] 2xl:text-[10px] font-display font-bold text-[#346641] block">{getSlotLabel(idx)}</span>
                        <p id={`story-review-scene-title-${s.id}`} className="text-[10px] 2xl:text-xs font-bold font-display text-slate-900 truncate">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div id="story-review-modal-footer" className="border-t-2 2xl:border-3 border-slate-900 pt-3 2xl:pt-4 shrink-0">
              <button
                id="story-review-modal-dismiss-button"
                type="button"
                onClick={() => setSelectedStory(null)}
                className="w-full py-2.5 2xl:py-3.5 bg-[#346641] hover:bg-[#2b5436] border-2 2xl:border-3 border-slate-900 text-white rounded-xl 2xl:rounded-2xl text-xs 2xl:text-base font-display font-bold flex items-center justify-center gap-1 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <span>Tutup Ulasan</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Rekapitulasi & Ulasan Level List Modal */}
      {isRekapOpen && (
        <div
          id="rekap-modal-backdrop"
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 2xl:p-8 animate-fadeIn"
        >
          <div
            id="rekap-modal-dismiss"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsRekapOpen(false)}
          />
          <div
            id="rekap-modal-container"
            className="relative w-full max-w-xl 2xl:max-w-3xl h-[95vh] brutalist-card bg-white rounded-2xl 2xl:rounded-3xl p-4 sm:p-6 2xl:p-8 flex flex-col justify-between z-10 select-none shadow-[6px_6px_0px_#0f172a]"
          >
            {/* Modal Header */}
            <div id="rekap-modal-header" className="flex items-center justify-between border-b-2 2xl:border-3 border-slate-900 pb-3 2xl:pb-4 shrink-0">
              <div className="flex items-center gap-2 2xl:gap-3 text-[#346641]">
                <BookOpen className="w-5 h-5 2xl:w-7 2xl:h-7 shrink-0" />
                <h4 id="rekap-modal-title" className="font-display text-xs 2xl:text-base font-bold tracking-wider">
                  Rekapitulasi Level & Ulasan
                </h4>
              </div>
              <button
                id="rekap-modal-close-button"
                type="button"
                onClick={() => setIsRekapOpen(false)}
                className="p-1 2xl:p-2 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer shrink-0"
              >
                <X className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-800" />
              </button>
            </div>

            {/* Level List inside Modal */}
            <div id="rekap-modal-levels-list" className="flex-1 py-4 2xl:py-6 flex flex-col gap-3 2xl:gap-4 overflow-y-auto">
              <p id="rekap-modal-instruction" className="text-xs 2xl:text-sm text-slate-500 font-display font-bold tracking-wider">
                Pilih level di bawah untuk membuka ulasan narasi:
              </p>
              {STORYBOARD_CAMPAIGN.map((c) => {
                const ans = answers.find(a => a.storyId === c.id);
                const misses = ans?.missCount ?? (ans ? Math.max(0, ans.attemptsCount - 1) : 0);
                const pts = ans?.points ?? calculateStoryPoints(misses);
                return (
                  <button
                    key={c.id}
                    id={`rekap-level-item-${c.id}`}
                    type="button"
                    onClick={() => {
                      setSelectedStory(c);
                    }}
                    className="w-full p-4 2xl:p-6 border-2 2xl:border-3 border-slate-900 bg-slate-50 hover:bg-[#346641]/10 rounded-xl 2xl:rounded-2xl flex items-center justify-between shadow-[3px_3px_0px_#0f172a] 2xl:shadow-[5px_5px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer text-left"
                  >
                    <div className="flex flex-col min-w-0 pr-2">
                      <div className="flex items-center gap-2 2xl:gap-3 mb-1">
                        <span id={`rekap-level-badge-${c.id}`} className="bg-slate-900 text-white font-display text-[10px] 2xl:text-xs font-bold px-2 2xl:px-3 py-0.5 2xl:py-1 rounded">
                          Level {c.id}
                        </span>
                        <span id={`rekap-level-title-${c.id}`} className="text-sm 2xl:text-lg font-bold font-display text-slate-900 truncate">
                          {c.title}
                        </span>
                      </div>
                      <span id={`rekap-level-attempts-${c.id}`} className="text-xs 2xl:text-sm font-display text-slate-500 truncate">
                        {ans
                          ? `${misses === 0 ? 'Tanpa Salah' : `Salah ${misses}x`} • Nilai +${pts}`
                          : 'Selesai'}
                      </span>
                    </div>
                    <div id={`rekap-level-button-action-${c.id}`} className="flex items-center gap-1 2xl:gap-2 shrink-0 text-[#346641] font-bold text-xs 2xl:text-sm font-display bg-white border border-[#346641]/30 px-3 2xl:px-4 py-1.5 2xl:py-2 rounded-lg 2xl:rounded-xl shadow-xs">
                      <span>Buka Ulasan</span>
                      <ChevronRight className="w-4 h-4 2xl:w-5 2xl:h-5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div id="rekap-modal-footer" className="border-t-2 2xl:border-3 border-slate-900 pt-3 2xl:pt-4 shrink-0">
              <button
                id="rekap-modal-dismiss-button"
                type="button"
                onClick={() => setIsRekapOpen(false)}
                className="w-full py-2.5 2xl:py-3.5 bg-[#346641] hover:bg-[#2b5436] border-2 2xl:border-3 border-slate-900 text-white rounded-xl 2xl:rounded-2xl text-xs 2xl:text-base font-display font-bold flex items-center justify-center gap-1 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <span>Tutup Rekap</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
