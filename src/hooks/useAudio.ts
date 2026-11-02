import { useState, useEffect } from 'react';
import {
  getAudioMuted,
  setAudioMuted,
  toggleAudioMute,
  startBgm,
  stopBgm,
  subscribeAudioState,
  playSynthesizerNote
} from '../utils/audio';

export const useAudio = () => {
  const [isMuted, setIsMuted] = useState(getAudioMuted);

  useEffect(() => {
    return subscribeAudioState((muted) => {
      setIsMuted(muted);
    });
  }, []);

  return {
    isMuted,
    toggleMute: toggleAudioMute,
    setMuted: setAudioMuted,
    startBgm,
    stopBgm,
    playSfx: playSynthesizerNote,
  };
};
