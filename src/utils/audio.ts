import bgmUrl from '../../assets/audio/bgm.mp3';
import clickUrl from '../../assets/audio/click.mp3';

// Singleton BGM Audio Element
let bgmAudio: HTMLAudioElement | null = null;
let clickAudio: HTMLAudioElement | null = null;
let isMutedState = false;
let userInteractionListenerAttached = false;

// Initialize mute state from localStorage if available (controls background music)
if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem('storyboard_audio_muted');
    isMutedState = stored === 'true';
  } catch (e) {
    isMutedState = false;
  }
}

type AudioListener = (isMuted: boolean) => void;
const listeners = new Set<AudioListener>();

const notifyListeners = () => {
  listeners.forEach((listener) => {
    try {
      listener(isMutedState);
    } catch (e) {
      // Ignore listener error
    }
  });
};

export const subscribeAudioState = (listener: AudioListener): (() => void) => {
  listeners.add(listener);
  listener(isMutedState);
  return () => {
    listeners.delete(listener);
  };
};

export const getAudioMuted = (): boolean => isMutedState;

// Background music volume is set noticeably lower (28%) so sound effects stand out clearly (85%)
const DEFAULT_BGM_VOLUME = 0.28;
const DEFAULT_SFX_VOLUME = 0.85;

const getBgmAudio = (): HTMLAudioElement | null => {
  if (typeof window === 'undefined') return null;
  if (!bgmAudio) {
    bgmAudio = new Audio(bgmUrl);
    bgmAudio.loop = true;
    bgmAudio.volume = DEFAULT_BGM_VOLUME;
    bgmAudio.preload = 'auto';
  } else {
    bgmAudio.volume = DEFAULT_BGM_VOLUME;
  }
  return bgmAudio;
};

// Click audio element helper
const getClickAudio = (): HTMLAudioElement | null => {
  if (typeof window === 'undefined') return null;
  if (!clickAudio) {
    clickAudio = new Audio(clickUrl);
    clickAudio.volume = DEFAULT_SFX_VOLUME;
    clickAudio.preload = 'auto';
  }
  return clickAudio;
};

// Set up one-time listener to start BGM as soon as user touches/clicks anywhere
export const setupAutoplayUnlock = () => {
  if (typeof window === 'undefined' || userInteractionListenerAttached) return;
  userInteractionListenerAttached = true;

  const handleFirstInteraction = () => {
    if (!isMutedState) {
      startBgm();
    }
    window.removeEventListener('pointerdown', handleFirstInteraction);
    window.removeEventListener('keydown', handleFirstInteraction);
    window.removeEventListener('touchstart', handleFirstInteraction);
    window.removeEventListener('click', handleFirstInteraction);
  };

  window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
  window.addEventListener('keydown', handleFirstInteraction, { once: true });
  window.addEventListener('touchstart', handleFirstInteraction, { once: true });
  window.addEventListener('click', handleFirstInteraction, { once: true });
};

export const startBgm = () => {
  if (typeof window === 'undefined') return;
  if (isMutedState) return;

  const audio = getBgmAudio();
  if (!audio) return;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked by browser policy; user gesture will start it via setupAutoplayUnlock
      setupAutoplayUnlock();
    });
  }
};

export const stopBgm = () => {
  if (bgmAudio) {
    bgmAudio.pause();
  }
};

export const toggleAudioMute = (): boolean => {
  setAudioMuted(!isMutedState);
  return isMutedState;
};

export const setAudioMuted = (muted: boolean) => {
  isMutedState = muted;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('storyboard_audio_muted', String(muted));
    } catch (e) {}
  }

  if (muted) {
    stopBgm();
  } else {
    startBgm();
  }

  notifyListeners();
};

export type SoundEffectType = 'btn' | 'click' | 'slide' | 'success' | 'fail' | 'unlock' | 'pop';

// Sound Effects Engine (Dedicated MP3 + Web Audio Synthesizer)
// Sound effects ALWAYS play regardless of BGM mute state, so UI interaction remains tactile and audible
export const playSoundEffect = (type: SoundEffectType) => {
  // Play real audio file for button click if available
  if (type === 'btn' || type === 'click') {
    try {
      const baseClick = getClickAudio();
      if (baseClick) {
        const sound = baseClick.cloneNode() as HTMLAudioElement;
        sound.volume = DEFAULT_SFX_VOLUME;
        sound.play().catch(() => {
          playSynthesizerFallback('btn');
        });
        return;
      }
    } catch (e) {
      // fallback to synthesizer
    }
  }

  // Synthesizer for rich dynamic feedback
  playSynthesizerFallback(type);
};

// Aliases for convenience
export const playClick = () => playSoundEffect('btn');
export const playSynthesizerNote = (type: 'success' | 'fail' | 'btn' | 'unlock' | 'slide' | 'pop') => playSoundEffect(type);

const playSynthesizerFallback = (type: SoundEffectType) => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    if (type === 'success') {
      // Sweet triple ascending chime (C5 -> E5 -> G5)
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        gain.gain.setValueAtTime(0.24, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.005, now + i * 0.1 + 0.35);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.38);
      });
    } else if (type === 'unlock') {
      // Majestic ascending perfect chord fanfare
      const notes = [392.00, 523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);
        gain.gain.setValueAtTime(0.28, now + i * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.005, now + i * 0.09 + 0.55);
        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.6);
      });
    } else if (type === 'fail') {
      // Dual gentle wooden low thud (educational / non-harsh)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200.00, now);
      osc.frequency.exponentialRampToValueAtTime(120.00, now + 0.22);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.24);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'slide') {
      // Paper/card swoosh sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.12);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.13);
    } else if (type === 'pop') {
      // Clean bubble pop for modal / hint open
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.06);
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.07);
    } else {
      // Short crisp click fallback
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.005, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.08);
    }
  } catch (e) {
    // Web Audio fallback silent catch
  }
};
