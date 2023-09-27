import React from "react";

const ActionFeatures: React.FC = () => {
  return (
    <div className="mt-[45px] grid grid-cols-1 lg:grid-cols-2 gap-6 container text-[#FFFFFF] text-[32px] font-[510] ">
      <div className="grid grid-cols-2 gap-6 w-full">
        <div className="col-span-2 sm:col-span-1 w-full carRenting rounded-[10px] min-h-[208px]">
          <div className="cursor-pointer w-full h-full overlay2 flex justify-center items-end pb-[40px]">
            <span>Rent a car</span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 w-full leaseACar rounded-[10px] min-h-[208px]">
          <div className="cursor-pointer w-full h-full overlay2 flex justify-center items-end pb-[40px]">
            <span>Lease a car</span>
          </div>
        </div>
        <div className="col-span-2 w-full applyForFinancing rounded-[10px] min-h-[208px]">
          <div className="cursor-pointer w-full h-full overlay2 flex justify-center items-end pb-[40px]">
            <span>Apply for Financing</span>
          </div>
        </div>
      </div>

      <div className="min-h-[208px] cursor-pointer w-full applyForFinancing rounded-[10px] h-full">
        <div className="w-full h-full overlay2 flex justify-center items-end pb-[40px]">
          <span>Sell a car</span>
        </div>
      </div>
    </div>
  );
};

export default ActionFeatures;
