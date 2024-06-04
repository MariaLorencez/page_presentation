import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";

const ConscienceHealth = () => {
  return (
    <div className="flex justify-center">
      <div className="container text-center flex flex-col gap-8 py-8 px-4">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-secondary mb-4 text-center">
            La conciencia y la salud son dos caras de una misma moneda.
          </p>
        </HoverGrowUnderline>
        <p className="text-xl">
          Debido a la situación actual por la que pasamos, hoy más que nunca es
          de suma importancia mantener alto nuestro nivel de conciencia y
          fortalecer nuestra salud. en el Salón Barroco de la Benemérita
          Universidad Autónoma de Puebla.
        </p>
      </div>
    </div>
  );
};

export default ConscienceHealth;
