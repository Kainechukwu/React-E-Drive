import React from "react";
import GetStartedBtn from "../reusable/GetStartedBtn";

const MainCTA: React.FC = () => {
  return (
    <div className="mainCTABgImg h-full min-h-[625px] max-h-[625px]">
      <div className="overlay h-full w-full  min-h-[625px] max-h-[625px]">
        <div className="container flex flex-col pt-[128px] pb-[79px]">
          <div className="flex flex-col gap-5">
            <h1 className="max-w-[544px] text-white font-bold text-[60px] leading-[72px]">
              Make money on the move.
            </h1>

            <p className="mb-[13px] mt-[24px] max-w-[480px] font-normal text-[20px] text-[#F2F4F7] leading-[30px] ">
              Make more money when you sell your vehicles on Altdrive. Upload
              vehicles and set prices that work for you.
            </p>

            <GetStartedBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCTA;
