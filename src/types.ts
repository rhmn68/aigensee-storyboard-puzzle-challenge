export interface Scene {
  id: number;           // Original chronological index (0, 1, 2, ...)
  title: string;
  imageUrl: string;
  narrative: string;
}

export interface Story {
  id: number;
  title: string;
  description: string;
  scenes: Scene[];      // The correct ordered scenes
  explanation: string;  // Educational review explanation
}

export interface StoryAnswer {
  storyId: number;
  isCorrect: boolean;
  attemptsCount: number;
  missCount: number;
  points: number;
}

export interface GameState {
  pageView: 'splash' | 'game' | 'result';
  currentStoryIndex: number;
  score: number;
  shuffledScenes: Scene[]; // Active shuffled scene cards
  scenesByStoryId?: Record<number, Scene[]>;
  showFeedback: boolean;
  checked: boolean;
  attempts: number;
  answers: StoryAnswer[];
  missesByStoryId?: Record<number, number>;
  checkedByStoryId?: Record<number, boolean>;
}
