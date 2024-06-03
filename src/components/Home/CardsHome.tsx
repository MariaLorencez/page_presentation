"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { BiShowAlt } from "react-icons/bi";

const listHome = [
  {
    title: "¡Tu marca puede enriquecerse!",
    img: "/images/brand-enriched.webp",
    description:
      "Producimos para ti y para tus clientes una experiencia musical profunda. El impacto es de tal magnitud que el grado de lealtad a tu marca aumentará.",
    link: "/experiencias#enriched-brand",
  },
  {
    title: "Formatos de la experiencia",
    img: "/images/gallery-experience.webp",
    description:
      "Nuestra experiencia nos permite trabajar en la producción de varios formatos, desde canciones, temas para teatro, danza, video clip, corto metraje, hasta eventos en vivo.",
    link: "/experiencias#experience-formats",
  },
  {
    title: "Proceso creativo",
    img: "/images/creative-process.webp",
    description:
      "Nuestros proyectos son personalizados. Si ya tienes una idea definida, podemos hacerla realidad, o bien detallarla juntos, logando una vivencia única que trascienda.",
    link: "/experiencias#creative-process",
  },
];

const CardsHome = () => {
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {listHome.map((item, index) => (
        <Card shadow="lg" radius="none" key={index}>
          <CardBody className="overflow-visible p-0 pb-4">
            <Image
              isBlurred
              shadow="sm"
              radius="none"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[250px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-lg flex flex-col">
            <div className="mb-4">
              <div className="text-center w-100">
                <b className="text-center">{item.title}</b>
              </div>
              <HoverGrowUnderline underlineColor="bg-primary-500">
                <p className="mb-4">{item.description}</p>
              </HoverGrowUnderline>
              <Button
                as={Link}
                href={item.link}
                variant="light"
                color="primary"
                startContent={<BiShowAlt size="2em" />}
              >
                Ver más
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsHome;
