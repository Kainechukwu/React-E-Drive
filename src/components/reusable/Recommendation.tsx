import React from "react";
import CarCarouselCard from "./CarCarouselCard";
interface props {
  text: {
    title: string;
    subTitle: string;
  };
}

const Recommendation: React.FC<props> = ({ text }) => {
  return (
    <div className="container  mt-[90px]">
      {text.title && (
        <h1 className="font-semibold text-[30px] text-[#30374F] leading-[38px] mb-[10px]">
          {text.title}
        </h1>
      )}
      {text.subTitle && (
        <p className="font-normal text-sm text-[#4A5578]">
          Check out these recommendations based on our bestsellers
        </p>
      )}

      <div className="mt-[43px] mx-auto sm:max-w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-6 xl:gap-8">
        <CarCarouselCard />
        <CarCarouselCard />
        <CarCarouselCard />
        <CarCarouselCard />
      </div>
    </div>
  );
};

export default Recommendation;
