import React from "react";
import HeroSection from "./../../components/lease/HeroSection";
import GetInTouch from "./../../components/reusable/GetInTouch";
import EligibilityAndBenefits from "./../../components/reusable/EligibilityAndBenefits";
import Recommendation from "./../../components/reusable/Recommendation";

const Lease: React.FC = () => {
  const text = {
    eligibility: {
      title: "Eligibility for Car Lease",
      items: [
        "Must be a salary earner/ entrepreneur",
        "Valid BVN with 6 months bank statement",
        "Must not have un-serviced financial obligations elsewhere",
        "Good credit score",
      ],
    },
    benefits: {
      title: "Benefits of AltDrive Leasing",
      items: [
        "Early liquidation of facility at no extra charge",
        "Reduced overall payment for early liquidation",
        "Flexible tenure and repayment options",
        "Insurance renewal is paid by Altdrive",
        "Zero worries on car depreciation",
      ],
    },
  };
  const recommendationText = {
    title: "Available cars for Lease",
    subTitle: "Check out these recommendations based on our bestsellers",
  };
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Recommendation text={recommendationText} />

      <EligibilityAndBenefits text={text} />

      <GetInTouch />
    </div>
  );
};

export default Lease;
