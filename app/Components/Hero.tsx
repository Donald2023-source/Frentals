import React from "react";
import hero from "@/assets/hero.jpeg";
import Image from "next/image";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-screen w-full ">
      <div className="h-3/4 relative">
        <Image className="w-full max-h-full object-cover" src={hero} alt="hero Image" />
      </div>
      <span className="absolute top-0 w-full"><Navbar  /></span>
      <div className="absolute top-0 w-full bg-black/40 z-10 h-3/4" />
    </div>
  );
};

export default Hero;
