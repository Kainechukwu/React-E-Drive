import React from "react";
import HeroSection from "./../../components/home/HeroSection";
import MainCTA from "./../../components/home/MainCTA";
import DownloadAppCTA from "./../../components/home/DownloadAppCTA";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MainCTA />
      <DownloadAppCTA />
    </div>
  );
};

export default Home;
