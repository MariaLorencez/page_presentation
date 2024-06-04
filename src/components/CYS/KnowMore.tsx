"use client";
import HoverGrowUnderline from "@common/HoverGrowUnderline";
import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import DocumentsInterestModal from "./DocumentsInterestModal";
import UsePatentsModal from "./UsePatentsModal";

const KnowMore = () => {
  const {
    isOpen: isOpenDocuments,
    onOpen: onOpenDocuments,
    onOpenChange: onOpenChangeDocuments,
  } = useDisclosure();

  const {
    isOpen: isOpenPatents,
    onOpen: onOpenPatents,
    onOpenChange: onOpenChangePatents,
  } = useDisclosure();

  return (
    <div className="flex justify-center w-full bg-primary items-center py-28 px-4">
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-secondary">
          <p className="text-5xl font-bold text-white mb-4 text-center">
            ¿Quieres saber más?
          </p>
        </HoverGrowUnderline>
        <p className="text-center mb-4">
          Dióxido de cloro, ¿medicamento o veneno?
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="ghost"
            color="secondary"
            className="rounded-none"
            onClick={onOpenDocuments}
          >
            Documento de interés
          </Button>
          <Button
            variant="ghost"
            color="secondary"
            className="rounded-none"
            onClick={onOpenPatents}
          >
            Patentes de uso
          </Button>
        </div>
      </div>
      <DocumentsInterestModal
        isOpen={isOpenDocuments}
        onOpenChange={onOpenChangeDocuments}
      />
      <UsePatentsModal
        isOpen={isOpenPatents}
        onOpenChange={onOpenChangePatents}
      />
    </div>
  );
};

export default KnowMore;
