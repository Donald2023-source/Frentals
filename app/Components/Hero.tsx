import React from "react";
import hero from "@/assets/hero.jpeg";
import Image from "next/image";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-screen w-full ">
    <div className="h-[60%] relative ">
      <Image className="w-full h-full object-cover" src={hero} alt="hero Image" />
      <div className="absolute top-0 w-full bg-black/40 h-full z-10" />

      <div className="lg:w-[50%] w-[80%] absolute flex flex-col text-white py-3 gap-4 z-10 px-5 items-start h-full justify-center top-0">
        <h2 className="lg:text-4xl leading-tight text-xl">Connecting Farmers to Equipment, Land, and Labor for a Sustainable Future</h2>
        <p className=" sm:text-sm">Your Farming Success Starts Here....</p>
        <button className="py-2 px-5 hover:scale-105 transition-all cursor-pointer rounded-lg bg-[#3E803E] text-white">Get started</button>
      </div>
    </div>
      <span className="absolute top-0 w-full"><Navbar  /></span>
    </div>
  );
};

export default Hero;
