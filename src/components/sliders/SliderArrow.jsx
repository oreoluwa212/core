import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SliderArrow = ({
  onPrevClick,
  onNextClick,
  indicatorPosition,
  totalSlides,
}) => {
  return (
    <div className="w-[80%] gap-5 flex justify-between items-center h-full">
      <button
        onClick={onPrevClick}
        className="text-white p-3 rounded-[12px] shadow-lg bg-[#101010]"
      >
        <FaArrowLeft />
      </button>
      <div className="relative w-full mt-4">
        <div className="h-[1px] w-full mx-auto bg-white">
          <div
            className="h-[3px] bg-white transition-transform duration-500"
            style={{
              width: `${100 / totalSlides}%`,
              transform: `translateX(${indicatorPosition}%)`,
            }}
          />
        </div>
      </div>
      <button
        onClick={onNextClick}
        className="text-white p-2 rounded-[24px] shadow-lg bg-[#101010]"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SliderArrow;
