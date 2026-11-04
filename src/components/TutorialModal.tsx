import React, { useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, Play, X } from 'lucide-react';

interface TutorialModalProps {
  isOpen: boolean;
  onContinue: () => void;
}

export function TutorialModal({ isOpen, onContinue }: TutorialModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onContinue();
      if (event.key !== 'Tab') return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href], iframe');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [isOpen, onContinue]);

  if (!isOpen) return null;

  return (
    <div id="tutorial-modal-backdrop" className="fixed inset-0 z-[998] flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="tutorial-modal-title" aria-describedby="tutorial-modal-description" className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a]">
        <header className="flex items-center gap-3 p-4 sm:p-5 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white border-b-2 sm:border-b-4 border-slate-900">
          <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0">
            <Play aria-hidden="true" className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h2 id="tutorial-modal-title" className="font-display font-black text-base sm:text-xl">Video Tutorial</h2>
            <p className="text-xs text-emerald-100">Cara Bermain Puzzle Storyboard</p>
          </div>
          <button ref={closeRef} type="button" onClick={onContinue} aria-label="Tutup tutorial dan lanjut bermain" className="w-9 h-9 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2">
            <X aria-hidden="true" className="w-5 h-5" />
          </button>
        </header>
        <div className="p-3 sm:p-5">
          <p id="tutorial-modal-description" className="mb-3 text-xs sm:text-sm text-slate-600">Tonton tutorial berikut untuk mengenal cara menyusun alur cerita, lalu lanjutkan ke permainan.</p>
          <div className="aspect-video overflow-hidden rounded-xl border-2 border-slate-900 bg-slate-950">
            <iframe
              title="Tutorial cara bermain Puzzle Storyboard"
              src="https://www.youtube-nocookie.com/embed/QAruA-nbLPA?rel=0"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-3 p-3 sm:p-5 border-t-2 border-slate-900 bg-slate-50">
          <a href="https://youtu.be/QAruA-nbLPA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 underline underline-offset-4">
            Buka di YouTube <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
          </a>
          <button type="button" onClick={onContinue} className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-[#346641] hover:bg-[#2b5436] text-white font-display font-black text-xs sm:text-sm rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_#0f172a] cursor-pointer active:translate-y-px">
            Lanjut Bermain <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </button>
        </footer>
      </section>
    </div>
  );
}
