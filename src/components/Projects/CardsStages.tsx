import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { FC } from "react";

interface ItemStage {
  title: string;
  img: string;
  description: string;
}

interface Props {
  items: ItemStage[];
  alt: string;
}

const CardsStages: FC<Props> = ({ items, alt }) => {
  return (
    <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="m-4">
              <div className="w-100 mb-4 text-center font-bold">{item.title}</div>
              <p className="mb-4">{item.description}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default CardsStages;
