import React from "react";
import DownloadAppStore from "../reusable/DownloadAppStore";
import DownloadGooglePlay from "../reusable/DownloadGooglePlay";
const DownloadAppCTA: React.FC = () => {
  return (
    <div className="pt-[14px] container grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="mx-auto pt-[82px] pb-[148px] ">
        <h1 className="font-semibold text-[#101828]  text-[48px] leading-[60px] mb-[24px]">
          Get the AltDrive app
        </h1>
        <p className="font-normal text-[#475467] max-w-[507px] mb-[48px]">
          Get the AltDrive appEnjoy 360 degree automotive solutions at your
          fingertips and get the best out of your car
        </p>

        <div className="flex gap-[12px]">
          <DownloadAppStore />
          <DownloadGooglePlay />
        </div>
      </div>

      <div className="relative mx-auto">
        <img className="h-full" src="/src/assets/images/Iphone.png" alt="" />
      </div>
    </div>
  );
};

export default DownloadAppCTA;
