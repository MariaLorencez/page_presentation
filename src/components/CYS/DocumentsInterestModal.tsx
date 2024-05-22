import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

const DocumentsInterestModal: FC<Props> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      size="2xl"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Salud física y mental
            </ModalHeader>
            <ModalBody className="text-center">
              <div className="py-7 flex flex-col gap-4">
                <p>
                  Alimentos Alcalinizantes y Acidificantes -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
                <p>
                  El Crudivorismo Puede Salvarte La Vida -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
                <p>
                  El Gran Diccionario de las Dolencias y Enfermedades -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
                <p>
                  La combinación de alimentos -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
                <p>
                  Germinados, Martin Luisa -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
                <p>
                  El Estudio De China -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DocumentsInterestModal;
