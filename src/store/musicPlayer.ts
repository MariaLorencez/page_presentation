import { IMusicPlayerState } from "@interfaces/IMusicPlayerState";
import { create } from "zustand";
import throttle from "lodash/throttle";

const useMusicPlayerStore = create<IMusicPlayerState>((set) => ({
  songs: [
    {
      title: "Suite I Opus 1",
      subtitle: "Tema principal.",
      src: "https://www.youtube.com/watch?v=J4lm7QiB7N4",
    },
    {
      title: "Suite I Opus 2",
      subtitle: "Paisaje Yumhu.",
      src: "https://www.youtube.com/watch?v=jajMHJa46XA",
    },
    {
      title: "Suite I Opus 3",
      subtitle: "Arrullo.",
      src: "https://www.youtube.com/watch?v=hH8M3ZUWCn8",
    },
    {
      title: "Suite I Opus 4",
      subtitle: "Desafío sin fin. Toque de alarma.",
      src: "https://www.youtube.com/watch?v=Xp9s6Fax2FE",
    },
    {
      title: "Suite I Opus 5",
      subtitle:
        "Danza rival Toque de alarma. Toque de rogación para detener la tempestad.",
      src: "https://www.youtube.com/watch?v=N_KbGh2KSZY",
    },
    {
      title: "Suite I Opus 6",
      subtitle: "Khaos & Caos  Toque de alarma.",
      src: "https://www.youtube.com/watch?v=m3XAMjmHAfo",
    },
    {
      title: "Suite II Opus 1",
      subtitle: "Nuevo horizonte.  Toque de las doce del día o Angelus",
      src: "https://www.youtube.com/watch?v=AYrJ_HmzrhQ",
    },
    {
      title: "Suite II Opus 2",
      subtitle:
        "¡Entrega la lluvia Señor! Toque de rogación para conceder la lluvia",
      src: "https://www.youtube.com/watch?v=s5MvzBaKDEs",
    },
    {
      title: "Suite II Opus 3",
      subtitle: "Danza de flores. Toque ad-libitum",
      src: "https://www.youtube.com/watch?v=684IhGz86HM",
    },
    {
      title: "Suite II Opus 4",
      subtitle:
        "Fiesta de muéganos. Toque de las seis de la tarde, o para anunciar la finalización de las labores en el campo",
      src: "https://www.youtube.com/watch?v=jajMHJa46XA",
    },
    {
      title: "Suite II Opus 5",
      subtitle: "Desapego. Toque de agonía",
      src: "https://www.youtube.com/watch?v=_sPTGd5-bY4",
    },
    {
      title: "Suite II Opus 6",
      subtitle: "Marcha fúnebre. Toque de funeral",
      src: "https://www.youtube.com/watch?v=ZDOk84J3LO4",
    },
    {
      title: "Suite III Opus 1",
      subtitle: "Sombra de pinos. Toque del Santísimo expuesto",
      src: "https://www.youtube.com/watch?v=zQz5nUJfEsc",
    },
    {
      title: "Suite III Opus 2",
      subtitle: "Canon. Toque de confesión",
      src: "https://www.youtube.com/watch?v=Ku5LL7_--ZA",
    },
    {
      title: "Suite III Opus 3",
      subtitle: "Raíces del corazón. Toque de comunión",
      src: "https://www.youtube.com/watch?v=HWUYEvQZhpA",
    },
    {
      title: "Suite III Opus 4",
      subtitle: "Finalle. Toque de rebato o campanas al vuelo",
      src: "https://www.youtube.com/watch?v=qdVYSQzRepA",
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
  setPlayed: throttle((played) => set({ played }), 200),
  setDurations: () =>
    set((state) => ({ durations: Array(state.songs.length).fill(0) })),
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
  handleDuration: (duration, index) =>
    set((state) => {
      if (!isNaN(duration) && duration > 0) {
        const durations = [...state.durations];
        durations[index] = duration;
        return { durations };
      }
      return state;
    }),
  updateSongImages: () =>
    set((state) => {
      const newSongs = state.songs.map((song) => {
        if (song.src.includes("youtube.com")) {
          let videoId = song.src.split("v=")[1];
          const ampersandPosition = videoId.indexOf("&");
          if (ampersandPosition !== -1) {
            videoId = videoId.substring(0, ampersandPosition);
          }
          song.image = `https://img.youtube.com/vi/${videoId}/0.jpg`;
        }
        return song;
      });
      return { songs: newSongs };
    }),
}));

export default useMusicPlayerStore;
