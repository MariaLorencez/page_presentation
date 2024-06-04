"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";
import CardsExperience from "./CardsExperience";
import { Element } from "react-scroll";

const EnrichedBrand = () => {
  return (
    <Element name="enriched-brand" className="element">
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
              ¡Tu marca puede enriquecerse!{" "}
            </p>
          </HoverGrowUnderline>
          <div>
            <CardsExperience
              items={[
                {
                  title: <b>Una experiencia profunda</b>,
                  img: "/images/deep-experience.webp",
                  description:
                    "Producimos para ti y para tus clientes una experiencia musical profunda. El impacto es de tal magnitud que el grado de lealtad a tu marca aumentará.",
                },
                {
                  title: <b>Emociones</b>,
                  img: "/images/emotions.webp",
                  description:
                    "Causamos emociones tales como sorpresa, alegría, tranquilidad y motivación para seguir disfrutando plenamente de la vida.",
                },
              ]}
              alt={"enriched-brand"}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default EnrichedBrand;
