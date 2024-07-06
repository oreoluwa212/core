import React, { useState, useEffect } from "react";
import SmallCard from "./cards/landingPage/SmallCard";
import LargeCard from "./cards/landingPage/LargeCard";
import { FaAngleDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SimpleBtn from "./buttons/SimpleBtn";
import { Link } from "react-router-dom";
import HeaderText from "./textComponents/HeaderText";
import { footerCountryUK } from "../assets";

const Carousel = ({ cards }) => {
  const cardWidth = 288;
  const visibleCards = 3;
  const cardMargin = 16;
  const transitionDuration = 500;

  const totalCards = [...cards, ...cards, ...cards];
  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(cards.length);
    } else if (currentIndex === totalCards.length - visibleCards) {
      setCurrentIndex(cards.length - visibleCards);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      handleTransitionEnd();
    }, transitionDuration);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [currentIndex]);

  const indicatorPosition =
    (currentIndex % cards.length) * (100 / cards.length);

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-between items-center bg-[#111111] py-10 px-4 h-fit">
      <HeaderText
        title={"BUY AND INVEST ART COMMISSION - FREE"}
        subtitle={"PHISICAL | DIGITAL | NFT"}
        className={"text-center"}
      />
      <a
        href="#language"
        className="hover:underline flex gap-4 items-end justify-end w-[70%] text-white uppercase py-6"
      >
        <span>
          <img src={footerCountryUK} alt="uk logo" />
        </span>
        language
        <FaAngleDown />
      </a>

      <div className="w-[70%] mt-5 py-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + cardMargin)
            }px)`,
            width: `${totalCards.length * (cardWidth + cardMargin)}px`,
            transition: isTransitioning
              ? `transform ${transitionDuration}ms`
              : "none",
          }}
        >
          {totalCards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 cursor-pointer transition-transform duration-500 ${
                expandedCardIndex === index % cards.length ? "scale-150" : ""
              }`}
              onClick={() => handleCardClick(index % cards.length)}
              style={{
                width: `${cardWidth}px`,
                marginRight: `${cardMargin}px`,
              }}
            >
              {card.type === "small" ? (
                <SmallCard {...card} />
              ) : (
                <LargeCard {...card} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className=" bottom-0 left-0 w-full flex flex-col justify-center my-3 items-center">
        <div className="px-[10%] w-[90%] flex justify-between items-center h-full">
          <button
            onClick={prevSlide}
            className="text-white p-2 rounded-[24px] bg-[#101010] shadow-lg"
          >
            <FaArrowLeft />
          </button>
          <div className="relative w-full mt-4">
            <div className="h-[1px] w-[80%] mx-auto bg-white">
              <div
                className="h-[3px] bg-white transition-transform duration-500"
                style={{
                  width: `${100 / cards.length}%`,
                  transform: `translateX(${indicatorPosition}%)`,
                }}
              />
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="text-white p-2 rounded-[24px] bg-[#101010] shadow-lg"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="w-full flex my-5 justify-center items-center">
          <Link to={"/galleries/products"}>
            <SimpleBtn className={"px-[32px] border"}>See more</SimpleBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
