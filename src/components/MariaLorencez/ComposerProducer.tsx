"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Button } from "@nextui-org/react";
import { FaLocationArrow } from "react-icons/fa";
import { Element } from "react-scroll";

const ComposerProducer = () => {
  return (
    <Element name="composer" className="element">
      <div className="flex justify-center">
        <div className="container text-center flex flex-col gap-8 py-8 px-4">
          <HoverGrowUnderline underlineColor="bg-primary-500">
            <p className="text-3xl font-bold text-primary mb-4 text-center">
              Compositora y productora
            </p>
          </HoverGrowUnderline>
          <p className="text-xl">
            Se compone de poemas musicalizados.
            <br />
            Esta obra se presentó en el Salón Barroco de la Benemérita
            Universidad Autónoma de Puebla.
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
    </Element>
  );
};

export default ComposerProducer;
