import React from "react";

const ExperienceDescription = () => {
  return (
    <div
      className="w-full bg-cover bg-center relative flex items-center justify-center py-28 px-4"
      style={{
        backgroundImage: `url('/images/marialorencez.webp')`,
        backgroundPosition: "50% 30%",
      }}
    >
      <div className={`absolute inset-0 bg-tertiary-900 bg-opacity-70`}></div>
      <div className="container relative">
        <p className="text-3xl font-bold text-primary mb-8 text-center">
          Esa es la forma en que hago música.
        </p>
        <p className="text-center text-xl text-white">
          <em>
            <b>Es una actividad que disfruto y me encanta compartir .</b>
          </em>
        </p>
      </div>
    </div>
  );
};

export default ExperienceDescription;
