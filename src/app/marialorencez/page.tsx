import DynamicBG from "@common/DynamicBG";
import {
  BellSuite,
  CDProject,
  ComposerProducer,
  EnsembleWork,
  MLDescription,
} from "@components/MariaLorencez";
import { scheherazade } from "@fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "María Lorencez",
};

export default function MariaLorencez() {
  
  return (
    <>
      <DynamicBG
        url={"/images/header.webp"}
        bgColor="bg-primary"
        bgOpacity="bg-opacity-70"
        title={
          <h1 className={`text-5xl text-white ${scheherazade.className}`}>
            MARÍA <strong>LORENCEZ</strong>
          </h1>
        }
      />
      <MLDescription />
      <CDProject />
      <ComposerProducer />
      <BellSuite />
      <EnsembleWork />
    </>
  );
}
