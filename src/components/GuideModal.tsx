import React, { useState, useEffect } from 'react';
import { X, BookOpen, MoveVertical, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export function GuideModal({ isOpen, onClose, title, description }: GuideModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Reset slide index when modal is opened/closed
  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="guide-modal-backdrop"
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 2xl:p-8 animate-fadeIn"
    >
      {/* Backdrop click to close */}
      <div id="guide-modal-dismiss-area" className="absolute inset-0 cursor-default" onClick={onClose} />
      
      {/* Compact Modal Container */}
      <div
        id="guide-modal-container"
        className="relative w-full max-w-md 2xl:max-w-xl brutalist-card bg-white rounded-2xl 2xl:rounded-3xl p-4 sm:p-5 2xl:p-8 flex flex-col justify-between z-10 select-none shadow-[6px_6px_0px_#0f172a]"
      >
        {/* Header */}
        <div id="guide-modal-header" className="flex items-center justify-between border-b-2 border-slate-900 pb-2.5 2xl:pb-4 shrink-0">
          <div className="flex items-center gap-2 2xl:gap-3 text-[#346641]">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 shrink-0" />
            <h4 id="guide-modal-title" className="font-display text-xs 2xl:text-base font-bold tracking-wider">
              Panduan Level ({currentSlide + 1}/{totalSlides})
            </h4>
          </div>
          <button
            id="guide-modal-close-button"
            type="button"
            onClick={onClose}
            className="p-1 2xl:p-2 rounded-lg border-2 border-transparent hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer"
          >
            <X className="w-4 h-4 2xl:w-6 2xl:h-6 text-slate-800" />
          </button>
        </div>

        {/* Content Slides (Compact height, no scrolling required) */}
        <div id="guide-modal-body" className="py-4 2xl:py-6 flex flex-col justify-center min-h-[160px] sm:min-h-[180px] 2xl:min-h-[220px]">
          {currentSlide === 0 && (
            <div id="guide-slide-0" className="flex flex-col gap-2.5 2xl:gap-4 animate-fadeIn">
              <h3 id="guide-story-title" className="text-base sm:text-lg 2xl:text-2xl font-bold font-display text-slate-900 leading-snug">
                {title}
              </h3>
              <p id="guide-story-desc" className="text-xs 2xl:text-base text-slate-700 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          )}

          {currentSlide === 1 && (
            <div id="guide-slide-1" className="flex flex-col gap-3 2xl:gap-4 animate-fadeIn">
              <div className="flex items-center gap-2 2xl:gap-3 text-slate-900 font-bold font-display text-xs 2xl:text-base tracking-wider">
                <MoveVertical className="w-4 h-4 2xl:w-6 2xl:h-6 text-[#346641]" />
                <span>Cara Mengurutkan Adegan:</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-900 p-3 2xl:p-5 rounded-xl 2xl:rounded-2xl flex flex-col gap-2 2xl:gap-3 text-xs 2xl:text-base text-slate-700 font-medium shadow-[2px_2px_0px_#0f172a]">
                <p className="flex items-start gap-2">
                  <span className="font-bold text-[#346641] shrink-0">1.</span>
                  <span><strong>Tarik & Lepas (Drag & Drop):</strong> Geser langsung kartu cerita ke atas atau ke bawah.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-[#346641] shrink-0">2.</span>
                  <span><strong>Tombol Geser Atas / Bawah:</strong> Gunakan tombol di bagian bawah setiap kartu untuk menukar posisi.</span>
                </p>
              </div>
            </div>
          )}

          {currentSlide === 2 && (
            <div id="guide-slide-2" className="flex flex-col gap-3 2xl:gap-4 animate-fadeIn">
              <div className="flex items-center gap-2 2xl:gap-3 text-slate-900 font-bold font-display text-xs 2xl:text-base tracking-wider">
                <CheckCircle2 className="w-4 h-4 2xl:w-6 2xl:h-6 text-emerald-600" />
                <span>Pemeriksaan Cerita & Skor:</span>
              </div>
              <div className="bg-emerald-50/60 border-2 border-slate-900 p-3 2xl:p-5 rounded-xl 2xl:rounded-2xl flex flex-col gap-2 2xl:gap-3 text-xs 2xl:text-base text-slate-700 font-medium shadow-[2px_2px_0px_#0f172a]">
                <p className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700 shrink-0">✓</span>
                  <span>Susun adegan kronologis dari <strong>Slot Pertama (Atas)</strong> hingga <strong>Slot Terakhir (Bawah)</strong>.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700 shrink-0">✓</span>
                  <span>Klik tombol <strong>Periksa Cerita</strong> jika urutan sudah sesuai untuk mendapat skor penuh.</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div id="guide-modal-footer" className="flex flex-col gap-2.5 2xl:gap-4 border-t-2 border-slate-900 pt-3 2xl:pt-5 shrink-0">
          {/* Progress indicators */}
          <div id="guide-slide-dots" className="flex justify-center gap-1.5 2xl:gap-2.5 mb-0.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <span
                key={idx}
                id={`guide-dot-${idx}`}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2.5 h-2.5 2xl:w-3.5 2xl:h-3.5 rounded-full border 2xl:border-2 border-slate-900 cursor-pointer transition-all ${
                  currentSlide === idx ? 'bg-[#346641] scale-110 shadow-xs' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>

          <div id="guide-modal-buttons" className="flex items-center gap-2 2xl:gap-3">
            {currentSlide > 0 && (
              <button
                id="guide-modal-prev-button"
                type="button"
                onClick={() => setCurrentSlide(prev => prev - 1)}
                className="px-3.5 2xl:px-5 py-2 2xl:py-3.5 border-2 border-slate-900 hover:bg-slate-50 text-slate-800 rounded-lg 2xl:rounded-xl text-xs 2xl:text-base font-display font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 2xl:w-5 2xl:h-5" />
                <span>Sebelumnya</span>
              </button>
            )}
            
            {currentSlide < totalSlides - 1 ? (
              <button
                id="guide-modal-next-button"
                type="button"
                onClick={() => setCurrentSlide(prev => prev + 1)}
                className="flex-1 py-2 2xl:py-3.5 bg-[#346641] hover:bg-[#2b5436] border-2 border-slate-900 text-white rounded-lg 2xl:rounded-xl text-xs 2xl:text-base font-display font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-3.5 h-3.5 2xl:w-5 2xl:h-5" />
              </button>
            ) : (
              <button
                id="guide-modal-start-button"
                type="button"
                onClick={onClose}
                className="flex-1 py-2 2xl:py-3.5 bg-[#346641] hover:bg-[#2b5436] border-2 border-slate-900 text-white rounded-lg 2xl:rounded-xl text-xs 2xl:text-base font-display font-bold flex items-center justify-center gap-1 transition-all shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <span>Mulai Menyusun!</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
