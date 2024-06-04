import React from "react";

const HomePhrase = () => {
  return (
    <div
      className="flex justify-center w-full bg-cover bg-center relative items-center py-28 px-4"
      style={{
        backgroundImage: "url(/images/bg2.webp)",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className={`absolute inset-0 bg-secondary bg-opacity-40`}></div>
      <div className="container relative">
        <p className="text-4xl font-bold text-white mb-8 text-center">
          &quot;La música busca la pureza del deseo … restaña las heridas.&quot;
        </p>
        <p className="text-center text-2xl text-primary">- John Berger</p>
      </div>
    </div>
  );
};

export default HomePhrase;
