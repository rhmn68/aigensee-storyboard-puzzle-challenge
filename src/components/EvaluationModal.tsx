import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, BookOpen, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EvaluationModalProps {
  isOpen: boolean;
  explanation: string;
  onAdvance: () => void;
  onClose?: () => void;
  currentStoryIndex: number;
  totalStories: number;
  allCompleted?: boolean;
  points?: number;
}

export function EvaluationModal({
  isOpen,
  explanation,
  onAdvance,
  onClose,
  currentStoryIndex,
  totalStories,
  allCompleted,
  points = 5
}: EvaluationModalProps) {
  // Trigger festive confetti animation when modal opens
  useEffect(() => {
    if (isOpen) {
      // Fire confetti burst from left and right sides
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#346641', '#10b981', '#f59e0b', '#3b82f6', '#ec4899']
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#346641', '#10b981', '#f59e0b']
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#346641', '#10b981', '#f59e0b']
        });
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isLastStory = allCompleted || currentStoryIndex === totalStories - 1;

  return (
    <div
      id="evaluation-modal-backdrop"
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 2xl:p-8 animate-fadeIn"
    >
      {/* Backdrop click to dismiss if onClose is provided */}
      {onClose && (
        <div
          id="evaluation-modal-dismiss-area"
          className="absolute inset-0 cursor-default"
          onClick={onClose}
        />
      )}

      {/* Modal Container */}
      <div
        id="evaluation-modal-container"
        className="relative w-full max-w-md sm:max-w-lg 2xl:max-w-2xl brutalist-card bg-emerald-50 border-emerald-700 rounded-2xl 2xl:rounded-3xl p-4 sm:p-6 2xl:p-8 flex flex-col gap-3 sm:gap-4 2xl:gap-6 z-10 select-none shadow-[4px_4px_0px_#047857] sm:shadow-[6px_6px_0px_#047857] max-h-[85vh] overflow-y-auto"
      >
        {/* Header */}
        <div id="evaluation-modal-header" className="flex items-center justify-between border-b-2 2xl:border-3 pb-2.5 2xl:pb-4 border-slate-900 shrink-0">
          <div className="flex items-center gap-2 2xl:gap-3">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 text-emerald-700 shrink-0 animate-bounce" />
            <h4 id="evaluation-modal-title" className="font-display text-xs sm:text-sm 2xl:text-lg font-bold text-emerald-800 tracking-wider">
              Storyboard Sejajar Benar (+{points})
            </h4>
          </div>
          {onClose && (
            <button
              id="evaluation-modal-close-button"
              type="button"
              onClick={onClose}
              className="p-1 2xl:p-2 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-emerald-100 transition-all cursor-pointer"
              title="Tutup"
            >
              <X className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-800" />
            </button>
          )}
        </div>

        {/* Content */}
        <div id="evaluation-modal-content" className="flex flex-col gap-2 2xl:gap-3 py-1">
          <div className="flex items-center gap-1.5 2xl:gap-2 text-[10px] sm:text-xs 2xl:text-base font-display text-emerald-800 font-bold">
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 2xl:w-6 2xl:h-6 text-[#346641] shrink-0" />
            <span>Ulasan Alur Cerita</span>
          </div>
          <p
            id="evaluation-modal-explanation"
            className="text-slate-700 leading-relaxed font-sans text-justify text-xs sm:text-[13px] 2xl:text-base font-medium sm:font-semibold bg-white/80 border-2 2xl:border-3 border-slate-900 p-3 sm:p-4 2xl:p-6 rounded-xl 2xl:rounded-2xl shadow-[2px_2px_0px_#0f172a] overflow-y-auto max-h-[40vh]"
          >
            {explanation}
          </p>
        </div>

        {/* Actions */}
        <button
          id="evaluation-modal-advance-button"
          type="button"
          onClick={onAdvance}
          className="w-full py-2.5 sm:py-3 2xl:py-4 bg-[#346641] hover:bg-[#2b5436] border-2 2xl:border-3 border-slate-900 text-white rounded-xl 2xl:rounded-2xl text-xs sm:text-sm 2xl:text-lg font-display font-bold flex items-center justify-center gap-2 2xl:gap-3 shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#0f172a] transition-all cursor-pointer shrink-0 mt-1"
        >
          <span>{isLastStory ? 'Lihat Hasil Evaluasi' : 'Lanjut ke Storyboard Berikutnya'}</span>
          <ArrowRight className="w-4 h-4 2xl:w-6 2xl:h-6" />
        </button>
      </div>
    </div>
  );
}
