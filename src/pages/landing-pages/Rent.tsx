import React from "react";
import HeroSection from "./../../components/rent/HeroSection";
import GetInTouch from "./../../components/reusable/GetInTouch";
import EligibilityAndBenefits from "./../../components/reusable/EligibilityAndBenefits";

const Rent: React.FC = () => {
  const text = {
    eligibility: {
      title: "Eligibility for Car Rent",
      items: [
        "Must be a salary earner/ entrepreneur",
        "Valid BVN with 6 months bank statement",
        "Must not have un-serviced financial obligations ",
        "Good credit score",
      ],
    },
    benefits: {
      title: "Benefits of AltDrive Renting",
      items: [
        "No down payments",
        "Enjoy convenience and comfort",
        "No cost of maintenance",
        "Convenient for visitors/international travellers.",
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

export default Rent;
