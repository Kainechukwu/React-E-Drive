import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <div className="pt-[29px]">
      <div className="container">
        <div className="bg-[#F9FAFB] rounded-[16px] mb-[96px] px-4 py-8 text-center">
          <img
            className="mb-[32px] mx-auto"
            src="/src/assets/images/AvatarGroupGetInTouch.png"
            alt=""
          />
          <h2 className="font-semibold text-[20px] text-[#101828] mb-2">
            Still have questions?
          </h2>
          <p className="font-normal text-[18px] text-[#475467] mb-8">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="brandBtn rounded-lg">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
