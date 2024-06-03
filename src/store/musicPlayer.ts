import { ISong } from "@interfaces/ISong";
import create from "zustand";

interface MusicPlayerState {
  songs: ISong[];
  currentSongIndex: number;
  isPlaying: boolean;
  played: number;
  durations: number[];
  isRepeat: boolean;
  isShuffle: boolean;
  setCurrentSongIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setPlayed: (played: number) => void;
  setDurations: (durations: number[]) => void;
  setDurationAtIndex: (duration: number, index: number) => void;
  setIsRepeat: (isRepeat: boolean) => void;
  setIsShuffle: (isShuffle: boolean) => void;
}

const useMusicPlayerStore = create<MusicPlayerState>((set) => ({
  songs: [
    {
      title: "Arena y mar",
      subtitle: "Descripción 1",
      src: "/music/7 aren a y mar pista.mp3",
      image: "/music/DSC00016.webp",
    },
    {
      title: "Olvidarte",
      subtitle: "Descripción 2",
      src: "/music/10 olvidarte pista.mp3",
      image: "/music/DSC00094.webp",
    },
    {
      title: "Yo me enamoré",
      subtitle: "Descripción 3",
      src: "/music/8 yo menamoré  pista.mp3",
      image: "/music/DSC00189.webp",
    },
  ],
  currentSongIndex: 0,
  isPlaying: false,
  played: 0,
  durations: [],
  isRepeat: false,
  isShuffle: false,
  setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setPlayed: (played) => set({ played }),
  setDurations: (durations) => set({ durations }),
  setDurationAtIndex: (duration, index) =>
    set((state) => {
      const newDurations = [...state.durations];
      newDurations[index] = duration;
      return { durations: newDurations };
    }),
  setIsRepeat: (isRepeat) => set({ isRepeat }),
  setIsShuffle: (isShuffle) => set({ isShuffle }),
}));

export default useMusicPlayerStore;
