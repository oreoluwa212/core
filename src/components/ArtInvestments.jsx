import React from "react";
import { nft1 } from "../assets";

const ArtInvestments = () => {
  return (
    <div className="flex justify-around py-8 bg-gradient-to-r from-[#0B0B0B] to-[#3B3B3B] text-white">
      <div className="flex items-center text-center bg-[#1E1E1E] w-[20%]">
        <div className="mb-4">
          <img src={nft1} alt="NFT Artworks" className="w-12 h-12" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">NFT Artworks</h3>
          <p>
            Buy and Sell
            <br />
            See more...
          </p>
        </div>
      </div>
      <div className="flex items-center text-center">
        <div className="mb-4">
          <img
            src="/path/to/your/image2.png"
            alt="Invest in art"
            className="w-12 h-12"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Invest in art</h3>
          <p>
            Own quality art with as little as $1
            <br />
            View options...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtInvestments;
