"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";
import { Element } from "react-scroll";

const ExperienceFormats = () => {
  return (
    <Element name="experience-formats" className="element">
      <div className="flex justify-center w-full bg-primary-50 brightness-110	items-center py-28 px-4">
        <div className="container">
          <HoverGrowUnderline underlineColor="bg-primary-500">
            <p className="text-3xl font-bold text-secondary mb-4 text-center">
              Formatos de la experiencia
            </p>
          </HoverGrowUnderline>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center pt-4 px-14">
            <div className="col-span-12 lg:col-span-6 h-full">
              <p className="text-primary text-lg">
                Nuestra experiencia nos permite trabajar en la producción de
                varios formatos que van{" "}
                <b>
                  desde canciones, música instrumental, temas para teatro,
                  danza, video clip, corto metraje, hasta eventos en vivo.
                </b>
              </p>
            </div>
            <div className="flex flex-col col-span-12 lg:col-span-6 text-lg">
              <p>
                ¡Podemos ayudarte a resolver y{" "}
                <b>crear una experiencia única</b>!
              </p>
              <br />
              <p>
                ¡<b>Proyectamos todo el valor de tu marca</b> para ofrecerlo al
                mundo!
              </p>
              <br />
              <p>
                ¡<b>Logramos que tu producto impacte</b> profundamente en tus
                clientes y/o prospectos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ExperienceFormats;
