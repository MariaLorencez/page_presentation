import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";
import { CardsStages } from ".";

const Stages = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28 px-4"
      style={{
        backgroundImage: "url(/images/bg3.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-secondary mb-4 text-center">
            Etapas
          </p>
        </HoverGrowUnderline>
        <div>
          <CardsStages
            items={[
              {
                title: "1ra Etapa",
                img: "/images/bell-suite.webp",
                description:
                  "Se realiza un registro de los toques de campana que actualmente se usan en Huamantla, Tlax. Así mismo, se rescatan y registran aquellos toques que han ido quedando en desuso. Con el sentido espiritual de éstos toques se compone una obra musical con 16 suites para ensamble de percusiones.",
              },
              {
                title: "2da Etapa",
                img: "/images/header-bell-suite.webp",
                description:
                  "Se realizan tres conciertos: El primero en octubre del 2016 en la explanada de la Parroquia de San Luis Obispo Huamantla y dos más en noviembre del mismo año en el interior del Convento Franciscano de Toulousse Huamantla, Tlax.",
              },
              {
                title: "3ra Etapa",
                img: "/images/stage3.webp",
                description:
                  "Se produce un cortometraje con los 16 temas de Campanas del Siglo XVI en Concierto, escenas de los toques de campana, peregrinaciones, fiestas patronales, artesanales, y entrevistas a los actores locales.",
              },
            ]}
            alt={"stages"}
          />
        </div>
      </div>
    </div>
  );
};

export default Stages;
