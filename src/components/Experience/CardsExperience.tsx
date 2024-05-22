"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { FC, ReactNode } from "react";

interface ItemExperience {
  title: ReactNode;
  img: string;
  description: string;
}

interface Props {
  items: ItemExperience[];
  alt: string;
}

const CardsExperience: FC<Props> = ({ items, alt }) => {
  return (
    <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mt-4">
      {items.map((item, index) => (
        <Card shadow="lg" radius="none" key={index}>
          <CardBody className="overflow-visible p-0 pb-4">
            <Image
              isBlurred
              shadow="sm"
              radius="none"
              width="100%"
              alt={`${alt}-${index + 1}`}
              className="w-full object-cover h-[300px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-lg flex flex-col">
            <div className="mb-4 text-center">
              <div className="w-100 mb-4">{item.title}</div>
              <p className="mb-4">{item.description}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardsExperience;
