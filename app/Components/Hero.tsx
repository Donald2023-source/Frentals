import React from "react";

import Image from "next/image";
import Navbar from "./Navbar";
const Hero = ({text, subText, imageUrl}: {text:string, subText:string, imageUrl:string}) => {
  return (
    <div className="h-screen w-full ">
    <div className="h-[60%] relative ">
      <Image className="w-full h-full object-cover rounded-b-xl" src={imageUrl} alt="hero Image" />
      <div className="absolute top-0 w-full bg-black/40 h-full z-10" />

      <div className="lg:w-[50%] w-[85%] absolute flex flex-col text-white py-3 gap-5 mt-4 z-10 px-10 items-start h-full justify-center top-0">
        <h2 className="lg:text-4xl leading-7 text-xl">{text}</h2>
        <p className="text-sm">{subText}</p>
        <button className="py-2 px-5 hover:scale-105 transition-all cursor-pointer rounded-lg bg-[#3E803E] text-white">Get started</button>
      </div>
    </div>
      <span className="absolute top-0 w-full"><Navbar  /></span>
    </div>
  );
};

export default Hero;
