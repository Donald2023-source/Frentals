"use client";
import React, { useState } from "react";
import heroImg from "@/assets/hero.jpeg";
import Image from "next/image";
import symbol from "@/assets/Symbol.png";
import Navbar from "./Navbar";
import Myselect from "./Selectcmp";


const Hero2 = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="h-[90vh] relative">
      <div className="h-full relative">
        <Image
          className="w-full h-full object-cover"
          src={heroImg}
          alt="hero"
          priority
        />
        <div className="absolute top-0 w-full h-full bg-black/50" />

        <div className="absolute top-0 left-0 right-0 w-full">
          <Navbar />
        </div>

        <div className="absolute lg:mx-20 px-4 h-[80%] lg:w-[90%] top-20 flex items-center justify-between">
          <div className="text-white md:w-[50%] flex flex-col md:items-start items-center gap-4">
            <h2 className="text-white lg:text-4xl text-2xl md:text-left text-center tracking-wide leading-relaxed lg:w-full">
              Connecting Farmers To Equipment, Land, And Labor for a Sustainable
              Future
            </h2>
            <p className="">Your Farming Success Starts Here....</p>
            <button className="flex items-center space-x-1 py-2 px-6 rounded-lg bg-[#3E803E] hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
              Get started
              <span>
                <Image src={symbol} alt="img" />
              </span>
            </button>
          </div>

          <Myselect className="md:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
