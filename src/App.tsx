import React, { useState, useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import { useAudio } from './hooks/useAudio';
import { SplashPage } from './pages/splash/SplashPage';
import { ArenaPage } from './pages/arena/ArenaPage';
import { ResultPage } from './pages/result/ResultPage';
import { PortraitWarning } from './components/PortraitWarning';
import { ObjectivesModal } from './components/ObjectivesModal';

export default function App() {
  const {
    pageView,
    currentStoryIndex,
    activeStory,
    totalStories,
    score,
    shuffledScenes,
    showFeedback,
    checked,
    attempts,
    answers,
    startInvestigation,
    moveCard,
    reorderCard,
    checkStoryboard,
    closeFeedback,
    advanceStory,
    jumpToStory,
    restartGame,
    getRank
  } = useGameState();

  const { isMuted, toggleMute, startBgm } = useAudio();
  const [showObjectivesModal, setShowObjectivesModal] = useState(false);

  // Try playing BGM on mount (will activate upon user gesture if blocked by autoplay policy)
  useEffect(() => {
    startBgm();
  }, [startBgm]);

  const handleStart = () => {
    startBgm();
    setShowObjectivesModal(true);
  };

  const handleProceedFromObjectives = () => {
    setShowObjectivesModal(false);
    if (pageView === 'splash') {
      startInvestigation();
    }
  };

  return (
    <div
      id="app-root"
      className="h-screen w-screen overflow-hidden bg-[#FAF8F5] bg-paper-grid flex flex-col antialiased text-slate-800 relative font-sans"
    >
      {/* Landscape phone orientation locks */}
      <PortraitWarning />

      {/* Pages Switcher */}
      {pageView === 'splash' && (
        <SplashPage
          onStart={handleStart}
          onOpenObjectives={() => setShowObjectivesModal(true)}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
        />
      )}

      {pageView === 'game' && (
        <ArenaPage
          currentStoryIndex={currentStoryIndex}
          activeStory={activeStory}
          totalStories={totalStories}
          showFeedback={showFeedback}
          checked={checked}
          score={score}
          attempts={attempts}
          shuffledScenes={shuffledScenes}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
          onMoveCard={moveCard}
          onReorderCard={reorderCard}
          onCheck={checkStoryboard}
          onCloseFeedback={closeFeedback}
          onAdvance={advanceStory}
          onOpenObjectives={() => setShowObjectivesModal(true)}
          answers={answers}
          onJumpToStory={jumpToStory}
        />
      )}

      {pageView === 'result' && (
        <ResultPage
          score={score}
          answers={answers}
          isMuted={isMuted}
          onToggleAudio={toggleMute}
          onRestart={restartGame}
          getRank={getRank}
        />
      )}

      {/* Modal Tujuan Pembelajaran / Bermain */}
      <ObjectivesModal
        isOpen={showObjectivesModal}
        onClose={() => setShowObjectivesModal(false)}
        onStart={handleProceedFromObjectives}
      />

      {/* Footer Copyright: Hanya tampil di halaman tanpa kontrol (Splash & Result) */}
      {pageView !== 'game' && (
        <footer className="fixed bottom-1.5 left-0 right-0 z-40 text-center pointer-events-none select-none text-[10px] sm:text-xs text-white font-display tracking-wider">
          Copyright 2026 Pusat Perbukuan
        </footer>
      )}
    </div>
  );
}
