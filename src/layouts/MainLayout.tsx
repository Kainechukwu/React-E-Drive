import React from "react";
import NavHeader from "../components/NavHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full">
      <div className="sticky top-0 bg-white">
        <NavHeader />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="relative bottom-0 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
