import React from "react";
import ContactForm from "./ContactForm";
import HoverGrowUnderline from "@common/HoverGrowUnderline";

export const ContactContent = () => {
  return (
    <div
      className="w-full bg-cover bg-center relative flex items-center justify-center py-28"
      style={{
        backgroundImage: "url(/images/bg1.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-5xl font-bold text-primary mb-4 text-center">
            Contáctanos
          </p>
        </HoverGrowUnderline>
        <div className="flex justify-center px-14">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
