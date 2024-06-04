import { Divider } from "@nextui-org/react";
import React from "react";

const CDS = () => {
  return (
    <div className="flex justify-center px-4 py-12 bg-gradient-to-r to-primary-100 from-secondary-100">
      <div className="container max-w-4xl flex flex-col gap-8 py-8 bg-white shadow-lg rounded-lg">
        <section className="p-8">
          <p className="text-3xl font-extrabold text-center mb-6">¿Qué es el CDS?</p>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold">MMS:</span> es la mezcla por partes iguales de clorito de sodio (NACLO2) activado con ácido cítrico (C₆H₈O₇)
            </p>
            <p className="text-lg">
              <span className="font-semibold">CD:</span> es la mezcla por partes iguales de clorito de sodio (NACLO2) activado con ácido clorhídrico (HCl)
            </p>
            <p className="text-lg">
              <span className="font-semibold">CDS:</span> es el gas del CD o Dióxido de cloro (ClO2) disuelto en agua
            </p>
          </div>
        </section>
        
        <Divider className="my-4" />

        <section className="p-8">
          <h2 className="text-2xl font-bold mb-6">Detalles Adicionales</h2>
          <div className="flex items-start space-x-4">
            <Divider orientation="vertical" className="h-full bg-primary w-1" />
            <div className="flex flex-col gap-4">
              <p className="text-lg">
                MMS es la denominación que dio Jim Humble a la mezcla de clorito de sodio (NACLO2) activado con ácido cítrico. Hoy ya no utilizamos el ácido cítrico al 50%, se utiliza el ácido clorhídrico (HCl) al 4%.
              </p>
              <p className="text-lg">
                Para evitar confusiones, lo vamos a llamar CD (Chlorine dioxide), que significa dióxido de cloro. El CD es mucho más suave y eficaz que el antiguo MMS activado con ácido cítrico al 50%, y apenas causa efectos secundarios.
              </p>
            </div>
          </div>
        </section>

        <Divider className="my-4" />

        <section className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">¿Cómo funciona el MMS?</h2>
          <p className="text-lg">
            <b>Cuando el clorito de sodio llega al estómago</b>, que contiene ácido clorhídrico (también llamado HCl, salfumán, ácido muriático, o ácido de sal) se produce una reacción entre estas dos sustancias, y la liberación de un gas llamado ‘dióxido de cloro’.
          </p>
          <p className="text-lg mt-4">
            Este gas se absorbe fácilmente en agua, y, por lo tanto, por las mucosas y el suero sanguíneo; y es el responsable de las curas “milagrosas”. Esta es la razón por la que inicialmente Jim Humble, le dio el nombre de Mineral Miracle Solution (solución del mineral milagroso); ya que no sólo curaba la malaria, también era capaz de aliviar muchas otras enfermedades, sin aparente explicación, en un principio.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CDS;