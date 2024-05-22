import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";

const SendFree = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28"
      style={{
        backgroundImage: "url(/images/bg1.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <p className="text-4xl font-bold text-secondary mb-4 text-center">
          Envío GRATIS a partir de 5 kits
        </p>

        <p className="text-center mb-6">
          Métodos de envío: Distribuimos a cualquier parte de la república
          mexicana haciendo uso de varios medios de paquetería comercial.
          <br />
          El producto llegará a ti conservando todas sus propiedades.
        </p>
        <div className="flex justify-center">
          <Button
            as={Link}
            href="/contacto#info"
            variant="ghost"
            color="secondary"
            className="rounded-none"
            size="lg"
            startContent={<FaLocationArrow />}
          >
            ¿Quieres ser distribuidor?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SendFree;
