import React from "react";
import "../stylesheets/Home.css";
import { NavLink } from "react-router-dom";
import Slider from "../components/Slider";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <Section2 />
        
      <div></div>
      <Footer />
    </div>
  );
};

export default Home;
