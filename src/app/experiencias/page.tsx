import DynamicBG from "@common/DynamicBG";
import {
  CreativeProcess,
  EnrichedBrand,
  ExperienceDescription,
  ExperienceFormats,
  ExperiencePhrase,
} from "@components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiencias",
};

export default function MariaLorencez() {
  return (
    <>
      <DynamicBG
        url={"/images/concert-header.webp"}
        bgColor="bg-tertiary-900"
        bgOpacity="bg-opacity-50"
        title={
          <p className={`text-5xl text-white mb-4`}>
            Experiencias increíbles para tu marca
          </p>
        }
        description={
          <p className="text-2xl text-white">
            Una marca fuerte conecta de forma profunda con el ser.
            <br />
            Por medio de experiencias musicales, se puede lograr ésta conexión.
          </p>
        }
      />
      <EnrichedBrand />
      <ExperienceFormats />
      <CreativeProcess />
      <ExperiencePhrase />
      <ExperienceDescription />
    </>
  );
}
