import React from "react";
import hero from "@/assets/hero.jpeg";
import Image from "next/image";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-screen w-full">
      <div className="h-3/4">
        <Image className="w-full max-h-full object-cover" src={hero} alt="hero Image" />
      </div>
      <Navbar  />
    </div>
  );
};

export default Hero;
