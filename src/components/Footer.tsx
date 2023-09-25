import React from "react";
import Logo from "./Logo";
import DownloadAppStore from "./reusable/DownloadAppStore";
import DownloadGooglePlay from "./reusable/DownloadGooglePlay";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  const company = {
    title: "Company",
    links: [
      {
        name: "About us",
        path: "/",
      },
      {
        name: "Contact",
        path: "/",
      },
      {
        name: "Terms of Use",
        path: "/",
      },
    ],
  };
  const sterling = {
    title: "Sterling",
    links: [
      {
        name: "Buy",
        path: "buy",
      },
      {
        name: "How it works",
        path: "/",
      },
      {
        name: "Review",
        path: "/",
      },
      {
        name: "Site map",
        path: "/",
      },
    ],
  };

  const services = {
    title: "Services",
    links: [
      {
        name: "CarAudit™",
        path: "/",
      },
      {
        name: "Delivery",
        path: "/",
      },
      {
        name: "Financing",
        path: "/",
      },
      {
        name: "Warranty",
        path: "/",
      },
    ],
  };
  return (
    <div className="bg-[#F5F7FB] border border-t-[#EAECF0]">
      <div className="container flex flex-col md:flex-row justify-between pt-[85px] pb-[79px]">
        <div>
          <Logo path="/" />
          <p className="hidden md:block font-normal text-sm leading-[24px] text-[#63749B]">
            Sterling 2022 • All rights reserved
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:max-w-[60%]">
          <div className="mb-6 sm:mb-0 text-[#485885] flex flex-col">
            <h3 className="font-bold text-[17px] mb-[24px]">
              {sterling.title}
            </h3>
            {sterling.links.map((link) => (
              <Link
                className="font-normal text-base mb-[8px]"
                key={link.name}
                to={link.path}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="mb-6 sm:mb-0 text-[#485885] flex flex-col">
            <h3 className="font-bold text-[17px] mb-[24px]">
              {services.title}
            </h3>
            {services.links.map((link) => (
              <Link
                className="font-normal text-base mb-[8px]"
                key={link.name}
                to={link.path}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="mb-6 sm:mb-0 text-[#485885] flex flex-col">
            <h3 className="font-bold text-[17px] mb-[24px]">{company.title}</h3>
            {company.links.map((link) => (
              <Link
                className="font-normal text-base mb-[8px]"
                key={link.name}
                to={link.path}
              >
                <span>{link.name}</span>
              </Link>
            ))}{" "}
          </div>

          <div className="mb-6 sm:mb-0 flex flex-col items-start justify-start">
            <h3 className="mb-6 md:mb-4 font-semibold text-base text-[#404968]">
              Get the App
            </h3>

            <DownloadAppStore />
            <span className="mb-[22px]"></span>

            <DownloadGooglePlay />
          </div>
        </div>
        <p className="block md:hidden mt-4 font-normal text-sm leading-[24px] text-[#63749B]">
          Sterling 2022 • All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
