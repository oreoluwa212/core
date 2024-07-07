import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function ItemDetailsPage() {
  const location = useLocation();
  const { img } = location.state || { img: null };

  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-[5%]">
        {img ? (
          <div className="flex lgss:flex-row flex-col justify-center w-full ;lgss:justify-between pt-10 lgss:pt-0 lgss:px-0 px-5">
            <div className="w-[10%] hidden lgss:flex h-[100px]">
              <img src={img} className="w-full rounded-lg h-full" alt="" />
            </div>
            <div className="lgss:w-[45%] h-[70vh]">
              <img
                src={img}
                alt="Selected Item"
                className="w-full rounded-lg h-full"
              />
            </div>
            <div className="w-[40%]"></div>
          </div>
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </div>
  );
}

export default ItemDetailsPage;
