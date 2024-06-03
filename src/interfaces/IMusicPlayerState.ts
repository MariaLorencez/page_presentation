import { ISong } from ".";

export interface IMusicPlayerState {
  songs: ISong[];
  currentSongIndex: number;
  isPlaying: boolean;
  played: number;
  durations: number[];
  isRepeat: boolean;
  isShuffle: boolean;
  isHydrated: boolean;
  setCurrentSongIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setPlayed: (played: number) => void;
  setDurations: (durations: number[]) => void;
  setIsHydrated: () => void;
  handlePlayPause: () => void;
  handleNext: () => void;
  handlePrevious: () => void;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
  handleProgress: (state: { playedSeconds: number }) => void;
  handleDuration: (duration: number, index: number) => void;
}
