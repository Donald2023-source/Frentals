import React from "react";

import Image from "next/image";
import Navbar from "./Navbar";
import symbol from '@/assets/Symbol.png'
const Hero = ({
  text,
  subText,
  imageUrl,
}: {
  text: string;
  subText: string;
  imageUrl: string;
}) => {
  return (
    <div className="h-screen w-full ">
      <div className="h-[70%] relative ">
        <Image
          className="w-full h-full object-cover rounded-b-xl"
          src={imageUrl}
          alt="hero Image"
        />
        <div className="absolute top-0 w-full bg-black/40 h-full z-10" />

        <div className="lg:w-[60%]  absolute flex flex-col text-white py-3 gap-8 mt-4 z-10 lg:px-20 lg:items-start items-center h-full justify-center lg:text-left text-center top-0">
          <h2 className="lg:text-4xl leading-12 text-2xl">
            {text}
          </h2>
          <p className="text-md">{subText}</p>
          <button className="py-2 px-5 flex items-center gap-1 hover:scale-105 transition-all cursor-pointer rounded-lg bg-[#3E803E] text-white">
            Get started
            <Image  src={symbol} alt="img" />
          </button>
        </div>
      </div>
      <span className="absolute top-0 w-full">
        <Navbar />
      </span>
    </div>
  );
};

export default Hero;
