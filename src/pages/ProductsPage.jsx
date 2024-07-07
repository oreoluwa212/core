import React, { useState } from "react";
import Header from "../components/Header";
import HeaderText from "../components/textComponents/HeaderText";
import {
  footerCountryUK,
  item1a,
  item1b,
  item1c,
  item1d,
  item2a,
  item2b,
  item2c,
  item2d,
  item3a,
  item3b,
  item3c,
  item3d,
  product1,
  product2,
  product3,
  product4,
} from "../assets";
import ProductSlider from "../components/cards/products/ProductSlider";
import { FaAngleDown } from "react-icons/fa";
import ProductText from "../components/textComponents/ProductText";

const products = [
  { img: product1, text: "Digital Art" },
  { img: product2, text: "NFTs" },
  { img: product3, text: "Plaster" },
  { img: product4, text: "Photography" },
  { img: product2, text: "Ceramic" },
  { img: product4, text: "Fumage" },
];

const ProductsPage = () => {
  const [activeScreen, setActiveScreen] = useState(1);

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
          <div className="w-full flex flex-col pt-7">
            <div className="w-full lgss:px-5 lgss:h-[80px] h-fit lgss:py-0 py-4 flex lgss:flex-row flex-col gap-2 justify-between">
              <div className="flex lgss:flex-row  lgss:px-8 gap-5 justify-start items-center text-primary font-medium h-[92px] ">
                <p>Artwork type:</p>
                <div className="">
                  <button
                    onClick={() => setActiveScreen(1)}
                    className={
                      activeScreen === 1
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    ALL
                  </button>
                  <button
                    onClick={() => setActiveScreen(2)}
                    className={
                      activeScreen === 2
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    PHYSICAL
                  </button>
                  <button
                    onClick={() => setActiveScreen(3)}
                    className={
                      activeScreen === 3
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    DIGITAL
                  </button>
                  <button
                    onClick={() => setActiveScreen(4)}
                    className={
                      activeScreen === 4
                        ? "text-primary border-primary border-b-2 font-semibold px-[12px]"
                        : "px-[12px]"
                    }
                  >
                    NFT
                  </button>
                </div>
              </div>
              <a
                href="#language"
                className="hover:underline flex text-[18px] gap-4 items-center uppercase"
              >
                <span>
                  <img src={footerCountryUK} alt="uk logo" />
                </span>
                currency
                <FaAngleDown />
              </a>
            </div>
            <div className="w-full lgss:px-12 pb-4">
              {activeScreen === 1 ? (
                <>
                  <div className="flex lgss:flex-row flex-col w-full gap-5">
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeScreen === 2 ? (
                <>
                  <div className="flex lgss:flex-row flex-col w-full gap-5">
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeScreen === 3 ? (
                <>
                  <div className="flex lgss:flex-row flex-col w-full gap-5">
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : activeScreen === 4 ? (
                <>
                  <div className="flex lgss:flex-row flex-col w-full gap-5">
                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item3d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item2d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-10 lgss:w-1/3 w-full pb-10 items-center">
                      <div className="lgss:w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1a}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1b}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1c}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[95%] bg-white h-fit rounded-[8px] shadow-sm border shadow-black/40">
                        <div className="w-full">
                          <img
                            src={item1d}
                            className="w-full rounded-t-[8px] h-auto"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col pl-7 py-4">
                          <ProductText
                            title={"Black Sound"}
                            subtitle={"Sarah Ojunnwa, Nairobi Kenya"}
                            description={"2014. Oil linen canvas"}
                            description1={"200 x 350. Sounds (Album)"}
                          />
                          <div className="flex gap-2 font-medium text-lg items-center pb-3 pt-5">
                            <p className="border p-2 border-black border-opacity-25">
                              EUR
                            </p>
                            <p>€ 2,000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
