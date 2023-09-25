import React from "react";
import { Outlet } from "react-router-dom";
const BaseLayout = () => {
  return (
    <div className="flex flex-col min-w-[100vw] min-h-[100vh]">
      {/* <div>BaseLayout</div> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
