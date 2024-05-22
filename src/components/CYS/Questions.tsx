"use client";
import React from "react";
import { Accordion, AccordionItem, Selection } from "@nextui-org/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const listQuestions = [
  {
    title: "¿Cómo hago el dióxido de cloro?",
    description:
      "Cuando unes una gota o más de clorito de sodio al 28% con ácido clorhídrico al 4%, esa nueva mezcla es el dióxido de cloro.",
  },
  {
    title:
      "¿Siempre que mezclo el clorito de sodio al 28% con el ácido clorhídrico al 4% en un vaso seco cambia su color transparente por un color amarillo?",
    description:
      "Si, siempre que los mezclas debe cambiar el color transparente por un amarillo claro. Cuando es más de una gota puede tornarse de amarillo a café oro. Es un indicador de que el producto está en óptimas condiciones para poder utilizarse.",
  },
  {
    title: "¿Qué dosis se recomienda tomar para la prevención de COVID-19?",
    description: (
      <>
        <p>Para una dosis preventiva se pueden hacer dos procedimientos</p>
        <br />
        <p>
          Procedimiento 1
          <br />
          Poner 12 gotas de clorito de sodio al 28% con ácido clorhídrico al 4%
          en un termo seco (de vidrio o plástico, el metal no debe ser usado),
          agregar un litro de agua y beberlo durante el día; entre 8 a 10
          ocasiones.
        </p>
        <br />
        <p>
          Procedimiento 2
          <br />
          Poner 10 ml, de CDS (destilación del dióxido de cloro –ver video del
          Dr. Andreas Kalcker-) para un litro de agua y beberlo durante el día,
          entre 8 a 10 ocasiones.
        </p>
      </>
    ),
  },
  {
    title:
      "¿Para qué tipo de personas está contraindicado el dióxido de cloro?",
    description:
      "Está contraindicado para aquellas personas que han tenido trombosis y toman anticoagulantes. Estas personas pueden alcalinizarse por otros medios como la alimentación y el manejo de los pensamientos, mindfullness, etc. ",
  },
  {
    title:
      "¿Qué dosis se recomienda tomar para personas que ya están diagnosticadas con COVID-19?",
    description: (
      <p>
        Se recomienda seguir el{" "}
        <b className="text-primary">protocolo del Dr. Andreas Kalcker</b>
      </p>
    ),
  },
  {
    title: "¿Los niños pueden tomar dióxido de cloro?",
    description: (
      <>
        <p>
          Niños menores de un año no deben tomar dióxido de cloro. Se recomienda
          el protocolo del Dr. Andreas Kalcker que aparece en su libro Salud
          prohibida, incurable era ayer.
        </p>
        <br />
        <p>
          Protocolo N: está basado en experiencias y testimonios de muchas
          madres.
          <br />
          *Por regla general se utiliza por cada 12 kilos de peso, 1 gota de CD
          (dióxido de cloro sin destilar), diluido en 100 ml. de agua, tres
          veces al día.
        </p>
        <br />
        El CDS (Dióxido de cloro destilado) suele ser más tolerado y se utiliza
        por cada 12 kilos de peso, 1 ml. al 0,3% (3000 ppm) diluido en 100 ml o
        más de agua, tres veces al día.
      </>
    ),
  },
  {
    title:
      "¿Qué debo hacer si tengo nauseas, dolor de cabeza, diarrea o vómito?",
    description:
      "Para inhibir los efectos secundarios toma 2 gramos de vitamina C, o el jugo de dos limones, o media cucharadita de carbonato de sodio disuelto en agua. Descansa del CD o del CDS medio día y continúa el protocolo reduciendo el número de gotas o de mililitros.",
  },
  {
    title: "¿Pueden tomar dióxido de cloro mujeres embarazadas?",
    description: (
      <>
        Si. Pueden tomar el número de gotas de dióxido de cloro, o mililitros de
        dióxido de cloro destilado que no les causen nauseas.
        <br />
        Se recomienda ver en la página del Dr. Andreas Kalcker, el testimonio de
        una mujer que estuvo embarazada y con metástasis. Se curó al 100% del
        cáncer, y nació perfectamente su bebé.
      </>
    ),
  },
];

const Questions = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());

  // Divide the questions into two columns
  const midIndex = Math.ceil(listQuestions.length / 2);
  const firstColumnQuestions = listQuestions.slice(0, midIndex);
  const secondColumnQuestions = listQuestions.slice(midIndex);

  return (
    <div className="flex justify-center w-full items-center py-28">
      <div className="container">
        <p className="text-4xl font-bold text-secondary mb-4 text-center">
          Preguntas frecuentes
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Accordion
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              showDivider={false}
              fullWidth
            >
              {firstColumnQuestions.map(({ title, description }, index) => (
                <AccordionItem
                  key={`first-${index}`}
                  aria-label={`Pregunta ${index + 1}`}
                  title={title}
                  indicator={({ isOpen }) =>
                    isOpen ? <FaMinus /> : <FaPlus />
                  }
                  classNames={{
                    indicator:
                      "text-primary data-[open=true]:text-secondary data-[open=true]:-rotate-180",
                  }}
                  className="w-full"
                >
                  {description}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Accordion
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
              showDivider={false}
              fullWidth
            >
              {secondColumnQuestions.map(({ title, description }, index) => (
                <AccordionItem
                  key={`second-${index}`}
                  aria-label={`Pregunta ${midIndex + index + 1}`}
                  title={title}
                  indicator={({ isOpen }) =>
                    isOpen ? <FaMinus /> : <FaPlus />
                  }
                  classNames={{
                    indicator:
                      "text-primary data-[open=true]:text-secondary data-[open=true]:-rotate-180",
                  }}
                  className="w-full"
                >
                  {description}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
