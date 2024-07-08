import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JoinInFree from "../components/JoinInFree";
import Exhibitions from "../components/Exhibitions";
import ArtInvestments from "../components/ArtInvestments";
import Carousel from "../components/Carousel";
import { cloud, flower, heroImg1, heroImg4, item1c, item2b, item2c, item2d, item3a, ray } from "../assets";
import LatestArtCarousel from "../components/LatestArtCarousel";

const cards = [
  {
    type: "large",
    image: item1c,
    title: "Vulnerable",
    artist: "Tayo Buju",
    price: "€ 2,000",
  },
  {
    type: "small",
    image: heroImg1,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "large",
    image: item3a,
    title: "Vulnerable",
    artist: "Tayo Buju",
    price: "€ 2,000",
  },
  {
    type: "small",
    image: item2b,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "small",
    image: item2d,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "small",
    image: item2c,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "large",
    image: flower,
    title: "Vulnerable",
    artist: "Tayo Buju",
    price: "€ 2,000",
  },
];

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.sectionId) {
      const element = document.getElementById(location.state.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="artworks">
        <ArtInvestments />
        <Carousel cards={cards} />
        <LatestArtCarousel />
      </section>
      <Exhibitions />
      <section id="about">
        <JoinInFree />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
