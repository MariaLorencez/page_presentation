"use client";
import { Card, CardBody, Slider, Image, Button } from "@nextui-org/react";
import { formatTime } from "@utils/formatTime";
import React, { useRef } from "react";
import {
  FaRedo,
  FaStepBackward,
  FaPauseCircle,
  FaPlayCircle,
  FaStepForward,
  FaRandom,
} from "react-icons/fa";
import ReactPlayer from "react-player";
import useMusicPlayerStore from "@store/musicPlayer";

const Player = () => {
  const {
    songs,
    currentSongIndex,
    isPlaying,
    played,
    durations,
    isRepeat,
    isShuffle,
    handlePlayPause,
    handleNext,
    handlePrevious,
    toggleRepeat,
    toggleShuffle,
    handleProgress,
    handleDuration,
    setPlayed,
    setIsPlaying,
  } = useMusicPlayerStore();

  const playerRef = useRef<ReactPlayer | null>(null);

  const handleSliderChange = (value: number | number[]) => {
    const newValue = Array.isArray(value) ? value[0] : value;
    if (playerRef.current) {
      playerRef.current.seekTo(newValue);
    }
  };

  const handleEnded = () => {
    if (isRepeat) {
      playerRef.current?.seekTo(0);
      setPlayed(0); // Reset played time
      setIsPlaying(true);
    } else {
      handleNext();
    }
  };

  return (
    <div className="col-span-12 lg:col-span-6 flex justify-center p-4">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full"
        shadow="sm"
        fullWidth
      >
        <CardBody className="p-4 h-full flex flex-col justify-between">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center h-full">
            <div className="relative col-span-6 md:col-span-4 h-full">
              <Image
                alt={`Album cover ${currentSongIndex + 1}`}
                className="object-cover"
                classNames={{
                  img: "h-full",
                  wrapper: "h-full",
                }}
                shadow="md"
                src={songs[currentSongIndex].image}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h1 className="text-large font-medium mt-2">
                    {songs[currentSongIndex].title}
                  </h1>
                  <p className="text-small text-foreground/80">
                    {songs[currentSongIndex].subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-3 gap-1">
                <Slider
                  aria-label="Music progress"
                  color="secondary"
                  step={1}
                  maxValue={durations[currentSongIndex]}
                  value={played}
                  onChange={handleSliderChange}
                  size="sm"
                />
                <div className="flex justify-between">
                  <p className="text-small">{formatTime(played)}</p>
                  <p className="text-small text-foreground/50">
                    {formatTime(durations[currentSongIndex])}
                  </p>
                </div>
              </div>

              <div className="flex w-full items-center justify-center gap-2 mt-4">
                <div className="relative">
                  <Button
                    isIconOnly
                    className="relative data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onPress={toggleRepeat}
                  >
                    <FaRedo className="text-foreground/80" />
                  </Button>
                  {isRepeat && (
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  )}
                </div>

                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  color="secondary"
                  onPress={handlePrevious}
                >
                  <FaStepBackward />
                </Button>
                <Button
                  isIconOnly
                  className="w-auto h-auto data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  color="secondary"
                  onPress={handlePlayPause}
                >
                  {isPlaying ? (
                    <FaPauseCircle size={54} />
                  ) : (
                    <FaPlayCircle size={54} />
                  )}
                </Button>
                <Button
                  isIconOnly
                  className="data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  color="secondary"
                  onPress={handleNext}
                >
                  <FaStepForward />
                </Button>
                <div className="relative">
                  <Button
                    isIconOnly
                    className="relative data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onPress={toggleShuffle}
                  >
                    <FaRandom className="text-foreground/80" />
                  </Button>
                  {isShuffle && (
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ReactPlayer
            ref={playerRef}
            url={songs[currentSongIndex].src}
            playing={isPlaying}
            onEnded={handleEnded}
            onProgress={handleProgress}
            onDuration={(duration) =>
              handleDuration(duration, currentSongIndex)
            }
            width="0"
            height="0"
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Player;
