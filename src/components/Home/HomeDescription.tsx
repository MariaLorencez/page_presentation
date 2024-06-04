"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const HomeDescription = () => {
  return (
    <div className="bg-primary max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center">
        <div className="col-span-12 lg:col-span-6">
          <Image
            alt="Home description"
            className="object-cover"
            radius="none"
            isBlurred
            src={"/images/home-description.webp"}
            height={500}
            width={1000}
          />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-6 text-center px-4 py-8 md:p-8">
          <HoverGrowUnderline underlineColor="bg-secondary">
            <p className="text-3xl font-medium text-white mb-6">
              <Link href="/marialorencez#composer">Compositora</Link>
            </p>
          </HoverGrowUnderline>
          <p className="text-xl text-white">
            Realizamos conciertos y proyectos musicales y audiovisuales
            personalizados que generan una experiencia inolvidable para el grupo
            a quien va dirigido.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDescription;
