import DynamicBG from "@common/DynamicBG";
import { Gallery } from "@components/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería",
};

export default function Galeria() {
  const images: string[] = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://placehold.co/600x400",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://placehold.co/600x400",
    // Añade más URLs de imágenes aquí
  ];

  return (
    <>
      <DynamicBG
        url={"/images/header-bell-suite.webp"}
        bgColor="bg-tertiary-900"
        bgOpacity="bg-opacity-50"
        title={<p className={`text-5xl text-white mb-4`}>Galería</p>}
      />
      <Gallery images={images} />
    </>
  );
}
