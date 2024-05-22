import DynamicBG from "@common/DynamicBG";
import {
  CDS,
  Cases,
  ChlorineDioxide,
  ConscienceHealth,
  ContactProducts,
  ElaborationCDS,
  KnowMore,
  Products,
  Questions,
  SendFree,
} from "@components/CYS";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conciencia y salud",
};

export default function CYS() {
  return (
    <>
      <DynamicBG
        url={"/images/cys-bg.webp"}
        bgColor="bg-tertiary-900"
        bgOpacity="bg-opacity-70"
        title={
          <p className="text-5xl font-bold text-white mb-4">
            Conciencia y salud
          </p>
        }
      />
      <ConscienceHealth />
      <ChlorineDioxide />
      <CDS />
      <Cases />
      <Products />
      <SendFree />
      <ContactProducts />
      <ElaborationCDS />
      <KnowMore />
      <Questions />
    </>
  );
}
