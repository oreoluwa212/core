import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="lgss:w-[300px] h-fit bg-transparent font-montserrat text-white border-2 border-gray-600 rounded-lg shadow-lg relative p-3">
      <div className="h-[240px] bg-gray-700 rounded-t-lg animate-pulse mb-4"></div>
      <div className="space-y-3">
        <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4 mx-auto"></div>
        <div className="h-6 bg-gray-700 rounded animate-pulse w-1/2 mx-auto"></div>
        <div className="h-6 bg-gray-700 rounded animate-pulse w-1/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
