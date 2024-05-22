import React from "react";

const BellSuite = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28"
      style={{
        backgroundImage: "url(/images/header-bell-suite.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className={`absolute inset-0 bg-tertiary-900 bg-opacity-60`}></div>
      <p className="text-4xl text-white relative text-center">
        Suite Campanas del Siglo XVI en Concierto
      </p>
    </div>
  );
};

export default BellSuite;
