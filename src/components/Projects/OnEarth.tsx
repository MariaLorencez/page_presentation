import { Button, Image } from "@nextui-org/react";
import React from "react";
import { FaDownload } from "react-icons/fa";

const OnEarth = () => {
  return (
    <div
      className="max-w-full bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url(/images/bg1.webp)",
        backgroundPosition: "50% 0%",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center">
        <div className="col-span-12 lg:col-span-6 px-4 pt-28 pb-0 lg:py-28 flex justify-center">
          <Image
            src="/images/on-earth.webp"
            alt="on-earth"
            className="max-h-[300px] object-cover"
            radius="none"
            isBlurred
          />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-6 px-8 pb-28 pt-0 lg:pt-28">
          <p className="text-4xl font-medium mb-6 text-primary">
            Sobre la tierra
          </p>
          <p className="text-2xl font-medium mb-6 text-primary">(2008)</p>
          <p className="text-xl mb-6">
            <b>Esta obra se presentó en formato CD.</b>
            <br />
            Se compone de poemas de varios autores que fueron musicalizados
            resultando canciones de diferentes géneros como blues, tango, zamba
            argentina, ranchero, bossa nova, pop, huapango, danzón y flamenco.
            Esta obra se presentó en el Salón Barroco de la Benemérita
            Universidad Autónoma de Puebla.
          </p>
          <div>
            <Button
              color="secondary"
              variant="solid"
              className="rounded-none"
              startContent={<FaDownload />}
            >
              Descarga MP3
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnEarth;
