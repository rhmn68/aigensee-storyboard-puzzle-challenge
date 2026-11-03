import React, { useEffect, useRef, useState } from 'react';

export function FullscreenModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (document.fullscreenEnabled && !document.fullscreenElement) setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    confirmRef.current?.focus();
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) setIsOpen(false);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isOpen]);

  const enterFullscreen = async () => {
    setError('');
    setIsPending(true);
    try {
      await document.documentElement.requestFullscreen();
      setIsOpen(false);
    } catch {
      setError('Mode layar penuh belum dapat diaktifkan. Coba lagi atau pilih Nanti Saja.');
    } finally {
      setIsPending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="fullscreen-modal-backdrop"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 select-none animate-fadeIn"
      onKeyDown={event => {
        if (event.key === 'Escape') setIsOpen(false);
        if (event.key === 'Tab') {
          event.preventDefault();
          if (document.activeElement === confirmRef.current) cancelRef.current?.focus();
          else confirmRef.current?.focus();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="fullscreen-modal-title"
        aria-describedby="fullscreen-modal-description"
        className="w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-slate-900 bg-[#FAF8F5] shadow-[6px_6px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a]"
      >
        <header className="bg-[#346641] text-white px-5 py-4 sm:px-6 sm:py-5 border-b-2 sm:border-b-4 border-slate-900 text-center">
          <h2 id="fullscreen-modal-title" className="font-display text-lg sm:text-xl font-black tracking-wide">
            Mode Layar Penuh
          </h2>
        </header>
        <div className="p-5 sm:p-6 text-center">
          <p id="fullscreen-modal-description" className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
            Ingin bermain dalam mode layar penuh agar lebih nyaman menyusun storyboard?
          </p>
          <p className="mt-2 text-xs text-slate-500">Tekan Esc untuk keluar dari layar penuh.</p>
          {error && <p role="alert" className="mt-3 text-sm text-rose-700">{error}</p>}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              ref={confirmRef}
              type="button"
              aria-busy={isPending}
              onClick={() => { if (!isPending) void enterFullscreen(); }}
              className="rounded-xl border-2 border-slate-900 bg-[#346641] hover:bg-[#2b5436] px-3 py-3 text-white font-display text-sm font-black shadow-[3px_3px_0px_#0f172a] cursor-pointer transition-colors active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            >
              {isPending ? 'Membuka…' : 'Ya, Layar Penuh'}
            </button>
            <button
              ref={cancelRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-xl border-2 border-slate-900 bg-white hover:bg-slate-100 px-3 py-3 text-slate-700 font-display text-sm font-black shadow-[3px_3px_0px_#0f172a] cursor-pointer transition-colors active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            >
              Nanti Saja
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
