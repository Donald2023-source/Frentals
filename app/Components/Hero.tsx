import React from "react";
import heroImg from "@/assets/hero.jpeg";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-full">
          <Image className="w-full h-full object-cover" src={heroImg} alt="hero" />
      </div>

    </div>
  )
};

export default Hero;
