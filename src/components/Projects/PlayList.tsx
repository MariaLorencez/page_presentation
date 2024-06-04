import { Card, CardBody, Listbox, ListboxItem, Image } from "@nextui-org/react";
import useMusicPlayerStore from "@store/musicPlayer";
import { formatTime } from "@utils/formatTime";

const PlayList = () => {
  const { songs, durations, setCurrentSongIndex, setIsPlaying, setPlayed } =
    useMusicPlayerStore();

  return (
    <div className="col-span-12 lg:col-span-4 flex justify-center p-4">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full"
        shadow="sm"
        fullWidth
      >
        <CardBody className="p-4 h-full flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Playlist</h2>
          <Listbox
            aria-label="Actions"
            className="overflow-y-auto max-h-[140px] flex-grow"
          >
            {songs.map((song, index) => (
              <ListboxItem
                key={index}
                startContent={
                  <Image
                    alt={`Album cover ${index + 1}`}
                    className="object-cover"
                    radius="none"
                    height={50}
                    width={50}
                    src={song.image}
                  />
                }
                endContent={formatTime(durations[index])}
                className="mb-2"
                textValue={song.title}
                onPress={() => {
                  setCurrentSongIndex(index);
                  setPlayed(0); // Reset played time
                  setIsPlaying(true);
                }}
              >
                <span className="font-bold">{song.title}</span>
                <br />
                <span>{song.subtitle}</span>
              </ListboxItem>
            ))}
          </Listbox>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlayList;
