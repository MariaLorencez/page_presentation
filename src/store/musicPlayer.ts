import { IMusicPlayerState } from "@interfaces/IMusicPlayerState";
import { create } from "zustand";

const useMusicPlayerStore = create<IMusicPlayerState>((set) => ({
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
  isHydrated: false,
  setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setPlayed: (played) => set({ played }),
  setDurations: (durations) => set({ durations }),
  setIsHydrated: () => set({ isPlaying: false, isHydrated: true }),
  handlePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
  handleNext: () =>
    set((state) => {
      const { isShuffle, currentSongIndex, songs } = state;
      let nextIndex;
      if (isShuffle) {
        do {
          nextIndex = Math.floor(Math.random() * songs.length);
        } while (nextIndex === currentSongIndex);
      } else {
        nextIndex = (currentSongIndex + 1) % songs.length;
      }
      return {
        currentSongIndex: nextIndex,
        played: 0,
        isPlaying: true,
      };
    }),
  handlePrevious: () =>
    set((state) => {
      const { currentSongIndex, songs } = state;
      const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      return {
        currentSongIndex: prevIndex,
        played: 0, // Reset played time
        isPlaying: true,
      };
    }),
  toggleRepeat: () => set((state) => ({ isRepeat: !state.isRepeat })),
  toggleShuffle: () => set((state) => ({ isShuffle: !state.isShuffle })),
  handleProgress: (state: { playedSeconds: number }) =>
    set({ played: state.playedSeconds }),
  handleDuration: (duration: number, index: number) =>
    set((state) => {
      const newDurations = [...state.durations];
      newDurations[index] = duration;
      return { durations: newDurations };
    }),
}));

export default useMusicPlayerStore;
