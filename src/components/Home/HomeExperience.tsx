import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";
import { CardsHome } from ".";
import Link from "next/link";

const HomeExperience = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28"
      style={{
        backgroundImage: "url(/images/bg1.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-secondary mb-4 text-center">
            <Link href={"/experiencias"}>
              Experiencias increíbles para tu marca
            </Link>
          </p>
        </HoverGrowUnderline>
        <p className="text-center mb-6">
          Una marca fuerte conecta de forma profunda con el ser. Por medio de
          experiencias musicales, se puede lograr ésta conexión.
        </p>
        <div className="px-8">
          <CardsHome />
        </div>
      </div>
    </div>
  );
};

export default HomeExperience;
