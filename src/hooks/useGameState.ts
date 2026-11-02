import { useState } from 'react';
import { GameState, Scene, StoryAnswer } from '../types';
import { STORYBOARD_CAMPAIGN } from '../data/storyboardData';
import { playSynthesizerNote } from '../utils/audio';

export const MAX_POINTS_PER_STORY = 5;

export const calculateStoryPoints = (misses: number): number => {
  if (misses === 0) return 5;
  if (misses <= 3) return 3;
  return 1;
};

const getRank = (score: number) => {
  const maxScore = STORYBOARD_CAMPAIGN.length * MAX_POINTS_PER_STORY;
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  if (percentage === 100) return { title: "Sutradara Maestro (Legendaris)", desc: "Sempurna! Anda memiliki insting narasi luar biasa dan mampu menyusun semua struktur cerita tanpa kesalahan.", color: "text-emerald-800 border-2 border-emerald-700 bg-emerald-50" };
  if (percentage >= 80) return { title: "Editor Senior", desc: "Sangat memahami struktur linier cerita, transisi adegan, dan konflik dramatis.", color: "text-indigo-800 border-2 border-indigo-700 bg-indigo-50" };
  if (percentage >= 60) return { title: "Penulis Skrip Menengah", desc: "Pemahaman narasi yang cukup baik, namun masih ada ruang untuk perbaikan di beberapa level.", color: "text-sky-800 border-2 border-sky-700 bg-sky-50" };
  if (percentage >= 40) return { title: "Penulis Skrip Magang", desc: "Anda memahami dasar-dasar narasi, tetapi masih perlu mengasah penempatan adegan.", color: "text-[#346641] border-2 border-[#346641] bg-[#346641]/10" };
  if (percentage > 20) return { title: "Penonton Pemula", desc: "Masih banyak yang perlu dipelajari tentang alur cerita dan kronologi narasi.", color: "text-amber-800 border-2 border-amber-700 bg-amber-50" };
  return { title: "Penonton Biasa", desc: "Pelajari lagi perbedaan kronologi cerita, transisi adegan, dan penyelesaian resolusi.", color: "text-rose-800 border-2 border-rose-700 bg-rose-50" };
};

const shuffleScenes = (scenes: Scene[]): Scene[] => {
  const arr = [...scenes];
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Double check that it's actually shuffled (not sorted by luck)
  let isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id !== i) {
      isSorted = false;
      break;
    }
  }

  if (isSorted && arr.length > 1) {
    [arr[0], arr[1]] = [arr[1], arr[0]]; // force swap first two
  }

  return arr;
};

export const useGameState = () => {
  const [state, setState] = useState<GameState>({
    pageView: 'splash',
    currentStoryIndex: 0,
    score: 0,
    shuffledScenes: [],
    scenesByStoryId: {},
    showFeedback: false,
    checked: false,
    attempts: 0,
    answers: [],
    missesByStoryId: {},
    checkedByStoryId: {},
  });

  const activeStory = STORYBOARD_CAMPAIGN[state.currentStoryIndex];

  // Level initialization is handled inside event handlers directly (startInvestigation, advanceStory, jumpToStory)

  const startInvestigation = () => {
    playSynthesizerNote('success');
    const firstScenes = shuffleScenes(STORYBOARD_CAMPAIGN[0].scenes);
    setState({
      pageView: 'game',
      currentStoryIndex: 0,
      score: 0,
      shuffledScenes: firstScenes,
      scenesByStoryId: {
        [STORYBOARD_CAMPAIGN[0].id]: firstScenes,
      },
      showFeedback: false,
      checked: false,
      attempts: 0,
      answers: [],
      missesByStoryId: {},
      checkedByStoryId: {},
    });
  };

  const moveCard = (index: number, direction: 'up' | 'down') => {
    if (state.showFeedback) return;
    const isAlreadySolved = state.answers.some(a => a.storyId === activeStory.id && a.isCorrect);
    if (isAlreadySolved) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= state.shuffledScenes.length) return;

    playSynthesizerNote('slide');
    const newScenes = [...state.shuffledScenes];
    [newScenes[index], newScenes[targetIndex]] = [newScenes[targetIndex], newScenes[index]];

    setState(prev => ({
      ...prev,
      shuffledScenes: newScenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [activeStory.id]: newScenes,
      },
      checked: false, // Reset checked status on change
      checkedByStoryId: {
        ...prev.checkedByStoryId,
        [activeStory.id]: false,
      }
    }));
  };

  const reorderCard = (fromIndex: number, toIndex: number) => {
    if (state.showFeedback) return;
    if (fromIndex === toIndex) return;
    const isAlreadySolved = state.answers.some(a => a.storyId === activeStory.id && a.isCorrect);
    if (isAlreadySolved) return;

    playSynthesizerNote('slide');
    const newScenes = [...state.shuffledScenes];
    const [draggedCard] = newScenes.splice(fromIndex, 1);
    newScenes.splice(toIndex, 0, draggedCard);

    setState(prev => ({
      ...prev,
      shuffledScenes: newScenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [activeStory.id]: newScenes,
      },
      checked: false, // Reset checked status on change
      checkedByStoryId: {
        ...prev.checkedByStoryId,
        [activeStory.id]: false,
      }
    }));
  };

  const checkStoryboard = () => {
    if (state.showFeedback) return;

    // If level is already solved, simply open feedback review without incrementing mistakes
    const isAlreadySolved = state.answers.some(a => a.storyId === activeStory.id && a.isCorrect);
    if (isAlreadySolved) {
      playSynthesizerNote('pop');
      setState(prev => ({
        ...prev,
        showFeedback: true,
      }));
      return;
    }

    // Check positions: index in shuffledScenes must match original id
    const isAllCorrect = state.shuffledScenes.every((scene, idx) => scene.id === idx);

    if (isAllCorrect) {
      playSynthesizerNote('success');
      const currentMisses = state.missesByStoryId?.[activeStory.id] || 0;
      const earnedPoints = calculateStoryPoints(currentMisses);
      const newAnswer: StoryAnswer = {
        storyId: activeStory.id,
        isCorrect: true,
        attemptsCount: currentMisses + 1,
        missCount: currentMisses,
        points: earnedPoints,
      };

      setState(prev => {
        const existingIdx = prev.answers.findIndex(a => a.storyId === activeStory.id);
        const updatedAnswers = [...prev.answers];
        if (existingIdx !== -1) {
          updatedAnswers[existingIdx] = newAnswer;
        } else {
          updatedAnswers.push(newAnswer);
        }
        const newScore = updatedAnswers
          .filter(a => a.isCorrect)
          .reduce((sum, a) => sum + a.points, 0);

        return {
          ...prev,
          answers: updatedAnswers,
          score: newScore,
          showFeedback: true,
          checked: true,
          checkedByStoryId: {
            ...prev.checkedByStoryId,
            [activeStory.id]: true,
          },
          scenesByStoryId: {
            ...prev.scenesByStoryId,
            [activeStory.id]: [...prev.shuffledScenes],
          },
        };
      });
    } else {
      playSynthesizerNote('fail');
      const nextMisses = (state.missesByStoryId?.[activeStory.id] || 0) + 1;
      setState(prev => ({
        ...prev,
        checked: true,
        attempts: nextMisses,
        missesByStoryId: {
          ...prev.missesByStoryId,
          [activeStory.id]: nextMisses,
        },
        checkedByStoryId: {
          ...prev.checkedByStoryId,
          [activeStory.id]: true,
        },
      }));
    }
  };

  const closeFeedback = () => {
    setState(prev => ({
      ...prev,
      showFeedback: false,
    }));
  };

  const jumpToStory = (index: number) => {
    if (index < 0 || index >= STORYBOARD_CAMPAIGN.length) return;
    if (index === state.currentStoryIndex) return;

    playSynthesizerNote('btn');
    const targetStory = STORYBOARD_CAMPAIGN[index];
    const isSolved = state.answers.some(a => a.storyId === targetStory.id && a.isCorrect);

    let scenes = state.scenesByStoryId?.[targetStory.id];
    if (!scenes || isSolved) {
      scenes = isSolved
        ? [...targetStory.scenes]
        : shuffleScenes(targetStory.scenes);
    }

    const storyMisses = state.missesByStoryId?.[targetStory.id] || 0;
    const isChecked = isSolved || (state.checkedByStoryId?.[targetStory.id] || false);

    setState(prev => ({
      ...prev,
      currentStoryIndex: index,
      shuffledScenes: scenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [targetStory.id]: scenes,
      },
      showFeedback: false,
      checked: isChecked,
      attempts: storyMisses,
    }));
  };

  const advanceStory = () => {
    playSynthesizerNote('btn');

    // Check if all stories in campaign have been completed
    const allCompleted = STORYBOARD_CAMPAIGN.every(s =>
      state.answers.some(a => a.storyId === s.id && a.isCorrect)
    );

    if (allCompleted) {
      playSynthesizerNote('unlock');
      setState(prev => ({
        ...prev,
        pageView: 'result',
        showFeedback: false,
        checked: false,
      }));
      return;
    }

    // Find the next uncompleted level starting from currentStoryIndex + 1 (wrapping around)
    let nextIndex = -1;
    for (let i = 1; i <= STORYBOARD_CAMPAIGN.length; i++) {
      const candidateIdx = (state.currentStoryIndex + i) % STORYBOARD_CAMPAIGN.length;
      const candidateStory = STORYBOARD_CAMPAIGN[candidateIdx];
      const isCandidateSolved = state.answers.some(a => a.storyId === candidateStory.id && a.isCorrect);
      if (!isCandidateSolved) {
        nextIndex = candidateIdx;
        break;
      }
    }

    if (nextIndex === -1) {
      playSynthesizerNote('unlock');
      setState(prev => ({
        ...prev,
        pageView: 'result',
        showFeedback: false,
        checked: false,
      }));
      return;
    }

    const nextStory = STORYBOARD_CAMPAIGN[nextIndex];
    const isSolved = state.answers.some(a => a.storyId === nextStory.id && a.isCorrect);
    let scenes = state.scenesByStoryId?.[nextStory.id];
    if (!scenes || isSolved) {
      scenes = isSolved
        ? [...nextStory.scenes]
        : shuffleScenes(nextStory.scenes);
    }

    const storyMisses = state.missesByStoryId?.[nextStory.id] || 0;
    const isChecked = isSolved || (state.checkedByStoryId?.[nextStory.id] || false);

    setState(prev => ({
      ...prev,
      currentStoryIndex: nextIndex,
      shuffledScenes: scenes,
      scenesByStoryId: {
        ...prev.scenesByStoryId,
        [nextStory.id]: scenes,
      },
      showFeedback: false,
      checked: isChecked,
      attempts: storyMisses,
    }));
  };

  const restartGame = () => {
    playSynthesizerNote('success');
    setState({
      pageView: 'splash',
      currentStoryIndex: 0,
      score: 0,
      shuffledScenes: [],
      scenesByStoryId: {},
      showFeedback: false,
      checked: false,
      attempts: 0,
      answers: [],
      missesByStoryId: {},
      checkedByStoryId: {},
    });
  };

  return {
    pageView: state.pageView,
    currentStoryIndex: state.currentStoryIndex,
    activeStory,
    totalStories: STORYBOARD_CAMPAIGN.length,
    score: state.score,
    shuffledScenes: state.shuffledScenes,
    showFeedback: state.showFeedback,
    checked: state.checked,
    attempts: state.attempts,
    answers: state.answers,
    startInvestigation,
    moveCard,
    reorderCard,
    checkStoryboard,
    closeFeedback,
    advanceStory,
    jumpToStory,
    restartGame,
    getRank,
  };
};
