"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";
import { CardsExperience } from ".";
import { Element } from "react-scroll";

const CreativeProcess = () => {
  return (
    <Element name="creative-process" className="element">
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
              Proceso creativo
            </p>
          </HoverGrowUnderline>
          <p className="text-center mb-6">
            <b>Nuestros proyectos son personalizados.</b>
            <br />
            Si ya tienes una idea definida del tipo de experiencia que buscas
            generar, podemos hacerla realidad, o bien detallarla juntos,
            logrando una vivencia única que trascienda.
          </p>
          <div>
            <CardsExperience
              items={[
                {
                  title: (
                    <p>
                      La música es un lenguaje <b>universal</b>
                    </p>
                  ),
                  img: "/images/musical-experience.webp",
                  description:
                    "Se manifiesta en todo, genera una fuerza extraordinaria en las palabras y en las imágenes ya sean filmes, fotografías o movimientos corporales ya que traspasa los sentidos y toca las fibras más íntimas de nuestro ser.",
                },
                {
                  title: (
                    <p>
                      La música es <b>sanadora</b>
                    </p>
                  ),
                  img: "/images/mbr.webp",
                  description:
                    "Porque se conecta por si misma con el alma. La música se nos revela de tal manera que sólo hay que estar presentes, guardar silencio y escuchar con calma.",
                },
              ]}
              alt={"creative-process"}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default CreativeProcess;
