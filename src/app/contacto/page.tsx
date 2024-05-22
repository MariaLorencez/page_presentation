import DynamicBG from "@common/DynamicBG";
import { ContactInfo, ContactForm, ContactContent } from "@components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function Contacto() {
  return (
    <>
      <DynamicBG
        url={"/images/bg2.webp"}
        title={
          <p className="text-5xl font-bold text-primary mb-4">Contacto</p>
        }
        description={
          <p className="text-2xl text-white">
            ¡Me encantará crear contigo una experiencia
            <br />
            <b>increíble para tu marca y tus clientes</b>!
          </p>
        }
      />
      <ContactInfo />
      <ContactContent />
    </>
  );
}
