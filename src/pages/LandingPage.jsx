import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JoinInFree from "../components/JoinInFree";
import Exhibitions from "../components/Exhibitions";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Exhibitions/>
      <JoinInFree/>
      <Footer/>
    </>
  );
};

export default LandingPage;
