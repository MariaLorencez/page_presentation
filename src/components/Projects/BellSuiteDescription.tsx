import { Image } from "@nextui-org/react";
import React from "react";

const BellSuiteDescription = () => {
  return (
    <div
      className="max-w-full bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url(/images/bg2.webp)",
        backgroundPosition: "50% 0%",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center">
        <div className="col-span-12 lg:col-span-6 px-8 pt-28 pb-0 lg:py-28 flex justify-center">
          <Image
            src="/images/bell-suite.webp"
            alt="on-earth"
            className="max-h-[300px] object-cover"
            radius="none"
            isBlurred
          />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-6 px-8 pb-28 pt-0 lg:pt-28">
          <p className="text-4xl font-medium mb-6 text-primary">
            Suite Campanas del siglo XVI en concierto{" "}
          </p>
          <p className="text-2xl font-medium mb-6 text-primary">(2016-2018)</p>
          <p className="text-xl mb-6 text-white">
            Este proyecto fue uno de los proyectos ganadores en las
            convocatorias 2016 y 2018 del PACMYC (Programa de apoyo a las
            culturas municipales y comunitarias) de la Secretaría de Cultura a
            través de la Dirección general de culturas populares y el Instituto
            Tlaxcalteca de la Cultura.
            <br />
            <br />
            Los toques de campana se utilizaban para congregar a los pobladores
            tanto para actos religiosos como civiles, así como para anunciar
            catástrofes o eventos que requerían el apoyo urgente de los
            pobladores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BellSuiteDescription;
