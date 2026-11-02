import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Scene } from '../types';
import { getSlotLabel } from '../utils/text';

interface SceneCardProps {
  scene: Scene;
  idx: number;
  totalScenes: number;
  checked: boolean;
  showFeedback: boolean;
  isSolved?: boolean;
  onMoveCard: (index: number, direction: 'up' | 'down') => void;
  onDragStart: (e: React.DragEvent, index: number) => void;
  onDragOver: (e: React.DragEvent, index: number) => void;
  onDrop: (e: React.DragEvent, index: number) => void;
  onDragEnd: () => void;
  isDragging: boolean;
}

export function SceneCard({
  scene,
  idx,
  totalScenes,
  checked,
  showFeedback,
  isSolved,
  onMoveCard,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging
}: SceneCardProps) {
  const isPosCorrect = scene.id === idx;

  // Compute border and badge colors based on validation state
  let cardClass = 'brutalist-card bg-white';
  if (checked || isSolved) {
    cardClass = isPosCorrect || isSolved
      ? 'border-2 border-emerald-600 bg-emerald-50/50 shadow-[4px_4px_0px_#059669]' 
      : 'border-2 border-rose-600 bg-rose-50/50 shadow-[4px_4px_0px_#e11d48]';
  }

  // Adjust card appearance when dragging
  if (isDragging) {
    cardClass = 'border-2 border-dashed border-[#346641] bg-[#346641]/10 opacity-30 scale-95 shadow-none transition-all';
  }

  return (
    <div
      id={`scene-card-${scene.id}`}
      draggable={!showFeedback && !isSolved}
      onDragStart={(e) => onDragStart(e, idx)}
      onDragOver={(e) => onDragOver(e, idx)}
      onDrop={(e) => onDrop(e, idx)}
      onDragEnd={onDragEnd}
      className={`rounded-xl sm:rounded-2xl 2xl:rounded-3xl p-3 sm:p-4 2xl:p-6 flex flex-row gap-3 sm:gap-4 2xl:gap-6 items-center transition-all duration-200 relative group overflow-hidden ${
        isSolved ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
      } ${cardClass}`}
    >
      {/* Scene image rendering - Image Left */}
      <div
        id={`scene-image-container-${scene.id}`}
        className="w-28 sm:w-44 2xl:w-60 aspect-video rounded-lg sm:rounded-xl 2xl:rounded-2xl overflow-hidden bg-slate-950 relative border-2 border-slate-900 pointer-events-none shrink-0"
      >
        <img
          id={`scene-image-${scene.id}`}
          src={scene.imageUrl}
          alt={scene.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent"></div>
      </div>

      {/* Narrative & Info content rendering - Text Right */}
      <div id={`scene-info-${scene.id}`} className="flex-1 flex flex-col justify-between min-w-0 self-stretch">
        <div>
          {/* Header line with index, title, and validation indicators */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 2xl:gap-3 mb-1.5 sm:mb-2 2xl:mb-3">
            <span
              id={`scene-slot-badge-${scene.id}`}
              className="bg-slate-900 border-2 border-slate-900 text-[8px] sm:text-[10px] 2xl:text-xs font-display text-white font-bold px-1.5 sm:px-2 2xl:px-3 py-0.5 rounded-md 2xl:rounded-lg"
            >
              {getSlotLabel(idx)}
            </span>
            <h4
              id={`scene-title-${scene.id}`}
              className="text-xs sm:text-sm 2xl:text-lg font-bold text-slate-900 font-display truncate max-w-[150px] sm:max-w-none"
            >
              {scene.title}
            </h4>
            {(checked || isSolved) && (
              <span
                id={`scene-status-badge-${scene.id}`}
                className={`inline-flex items-center gap-0.5 text-[8px] sm:text-[9px] 2xl:text-xs font-display font-bold px-1.5 2xl:px-2.5 py-0.5 rounded-md 2xl:rounded-lg border-2 ${
                  isPosCorrect || isSolved
                    ? 'bg-emerald-100 border-emerald-700 text-emerald-800' 
                    : 'bg-rose-100 border-rose-700 text-rose-800'
                }`}
              >
                {isPosCorrect || isSolved ? '✓ OK' : '✗ Salah'}
              </span>
            )}
          </div>

          {/* Narrative description snippet */}
          <p
            id={`scene-narrative-${scene.id}`}
            className="text-slate-700 text-[10px] sm:text-xs 2xl:text-base leading-relaxed font-sans text-justify mb-2 sm:mb-3 2xl:mb-4 font-medium pointer-events-none line-clamp-3 sm:line-clamp-none"
          >
            {scene.narrative}
          </p>
        </div>

        {/* Card Controls Panel - Atas / Bawah */}
        <div id={`scene-controls-${scene.id}`} className="flex items-center gap-2 2xl:gap-3 border-t-2 border-slate-900 pt-2 2xl:pt-3 mt-auto">
          <button
            id={`scene-move-up-${scene.id}`}
            type="button"
            disabled={idx === 0 || showFeedback || isSolved}
            onClick={(e) => {
              e.stopPropagation();
              onMoveCard(idx, 'up');
            }}
            className={`flex-1 py-1 2xl:py-2 flex items-center justify-center gap-1 sm:gap-1.5 2xl:gap-2 rounded-lg 2xl:rounded-xl border-2 text-[9px] sm:text-xs 2xl:text-sm font-display font-bold transition-all ${
              idx === 0 || showFeedback || isSolved
                ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer'
            }`}
          >
            <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 2xl:w-5 2xl:h-5" />
            <span>Geser Atas</span>
          </button>
          <button
            id={`scene-move-down-${scene.id}`}
            type="button"
            disabled={idx === totalScenes - 1 || showFeedback || isSolved}
            onClick={(e) => {
              e.stopPropagation();
              onMoveCard(idx, 'down');
            }}
            className={`flex-1 py-1 2xl:py-2 flex items-center justify-center gap-1 sm:gap-1.5 2xl:gap-2 rounded-lg 2xl:rounded-xl border-2 text-[9px] sm:text-xs 2xl:text-sm font-display font-bold transition-all ${
              idx === totalScenes - 1 || showFeedback || isSolved
                ? 'border-slate-200 text-slate-400 bg-slate-50 cursor-not-allowed'
                : 'border-slate-900 text-slate-800 bg-white hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] 2xl:shadow-[3px_3px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer'
            }`}
          >
            <span>Geser Bawah</span>
            <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 2xl:w-5 2xl:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
