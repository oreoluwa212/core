import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JoinInFree from "../components/JoinInFree";
import Exhibitions from "../components/Exhibitions";
import ArtInvestments from "../components/ArtInvestments";
import Carousel from "../components/Carousel";
import { cloud, flower, heroImg4, ray } from "../assets";
import LatestArtCarousel from "../components/LatestArtCarousel";

const cards = [
  {
    type: "large",
    image: heroImg4,
    title: "Vulnerable",
    artist: "Tayo Buju",
    price: "€ 2,000",
  },
  {
    type: "small",
    image: cloud,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "small",
    image: cloud,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "small",
    image: ray,
    title: "Cloud",
    artist: "Mike Bee",
    price: "€ 4,000",
  },
  {
    type: "large",
    image: heroImg4,
    title: "Vulnerable",
    artist: "Tayo Buju",
    price: "€ 2,000",
  },
  {
    type: "small",
    image: cloud,
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
