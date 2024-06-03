import DynamicBG from "@common/DynamicBG";
import {
  BellSuiteDescription,
  BellSuitePhrase,
  CenturyBells,
  OnEarth,
  TheOrange,
  TheOrange2,
} from "@components/Projects";
import Stages from "@components/Projects/Stages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
};

export default function Proyectos() {
  return (
    <>
      <DynamicBG
        url={"/images/header-bell-suite.webp"}
        bgColor="bg-tertiary-900"
        bgOpacity="bg-opacity-50"
        title={<p className={`text-5xl text-white mb-4`}>Proyectos</p>}
      />
      <OnEarth />
      <TheOrange />
      <TheOrange2 />
      <BellSuiteDescription />
      <BellSuitePhrase />
      <CenturyBells />
      <Stages />
    </>
  );
}
