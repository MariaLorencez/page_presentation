import React from "react";

const CDProject = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28"
      style={{
        backgroundImage: "url(/images/project-header-cd.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className={`absolute inset-0 bg-white bg-opacity-20`}></div>
      <p className="text-4xl text-white text-center">Proyecto CD Sobre la tierra</p>
    </div>
  );
};

export default CDProject;
