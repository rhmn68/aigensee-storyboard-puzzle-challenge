import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playClick } from '../utils/audio';

interface AudioToggleProps {
  isMuted: boolean;
  onToggle: () => void;
  className?: string;
  id?: string;
}

export function AudioToggle({
  isMuted,
  onToggle,
  className = '',
  id = 'audio-toggle-button',
}: AudioToggleProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    onToggle();
  };

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      aria-label={isMuted ? 'Nyalakan Musik (Unmute)' : 'Matikan Musik (Mute)'}
      title={isMuted ? 'Nyalakan Musik (Unmute)' : 'Matikan Musik (Mute)'}
      className={`group relative inline-flex items-center justify-center shrink-0 rounded-xl sm:rounded-2xl border-2 2xl:border-3 border-slate-900 transition-all cursor-pointer select-none ${
        isMuted
          ? 'bg-slate-100 hover:bg-slate-200 text-slate-500 shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px]'
          : 'bg-[#346641]/10 hover:bg-[#346641]/20 text-[#346641] shadow-[2px_2px_0px_#346641] 2xl:shadow-[3px_3px_0px_#346641] active:translate-x-[1px] active:translate-y-[1px]'
      } ${className}`}
    >
      {isMuted ? (
        <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 stroke-[2.5] text-slate-600 group-hover:text-slate-900 transition-colors" />
      ) : (
        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 2xl:w-9 2xl:h-9 stroke-[2.5] text-[#346641] group-hover:text-[#2b5436] transition-colors" />
      )}
    </button>
  );
}
