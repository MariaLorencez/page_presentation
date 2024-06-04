import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Button } from "@nextui-org/react";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const EnsembleWork = () => {
  return (
    <div className="flex justify-center">
      <div className="container text-center flex flex-col gap-8 py-8 px-4">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-primary mb-4 text-center">
            Obra para ensamble
          </p>
        </HoverGrowUnderline>
        <p className="text-xl">
          Obra para ensamble de percusiones y toques de campana. Los conciertos
          se llevaron a cabo en octubre y noviembre del 2016 en la ciudad de
          Huamantla, Tlaxcala. Video clips de la obra de Suite Campanas del
          Siglo XVI en concierto. El cortometraje consta de 16 suites y varias
          entrevistas.
        </p>
        <div>
          <Button
            variant="ghost"
            color="secondary"
            className="rounded-none"
            size="lg"
            startContent={<FaLocationArrow />}
          >
            Conoce más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnsembleWork;
