import React from "react";
import { Fragment } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import JoinInFree from "../components/JoinInFree";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <JoinInFree/>
      <Footer/>
    </>
  );
};

export default LandingPage;
