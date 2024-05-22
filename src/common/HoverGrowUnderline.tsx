import React, { PropsWithChildren } from "react";

interface HoverGrowUnderlineProps extends PropsWithChildren {
  underlineColor?: string;
}

const HoverGrowUnderline: React.FC<HoverGrowUnderlineProps> = ({
  children,
  underlineColor = "bg-primary-400",
}) => {
  return (
    <div className="text-center pb-6">
      <span className="group relative inline-block">
        {children}
        <span
          className={`absolute ${underlineColor} h-0.5 bottom-0 left-1/2 w-1/2 transform -translate-x-1/2 scale-x-100 group-hover:scale-x-150 origin-center transition-transform duration-300 ease-in-out`}
        ></span>
      </span>
    </div>
  );
};

export default HoverGrowUnderline;
