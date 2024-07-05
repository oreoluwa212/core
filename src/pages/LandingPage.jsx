import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JoinInFree from "../components/JoinInFree";
import Exhibitions from "../components/Exhibitions";
import ArtInvestments from "../components/ArtInvestments";

const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* <ArtInvestments/> */}
      <Exhibitions/>
      <JoinInFree/>
      <Footer/>
    </>
  );
};

export default LandingPage;
