import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderText from "./textComponents/HeaderText";
import { gallery1 } from "../assets";

const LatestArtCarousel = () => {
  const cardWidth = 288;
  const cardMargin = 16;
  const transitionDuration = 500;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleries = [
    {
      imageSrc: gallery1,
      title: "How to Draw Flowers",
    },
    {
      imageSrc: gallery1,
      title: "Intricacies of Art",
    },
    {
      imageSrc: gallery1,
      title: "Exploring Modern Art",
    },
    {
      imageSrc: gallery1,
      title: "The Art of Sculpture",
    },
  ];

  const totalSlides = galleries.length + 2;

  const sliderRef = useRef(null);

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
  let transitionTimeout;

  if (currentIndex === 0) {
    transitionTimeout = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(galleries.length);
        sliderRef.current.style.transform = `translateX(-${
          galleries.length * (cardWidth + cardMargin)
        }px)`;
      }
    }, transitionDuration);
  } else if (currentIndex === totalSlides - 1) {
    transitionTimeout = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(1);
        sliderRef.current.style.transform = `translateX(-${
          cardWidth + cardMargin
        }px)`;
      }
    }, transitionDuration);
  } else {
    if (sliderRef.current) {
      sliderRef.current.style.transition = `transform ${transitionDuration}ms ease`;
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * (cardWidth + cardMargin)
      }px)`;
    }
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  if (sliderRef.current) {
    sliderRef.current.addEventListener("transitionend", handleTransitionEnd);
  }

  return () => {
    clearTimeout(transitionTimeout);
    if (sliderRef.current) {
      sliderRef.current.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    }
  };
}, [currentIndex, galleries.length, totalSlides]);


  const renderGalleries = [
    galleries[galleries.length - 1],
    ...galleries,
    galleries[0],
  ];

  const indicatorPosition =
    ((currentIndex - 1 + galleries.length) % galleries.length) *
    (100 / galleries.length);

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-between items-center bg-[#111111] py-10 px-4 h-fit">
      <HeaderText
        title={"LATEST IN THE WORLD OF ART"}
        className={"text-center text-white"}
      />
      <div className="lg:w-[70%] mt-5 py-10 overflow-hidden relative">
        <div
          className="flex"
          ref={sliderRef}
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + cardMargin)
            }px)`,
            width: `${renderGalleries.length * (cardWidth + cardMargin)}px`,
          }}
        >
          {renderGalleries.map((gallery, index) => (
            <LatestArtCard
              key={index}
              imageSrc={gallery.imageSrc}
              title={gallery.title}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-[70%] gap-5 flex justify-between items-center h-full">
          <button
            onClick={prevSlide}
            className="text-white p-3 rounded-[12px] shadow-lg bg-[#101010]"
          >
            <FaArrowLeft />
          </button>
          <div className="relative w-full mt-4">
            <div className="h-[1px] w-full mx-auto bg-white">
              <div
                className="h-[3px] bg-white transition-transform duration-500"
                style={{
                  width: `${100 / galleries.length}%`,
                  transform: `translateX(${indicatorPosition}%)`,
                }}
              />
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="text-white p-2 rounded-[24px] shadow-lg bg-[#101010]"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="w-full flex my-5 justify-center items-center">
          <Link to={"/galleries/products"}>
            <button className="px-8 py-2 border border-white text-white rounded-[32px]">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const LatestArtCard = ({ imageSrc, title }) => {
  return (
    <div
      className="lg:w-1/3 w-full bg-transparent shadow-sm h-fit border-gray-300 shadow-gray-500 rounded-[8px] min-h-[160px] flex-shrink-0"
      style={{ width: "288px", marginRight: "16px" }}
    >
      <img src={imageSrc} className="rounded-t-[8px] w-full" alt={title} />
      <div className="py-8 text-white">
        <h1 className="lg:text-xl text-sm text-center font-semibold px-1">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default LatestArtCarousel;
