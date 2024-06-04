import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Button, Image } from "@nextui-org/react";
import React from "react";

const ChlorineDioxide = () => {
  return (
    <div className="bg-secondary max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center justify-center">
        <div className="col-span-12 lg:col-span-6">
          <Image
            alt="Home description"
            className="object-cover"
            radius="none"
            isBlurred
            src={"/images/cbd-oil.webp"}
            height={500}
            width={1000}
          />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-6 text-center px-4 py-8 md:p-8">
          <HoverGrowUnderline underlineColor="bg-primary">
            <p className="text-3xl font-medium text-white mb-6">
              Dióxido de cloro como soporte para vencer el Covid-19.
            </p>
          </HoverGrowUnderline>
          <p className="text-xl text-white mb-6">
            El biofísico alemán Dr. Andreas Kalcker ha estudiado el dióxido de
            cloro por casi 14 años, y ha encontrado que es una sustancia noble
            que alcaliniza el organismo en sólo una hora, produciendo la
            oxidación inmediata de todo tipo de patógenos que habitan nuestro
            organismo como hongos, gusanos, bacterias y virus. Fortalece el
            sistema inmunológico porque el dióxido de cloro se convierte en
            ácido hipocloroso, sustancia que los leucocitos o células blancas
            poseen para combatir a los microbios.
          </p>
          <div>
            <Button variant="ghost" color="primary">
              Saber más
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChlorineDioxide;
