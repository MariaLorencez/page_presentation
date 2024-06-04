import HoverGrowUnderline from "@common/HoverGrowUnderline";
import React from "react";

const ElaborationCDS = () => {
  return (
    <div className="w-full flex items-center justify-center py-28 px-4">
      <div className="container">
        <HoverGrowUnderline underlineColor="bg-primary-500">
          <p className="text-5xl font-bold text-secondary mb-4 text-center">
            Elaboración de CDS
          </p>
        </HoverGrowUnderline>
        <div className="lg:px-56">
          <iframe
            className="w-full aspect-video shadow-lg"
            title="YouTube video player"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ElaborationCDS;
