import DynamicBG from "@common/DynamicBG";
import { HomeDescription, HomeExperience, HomePhrase } from "@components/Home";
import { scheherazade } from "@fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
};

export default function Home() {
  return (
    <>
      <DynamicBG
        url={"/images/cover-6.webp"}
        bgColor="bg-quaternary"
        bgOpacity="bg-opacity-50"
        title={
          <h1 className={`text-5xl text-white mb-4 ${scheherazade.className}`}>
            MARÍA <strong>LORENCEZ</strong>
          </h1>
        }
      />
      <HomeDescription />
      <HomeExperience />
      <HomePhrase />
    </>
  );
}
