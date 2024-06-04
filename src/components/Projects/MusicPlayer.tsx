"use client";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import useMusicPlayerStore from "@store/musicPlayer";
import { PlayList, Player } from ".";
import { Skeleton } from "@nextui-org/react";

const MusicPlayer: React.FC = () => {
  const { songs, isHydrated, setIsHydrated, handleDuration, setDurations } =
    useMusicPlayerStore();

  useEffect(() => {
    setIsHydrated();
    setDurations();
  }, [setDurations, setIsHydrated]);

  if (!isHydrated) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start justify-center py-4">
        <Skeleton className="rounded-lg col-span-12 lg:col-span-8">
          <div className="h-[200px] rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton className="rounded-lg col-span-12 lg:col-span-4">
          <div className="h-[200px] rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start justify-center py-4">
      <Player />
      <PlayList />
      {songs.map((song, index) => (
        <ReactPlayer
          key={index}
          url={song.src}
          style={{ display: "none" }}
          onDuration={(duration) => handleDuration(duration, index)}
        />
      ))}
    </div>
  );
};

export default MusicPlayer;
