import React from "react";
import loaderSvg from "@/assets/Dual Ring@1x-1.0s-200px-200px.svg";
import Image from "next/image";
const Loader = () => {
  return (
    <div className="absolute bg-black/50 h-full w-full top-0 overflow-hidden left-0 right-0 flex items-center justify-center">
      <Image className="" src={loaderSvg} alt="loader" />
    </div>
  );
};

export default Loader;
