import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderText from "./textComponents/HeaderText";
import SliderArrow from "./sliders/SliderArrow";
import SimpleBtn from "./buttons/SimpleBtn";
import SmallCard from "./cards/landingPage/SmallCard";
import SkeletonLoader from "./cards/landingPage/SkeletonLoader";
import axios from "axios";

const Carousel = () => {
  const cardWidth = 180;
  const cardMargin = 16;
  const transitionDuration = 500;
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_ALL_BASE_URL}?organization_id=${
            import.meta.env.VITE_ORGANIZATION_ID
          }&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        console.log("Fetched products:", response.data);

        setCards(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      handleTransitionEnd();
    }, transitionDuration);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [currentIndex]);

  const getPrice = (currentPrice) => {
    if (currentPrice.length > 0) {
      const priceInfo = currentPrice[0];
      if (priceInfo.EUR) {
        return `€${priceInfo.EUR[0]}`;
      } else if (priceInfo.NGN) {
        return `₦${priceInfo.NGN[0]}`;
      }
    }
    return "Price not available";
  };

  const getShortDescription = (description) => {
    if (!description) return "";
    return description.split(".")[0];
  };

  const handleSeeMore = () => {
    navigate("/galleries/products");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center items-center bg-[#111111] py-10 px-4 h-fit">
      <HeaderText
        title={"BUY AND INVEST ART COMMISSION - FREE"}
        subtitle={"PHYSICAL | DIGITAL | NFT"}
        className={"text-center text-white"}
      />
      <div className="w-full flex justify-center items-center">
        <div className="w-[70%] lgss:mt-5 lgss:py-10 overflow-hidden">
          <div
            className="flex transition-transform justify-start gap-12 items-end duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (cardWidth + cardMargin)
              }px)`,
              width: `${cards.length * (cardWidth + cardMargin)}px`,
              transition: isTransitioning
                ? `transform ${transitionDuration}ms`
                : "none",
            }}
          >
            {loading ? (
              <div className="flex gap-10 cursor-pointer transition-transform duration-500 bg-[#111111]">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </div>
            ) : (
              cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 cursor-pointer transition-transform duration-500"
                >
                  <SmallCard
                    key={index}
                    onClick={handleSeeMore}
                    image={
                      card.photos[0]
                        ? `https://api.timbu.cloud/images/${card.photos[0].url}`
                        : "default-image-url"
                    }
                    title={card.name}
                    artist={getShortDescription(card.description)}
                    price={getPrice(card.current_price)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <SliderArrow onPrevClick={prevSlide} onNextClick={nextSlide} />

      <div className="w-full flex my-5 justify-center items-center">
        <SimpleBtn onClick={handleSeeMore} className={"px-[32px] border"}>
          See more
        </SimpleBtn>
      </div>
    </div>
  );
};

export default Carousel;
