import { Card, CardBody, Listbox, ListboxItem, Image } from "@nextui-org/react";
import useMusicPlayerStore from "@store/musicPlayer";
import { formatTime } from "@utils/formatTime";

const PlayList = () => {
  const { songs, durations, setCurrentSongIndex, setIsPlaying, setPlayed } =
    useMusicPlayerStore();
 
  return (
    <div className="col-span-12 lg:col-span-6 flex justify-center p-4">
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
                className="mb-2"
                textValue={song.title}
                onPress={() => {
                  setCurrentSongIndex(index);
                  setPlayed(0); // Reset played time
                  setIsPlaying(true);
                }}
              >
                <div className="flex items-center gap-2">
                  <Image
                    alt={`Album cover ${index + 1}`}
                    className="object-cover"
                    radius="none"
                    height={50}
                    width={50}
                    src={song.image}
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <span className="font-bold">{song.title}</span>
                      <br />
                      <span>{song.subtitle}</span>
                    </div>
                    <span>{formatTime(durations[index])}</span>
                  </div>
                </div>
              </ListboxItem>
            ))}
          </Listbox>
        </CardBody>
      </Card>
    </div>
  );
};

export default PlayList;
