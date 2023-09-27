import React from "react";
import HeroSection from "./../../components/home/HeroSection";
import MainCTA from "./../../components/home/MainCTA";
import ActionFeatures from "./../../components/home/ActionFeatures";

import DownloadAppCTA from "./../../components/home/DownloadAppCTA";
import Recommendation from "./../../components/reusable/Recommendation";
const Home: React.FC = () => {
  const recommendationText = {
    title: "Recommended Deals",
    subTitle: "Check out these recommendations based on our bestsellers",
  };
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ActionFeatures />
      <Recommendation text={recommendationText} />
      <MainCTA />
      <DownloadAppCTA />
    </div>
  );
};

export default Home;
