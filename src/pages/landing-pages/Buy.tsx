import React from "react";
import HeroSection from "./../../components/buy/HeroSection";
import GetInTouch from "./../../components/reusable/GetInTouch";
import EligibilityAndBenefits from "./../../components/reusable/EligibilityAndBenefits";

const Buy: React.FC = () => {
  const text = {
    eligibility: {
      title: "Eligibility for Car Loan",
      items: [
        "Must be a salary earner/ entrepreneur",
        "Valid BVN with 6 months bank statement",
        "Must not have un-serviced financial obligations ",
        "Good credit score",
      ],
    },
    benefits: {
      title: "Benefits of AltDrive Loan",
      items: [
        "Convenient means of payment",
        "Fit a car of choice into your budget",
        "Own your car",
        "Long financing period",
      ],
    },
  };
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EligibilityAndBenefits text={text} />
      <GetInTouch />
    </div>
  );
};

export default Buy;
