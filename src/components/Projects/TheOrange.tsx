import { Button, Image } from "@nextui-org/react";
import React from "react";
import { FaDownload } from "react-icons/fa";

const TheOrange = () => {
  return (
    <div className="max-w-full bg-cover bg-center relative flex items-center justify-center">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center relative">
        <div className="col-span-12 lg:col-span-6 px-8 pt-28 pb-0 lg:py-28 flex justify-center">
          <Image
            src="/images/on-earth.webp"
            alt="on-earth"
            className="max-h-[300px] object-cover"
            radius="none"
            isBlurred
          />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-6 px-8 pb-28 pt-0 lg:pt-28 text-white">
          <p className="text-4xl font-medium mb-6">El Naranjo</p>
          <p className="text-2xl font-medium mb-6">(2022)</p>
          <p className="text-xl mb-6">
            Letra Servanda Heredia.
            <br />
            <b>Música: María Lorencez</b>
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              variant="solid"
              className="rounded-none"
              startContent={<FaDownload />}
            >
              Partitura .DOCX
            </Button>
            <Button
              size="lg"
              color="secondary"
              variant="solid"
              className="rounded-none"
              startContent={<FaDownload />}
            >
              Partitura PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOrange;
