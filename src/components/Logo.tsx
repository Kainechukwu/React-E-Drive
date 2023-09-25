import React from "react";
import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";
interface LogoProps {
  path: string;
}

const Logo: React.FC<LogoProps> = ({ path }) => {
  return (
    <Link to={path}>
      <div>
        {" "}
        <div className="flex flex-shrink-0 items-center">
          {/* <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        /> */}
          <AiFillCar className="text-[#FF6600] h-[35px] w-[35px]" />
        </div>
      </div>
    </Link>
  );
};

// Set default prop values using defaultProps
Logo.defaultProps = {
  path: "/", // Provide your default value here
};

export default Logo;
