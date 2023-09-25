import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="homeBgImg h-full min-h-[714px] max-h-[714px]">
      <div className="homeBgGradient h-full w-full  min-h-[714px] max-h-[714px]">
        <div className="container flex flex-col pt-[128px] pb-[79px]">
          <div className="flex flex-col">
            <h1 className="max-w-[544px] text-white font-bold text-[48px] leading-[60px]">
              Get a new car in less than 60 days with our flexible payment plans
            </h1>

            <p className="mt-[24px] max-w-[480px] font-normal text-[20px] text-[#F2F4F7] leading-[30px] ">
              Our flexible payment plan allows you to own a car and pay monthly,
              0% interest charged
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
