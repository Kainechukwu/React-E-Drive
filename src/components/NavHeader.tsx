import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom"; // Import Link from React Router

const NavHeader: React.FC = () => {
  const links = [
    {
      name: "Buy a Car",
      path: "/buy",
    },
    {
      name: "Rent a Car",
      path: "/rent",
    },
    {
      name: "Lease a Car",
      path: "/lease",
    },
  ];
  return (
    <div className="w-full border-b border-[#DCDFEA">
      <div className="container header flex items-center justify-between">
        <div className="flex">
          {" "}
          <Logo path={"/"} />
          <div className="ml-[40px] flex gap-[32px] font-medium text-sm text-[#4A5578]">
            {links.map((link) => (
              <span className="flex items-center" key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link to="/login">
            <button className=" py-[10px] px-[18px] font-semibold text-[#475467] text-base">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className=" py-[10px] px-[18px] font-semibold bg-[#FF6600] text-white rounded-lg text-base">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
