import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-red-400 p-6">
      404 NotFound{" "}
      <button className="border-red-400 bg-red-400 p-2 text-white ml-4 rounded-md">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
