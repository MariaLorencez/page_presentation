import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

const UsePatentsModal: FC<Props> = ({ isOpen, onOpenChange }) => {
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
              Patentes de uso
            </ModalHeader>
            <ModalBody className="text-center">
              <div className="py-7 flex flex-col gap-4">
                <p>
                  Uso de dioxido de cloro en las bolsas de sangre -{" "}
                  <Link href={""} target="_blank" className="text-primary">
                    Descarga aquí
                  </Link>
                </p>
                <p>
                  Uso del dióxido de cloro en cáncer -{" "}
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

export default UsePatentsModal;
