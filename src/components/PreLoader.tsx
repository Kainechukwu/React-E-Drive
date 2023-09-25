import { AiOutlineLoading } from "react-icons/ai";
import React from "react";
export default function PreLoader() {
  return (
    <div
      // data-testid="pre-loader"
      className="flex w-full h-full items-center justify-center py-48"
    >
      <span>
        <AiOutlineLoading className="text-[60px] animate-spin text-danger-500" />
      </span>
    </div>
  );
}
