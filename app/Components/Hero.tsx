import React from "react";
import heroImg from "@/assets/hero.jpeg";
import Image from "next/image";
import symbol from '@/assets/Symbol.png'
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-[80vh]">
      <div className="h-full relative">
          <Image className="w-full h-full object-cover" src={heroImg} alt="hero" />
          <div className="absolute top-0 w-full h-full bg-black/50"/>
      
      <div className="absolute top-0 left-0 right-0 w-full">
        <Navbar />
      </div>

      <div className="absolute top-1/4 mx-20 text-white w-[90%] border-2 border-white flex flex-col gap-4">
        <h2 className="text-white text-4xl leading-relaxed w-[40%]">Connecting Farmers To  Equipment, Land, And Labor for a Sustainable  Future</h2>
        <p className="">Your Farming Success Starts Here....</p>
        <button className="flex items-center space-x-1 py-2 px-6 rounded-lg bg-primary">
          Get started
          <span><Image src={symbol} alt="img" /></span>
        </button>
      </div>
      </div>
    </div>
  )
};

export default Hero;
