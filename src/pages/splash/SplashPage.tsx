import React from 'react';
import bgSplash from '../../../assets/bg-storyboard-desk.jpeg';
import btnMulai from '../../../assets/btn-mulai.webp';
import logoJenama from '../../../assets/logo-jenama.webp';
import { AudioToggle } from '../../components/AudioToggle';
import { playSynthesizerNote } from '../../utils/audio';

interface SplashPageProps {
  onStart: () => void;
  onOpenObjectives?: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export function SplashPage({ onStart, isMuted, onToggleAudio }: SplashPageProps) {
  const handleStartClick = () => {
    playSynthesizerNote('btn');
    onStart();
  };

  return (
    <div
      id="splash-page"
      className="fixed inset-0 w-screen h-screen select-none overflow-hidden bg-cover bg-center bg-no-repeat z-10"
      style={{ backgroundImage: `url(${bgSplash})` }}
    >
      {/* Subtle depth gradient overlay */}
      <div
        id="splash-vignette-overlay"
        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-amber-950/15 pointer-events-none"
      />

      {/* Top Left: Logo Jenama Kemendikdasmen / Pusbuk */}
      <div
        id="splash-logo-container"
        className="fixed top-3 left-3 sm:top-5 sm:left-5 z-40 shrink-0 animate-fadeIn"
      >
        <img
          id="splash-logo-image"
          src={logoJenama}
          alt="Logo Pusbuk"
          className="h-7 sm:h-10 md:h-14 lg:h-16 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)]"
        />
      </div>

      {/* Top Right Controls: Audio Toggle */}
      <div
        id="splash-header-controls"
        className="fixed top-3 right-3 sm:top-5 sm:right-6 lg:top-7 lg:right-8 2xl:top-10 2xl:right-12 z-30 flex items-center animate-fadeIn"
      >
        <AudioToggle
          id="splash-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
          className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 2xl:h-16 2xl:w-16 bg-white/95 backdrop-blur-xs shadow-[2px_2px_0px_#0f172a]"
        />
      </div>

      {/* Centered title and start button stack */}
      <div className="w-full h-full flex justify-center items-center px-6 sm:px-8">
        <div
          id="splash-card-column"
          className="flex flex-col items-center max-w-[280px] sm:max-w-[360px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px] 2xl:max-w-[800px] w-full z-20"
        >
          {/* Floating container for titles to create a smooth bobbing/wiggle effect */}
          <div className="w-full flex flex-col items-center animate-float-wiggle">
            <h1 className="w-full text-center font-display font-black leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-white drop-shadow-[3px_5px_0px_#0f172a]" style={{ WebkitTextStroke: '1px #0f172a' }}>
              <span id="splash-title-puzzle" className="block text-amber-300 animate-title-1">Puzzle</span>
              <span id="splash-title-storyboard" className="block animate-title-2">Storyboard</span>
            </h1>
          </div>

          {/* Centered Start Button with Pulse and Hover Grow Effect */}
          <button
            id="splash-start-button"
            type="button"
            onClick={handleStartClick}
            className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 2xl:mt-14 cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300 hover:brightness-110 focus:outline-none animate-btn-pulse"
            aria-label="Mulai Menyusun"
          >
            <img
              id="splash-start-button-image"
              src={btnMulai}
              alt="Mulai Menyusun"
              className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 2xl:w-[480px] h-auto object-contain select-none pointer-events-none"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
