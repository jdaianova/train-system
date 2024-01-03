import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import AboutUs from "./AboutUs/AboutUs";
import HowItWorks from "./HowItWorks/HowItWorks";
import Feedback from "./Feedback/Feedback";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HomeHeader />
      <AboutUs />
      <HowItWorks />
      <Feedback />
    </div>
  );
};

export default Home;
