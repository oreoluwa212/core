import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JoinInFree from "../components/JoinInFree";
import Exhibitions from "../components/Exhibitions";
import ArtInvestments from "../components/ArtInvestments";
import Carousel from "../components/Carousel";
import LatestArtCarousel from "../components/LatestArtCarousel";

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
    <div className="bg-[#111111]">
      <section id="home">
        <Hero />
      </section>
      <section id="artworks">
        <ArtInvestments />
        <Carousel />
        <LatestArtCarousel />
      </section>
      <Exhibitions />
      <section id="about">
        <JoinInFree />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
