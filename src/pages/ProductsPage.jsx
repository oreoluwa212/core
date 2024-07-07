import React from "react";
import Header from "../components/Header";
import HeaderText from "../components/textComponents/HeaderText";
import { product1, product2, product3, product4 } from "../assets";
import ProductSlider from "../components/cards/products/ProductSlider";

const products = [
  { img: product1, text: "Digital Art" },
  { img: product2, text: "NFTs" },
  { img: product3, text: "Plaster" },
  { img: product4, text: "Photography" },
  { img: product2, text: "Ceramic" },
  { img: product4, text: "Fumage" },
];

const ProductsPage = () => {
  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-start lgss:px-14">
        <HeaderText
          className={"text-black pt-5 ml-8"}
          title={"Discover physical digital and NFT artworks "}
        />
        <div className="w-full px-[15%] lgss:px-0">
          <ProductSlider products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
