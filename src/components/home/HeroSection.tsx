import React from "react";
import HomeSearchFilter from "../reusable/HomeSearchFilter";
const HeroSection: React.FC = () => {
  return (
    <div className="homeBgImg h-full min-h-[714px] max-h-[714px]">
      <div className="homeBgGradient h-full w-full  min-h-[714px] max-h-[714px]">
        <div className="container flex flex-col pt-[128px] pb-[79px]">
          <div className="flex flex-col gap-5">
            <h1 className="max-w-[544px] text-white font-bold text-[48px] leading-[60px]">
              Get a new car in less than 60 days with our flexible payment plans
            </h1>
            <p className="mb-[13px] max-w-[480px] font-normal text-[20px] text-[#F2F4F7] leading-[30px] ">
              Our flexible payment plan allows you to own a car and pay monthly,
              0% interest charged
            </p>
            <HomeSearchFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
