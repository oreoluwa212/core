import React from "react";

const TopSlideSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-2">
      <div className="bg-gray-300 h-48 w-full rounded-md"></div>
      <div className="bg-gray-300 h-4 w-3/4 rounded-md"></div>
    </div>
  );
};

export default TopSlideSkeleton;
