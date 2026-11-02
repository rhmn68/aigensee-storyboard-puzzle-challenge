import React, { useState, useEffect } from 'react';
import { Target, Puzzle, ListChecks, ChevronLeft, ChevronRight, X, Sparkles, GraduationCap } from 'lucide-react';
import { playSynthesizerNote } from '../utils/audio';

interface ObjectivesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart?: () => void;
}

interface SlideItem {
  keyword: string;
  text: string;
}

interface Slide {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  iconWrap: string;
  accentBorder: string;
  items: SlideItem[];
}

const slides: Slide[] = [
  {
    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
    title: '1. Tujuan Pembelajaran',
    subtitle: 'Simulasi Puzzle Storyboard Naratif',
    iconWrap: 'bg-emerald-50 border-emerald-300',
    accentBorder: 'border-emerald-200 bg-emerald-50/40',
    items: [
      {
        keyword: 'Literasi Visual & Penalaran Alur Narasi',
        text: 'Melatih kemampuan bernalar kritis dan pemahaman visual peserta didik dalam menganalisis rangkaian adegan cerita rakyat nusantara, menyusun kronologi alur secara logis dan runtut, serta mengidentifikasi struktur narasi (orientasi, komplikasi, klimaks, dan resolusi).',
      },
    ],
  },
  {
    icon: <Puzzle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
    title: '2. Mengenali Pola & Struktur Cerita',
    subtitle: 'Pilar Berpikir Komputasional (Bagian 1)',
    iconWrap: 'bg-amber-50 border-amber-300',
    accentBorder: 'border-amber-200 bg-amber-50/40',
    items: [
      {
        keyword: 'Dekomposisi (Decomposition)',
        text: 'Memecah cerita utuh menjadi potongan-potongan adegan (scenes) kecil yang masing-masing memuat peran penting dalam perkembangan alur cerita.',
      },
      {
        keyword: 'Pengenalan Pola (Pattern Recognition)',
        text: 'Mengamati petunjuk visual, kesinambungan ekspresi tokoh, dan latar cerita untuk menemukan hubungan sebab-akibat antaradegan secara tepat.',
      },
    ],
  },
  {
    icon: <ListChecks className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
    title: '3. Menyusun & Merangkai Alur Kisah',
    subtitle: 'Pilar Berpikir Komputasional (Bagian 2)',
    iconWrap: 'bg-blue-50 border-blue-300',
    accentBorder: 'border-blue-200 bg-blue-50/40',
    items: [
      {
        keyword: 'Abstraksi (Abstraction)',
        text: 'Memfokuskan perhatian pada informasi visual kunci dari setiap bingkai adegan dan mengabaikan detail sampingan yang tidak mempengaruhi inti cerita.',
      },
      {
        keyword: 'Algoritma Kronologis (Chronological Algorithm)',
        text: 'Menyusun rangkaian urutan adegan yang terstruktur dari Slot Pertama (adegan pembuka) hingga adegan penutup sehingga membentuk narasi yang padu dan bermakna.',
      },
    ],
  },
];

export function ObjectivesModal({ isOpen, onClose, onStart }: ObjectivesModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const slide = slides[currentSlide];
  const total = slides.length;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === total - 1;

  const handleNext = () => {
    playSynthesizerNote('btn');
    if (isLast) {
      if (onStart) {
        onStart();
      }
      onClose();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      playSynthesizerNote('btn');
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleClose = () => {
    playSynthesizerNote('btn');
    onClose();
  };

  return (
    <div
      id="objectives-modal-backdrop"
      className="fixed inset-0 z-[998] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs select-none animate-fadeIn"
    >
      {/* Click outside backdrop to dismiss */}
      <div
        id="objectives-modal-dismiss-area"
        className="absolute inset-0 cursor-default"
        onClick={handleClose}
      />

      <div
        id="objectives-modal-card"
        className="relative max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl w-full mx-auto bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a] flex flex-col overflow-hidden max-h-[90vh] z-10"
      >
        {/* Header */}
        <div
          id="objectives-modal-header"
          className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-3.5 sm:p-5 pb-3 sm:pb-4 border-b-2 sm:border-b-4 border-slate-900 relative flex-shrink-0"
        >
          <div className="flex items-center gap-2.5 sm:gap-3.5 pr-8">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0 shadow-xs">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-100" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-base md:text-lg font-black tracking-tight font-display truncate">
                Penyusun Alur Storyboard
              </h3>
              <p className="text-[9px] sm:text-[11px] md:text-xs text-emerald-200 font-bold tracking-wider font-sans">
                Tujuan Pembelajaran & Bermain
              </p>
            </div>
          </div>

          <button
            type="button"
            id="objectives-modal-close-btn"
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-xs sm:text-base transition-colors cursor-pointer border border-white/20"
            title="Tutup"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div
          id="objectives-modal-body"
          className="p-3.5 sm:p-5 md:p-6 flex-1 min-h-0 overflow-y-auto flex flex-col justify-center gap-3"
        >
          {/* Slide Section Title */}
          <div className="flex items-center gap-2.5 sm:gap-3 pb-2 border-b border-slate-100">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border-2 flex items-center justify-center shrink-0 shadow-xs ${slide.iconWrap}`}>
              {slide.icon}
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm md:text-base font-black text-slate-800 tracking-wide font-display">
                {slide.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium font-sans">
                {slide.subtitle}
              </p>
            </div>
          </div>

          {/* Slide Content Items */}
          <div className="flex flex-col gap-2.5 sm:gap-3 py-1">
            {slide.items.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 text-left ${slide.accentBorder}`}
              >
                <div className="flex items-center gap-1.5 font-black text-[11px] sm:text-xs md:text-sm text-slate-900 font-display tracking-wide mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>{item.keyword}</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-slate-700 font-medium leading-relaxed font-sans text-justify">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer controls */}
        <div
          id="objectives-modal-footer"
          className="p-3 sm:p-4 md:p-5 border-t-2 sm:border-t-3 border-slate-900 bg-slate-50 flex items-center justify-between flex-shrink-0"
        >
          {/* Slide Indicator Dots */}
          <div className="flex gap-1.5 sm:gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  playSynthesizerNote('btn');
                  setCurrentSlide(idx);
                }}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-6 sm:w-8 bg-emerald-600'
                    : 'w-2 sm:w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {currentSlide > 0 && (
              <button
                type="button"
                id="objectives-btn-prev"
                onClick={handlePrev}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white hover:bg-slate-100 border-2 border-slate-900 text-slate-700 font-extrabold text-[10px] sm:text-xs md:text-sm rounded-lg sm:rounded-xl cursor-pointer transition-all flex items-center gap-1 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] font-display"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Sebelumnya</span>
              </button>
            )}

            {currentSlide < total - 1 ? (
              <button
                type="button"
                id="objectives-btn-next"
                onClick={handleNext}
                className="px-3.5 sm:px-5 py-1.5 sm:py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] sm:text-xs md:text-sm rounded-lg sm:rounded-xl cursor-pointer transition-all flex items-center gap-1 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] font-display"
              >
                <span>Lanjut</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            ) : (
              <button
                type="button"
                id="objectives-btn-finish"
                onClick={handleNext}
                className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white font-black text-[10px] sm:text-xs md:text-sm rounded-lg sm:rounded-xl cursor-pointer transition-all flex items-center gap-1.5 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] font-display"
              >
                <span>Mulai Menyusun</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
