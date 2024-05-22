import { Button } from "@nextui-org/react";
import React from "react";

const Cases = () => {
  return (
    <div className="max-w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div
          className="flex flex-col col-span-12 lg:col-span-6 p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/images/hospital.webp')`,
          }}
        >
          <div className={`absolute inset-0 bg-primary bg-opacity-75`}></div>
          <div className="relative">
            <p className="text-3xl font-medium text-white mb-6">
              Casos de éxito
            </p>
            <p className="text-xl text-white mb-6">
              En un hospital de Ecuador se realizó un estudio preliminar con
              cien personas diagnosticadas con covid 19. Les aplicaron un
              protocolo intenso con dióxido de cloro y en 4 días se sanaron 97
              de estas personas.
            </p>
            <div>
              <Button variant="ghost" color="secondary">
                Descarga el estudio preliminar
              </Button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col col-span-12 lg:col-span-6 p-8 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('/images/cmj.webp')`,
          }}
        >
          <div className={`absolute inset-0 bg-secondary bg-opacity-75`}></div>
          <div className="relative">
            <p className="text-3xl font-medium text-white mb-6">Querétaro</p>
            <p className="text-xl text-white mb-12">
              El Dr. Manuel Aparicio Alonso, Director Médico y Responsable
              Sanitario del Centro Médico Jurica.
            </p>
            <div>
              <Button variant="ghost" color="primary">
                Entrevista DR. Manuel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
