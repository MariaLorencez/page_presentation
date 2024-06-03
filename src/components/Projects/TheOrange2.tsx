import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Button } from "@nextui-org/react";
import { FaBook, FaMusic } from "react-icons/fa";

const TheOrange2 = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28"
      style={{
        backgroundImage: "url(/images/the-orange.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container relative">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-white mb-4 text-center">
            El Naranjo
          </p>
        </HoverGrowUnderline>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            color="primary"
            variant="solid"
            className="rounded-none"
            startContent={<FaMusic />}
          >
            Escucha
          </Button>
          <Button
            size="lg"
            variant="solid"
            className="rounded-none"
            startContent={<FaBook />}
          >
            Letra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TheOrange2;
