"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Card, CardBody, Image, Listbox, ListboxItem } from "@nextui-org/react";

const MLDescription = () => {
  const descriptions = [
    "Licenciada en Psicología por parte de la UPAEP",
    "Ex alumna del Conservatorio de Música del Estado de Puebla y de la Escuela de Música de la BUAP",
    "Escritora con un diplomado de la Sociedad General de Escritores (SOGEM)",
    "Integrante desde hace más de 20 años del taller a la Sensibilización del maestro Ricardo Yáñez",
    "Estudios de Biomagnetismo con un diplomado del curso Par Biomagnético del Dr. Isaac Goiz Durán",
  ];

  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28 px-4"
      style={{
        backgroundImage: "url(/images/bg3.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-3xl font-bold text-primary mb-4 text-center">
            Compositora
          </p>
        </HoverGrowUnderline>
        <p className="text-center mb-12 text-xl">
          Realizamos conciertos y proyectos musicales y audiovisuales
          personalizados que generan una experiencia inolvidable para el grupo a
          quien va dirigido.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
          <div className="col-span-12 lg:col-span-6 h-full">
            <Image
              alt="María Lorencez description"
              className="object-cover brightness-75"
              classNames={{
                img: "h-full",
                wrapper: "h-full",
              }}
              radius="none"
              shadow="lg"
              isBlurred
              src={"/images/home-description.webp"}
              height={600}
              width={1000}
            />
          </div>
          <div className="flex flex-col col-span-12 lg:col-span-6 text-center">
            <Card shadow="lg" radius="none">
              <CardBody className="overflow-visible py-8">
                <HoverGrowUnderline underlineColor="bg-primary-500">
                  <p className="text-3xl font-bold text-secondary mb-4 text-center">
                    Estudios
                  </p>
                </HoverGrowUnderline>
                <Listbox aria-label="Actions">
                  {descriptions.map((item, index) => {
                    return (
                      <ListboxItem
                        key={index}
                        className="py-4"
                        classNames={{
                          title: "text-wrap text-md",
                        }}
                        showDivider
                      >
                        {item}
                      </ListboxItem>
                    );
                  })}
                </Listbox>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLDescription;
