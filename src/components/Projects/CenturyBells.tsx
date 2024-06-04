import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { CardsHome } from "@components/Home";
import MusicPlayer from "./MusicPlayer";

const CenturyBells = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28 px-4"
      style={{
        backgroundImage: "url(/images/bg1.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-secondary mb-4 text-center">
            Campanas del siglo VXI en Concierto
          </p>
        </HoverGrowUnderline>

        <div>
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default CenturyBells;
