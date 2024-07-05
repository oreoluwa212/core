import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { heroImg1, heroImg2, heroImg3, heroEllipse } from "../assets";
import Header from "./Header";
import SimpleBtn from "./buttons/SimpleBtn";

const images = [heroImg1, heroImg2, heroImg3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lgss:h-screen font-montserrat bg-primary text-white">
      <Header />
      <div className="flex flex-col lgss:flex-row-reverse w-full h-full">
        <div className="lgss:w-[65%] relative flex h-[50vh] lgss:h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute w-full lgss:h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="relative lgss:w-[45%] flex flex-col justify-center lgss:items-start px-[5%] pt-16 h-fit py-3 lgss:h-screen">
          <div className="absolute top-0 left-[-10%] h-full lgss:w-[140%]">
            <img
              src={heroEllipse}
              alt="Ellipse"
              className="absolute inset-0 w-full h-screen object-cover"
            />
          </div>
          <div className="relative z-10 lgss:w-[85%] space-y-7 py-10">
            <h1 className="pb-8 text-5xl font-medium text-white">
              Art For Africa
            </h1>
            <h2 className="text-2xl text-white mt-4">
              Connecting African Art Enthusiasts Across the Continent: Invest in
              the Future of African Art.
            </h2>
            <p className="text-sm font-extralight">
              Connecting African Art Enthusiasts Across the Continent: Invest in
              the Future of African Art.Connecting African Art Enthusiasts
              Across the Continent: Invest in the Future of African
              Art.Connecting African Art Enthusiasts Across the Continent:
              Invest in the Future of African Art.Connecting African Art
              Enthusiasts Across the Continent: Invest in the Future of African
              Art.
            </p>
            <div className="pt-4 flex lgss:flex-row flex-col gap-5 items-center">
              <SimpleBtn className={"px-[32px] flex gap-2"}>
                <div className="rounded-full p-[5px] bg-white">
                  <FaPlay className="text-black text-[8px]" />
                </div>
                Learn more
              </SimpleBtn>
              <SimpleBtn className={"px-[32px] border-white border"}>
                Get Started
              </SimpleBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
