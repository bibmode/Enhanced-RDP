import React from "react";

const WavyLine = () => {
  return (
    <div className="relative">
      <div className="absolute w-[500%] animate-move-infinite flex xl:my-4">
        <img
          src="./images/wavy-line.svg"
          alt="wavy line"
          className="h-[120px] w-[600%] "
        />
        <img
          src="./images/wavy-line.svg"
          alt="wavy line"
          className="h-[120px] w-[600%]"
        />
        <img
          src="./images/wavy-line.svg"
          alt="wavy line"
          className="h-[120px] w-[600%]"
        />
      </div>
    </div>
  );
};

export default WavyLine;
