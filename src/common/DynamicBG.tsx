import { FC, ReactNode } from "react";

interface Props {
  url: string;
  bgColor?: string;
  bgOpacity?: string;
  title: ReactNode;
  description?: ReactNode;
}

const DynamicBG: FC<Props> = ({
  url,
  bgColor,
  bgOpacity,
  title,
  description,
}) => {
  return (
    <div
      className="w-full bg-cover bg-center relative flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${url})`,
        minHeight: "100vh",
      }}
    >
      <div
        className={`absolute inset-0 ${bgColor ? bgColor : ""} ${
          bgOpacity ? bgOpacity : ""
        }`}
      ></div>
      <div className="p-4 relative">
        {title}
        {description}
      </div>
    </div>
  );
};

export default DynamicBG;
