import React from "react";

const LargeCard = ({ image, title, artist, price }) => {
  return (
    <div className="w-72 h-fit bg-transparent font-montserrat text-white border rounded-lg shadow-lg">
      <div className="h-[290px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover rounded-lg mb-4"
        />
        </div>
      <div className="px-3 pb-3 text-gray-400 text-center">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-xl">{artist}</p>
      <p className="pt-3">{price}</p>
      </div>
    </div>
  );
};

export default LargeCard;
