import React from "react";
import heroImg from "@/assets/hero.jpeg";
import Image from "next/image";
import symbol from "@/assets/Symbol.png";
import Navbar from "./Navbar";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="md:h-[80vh] h-[65vh]">
      <div className="h-full relative">
        <Image
          priority
          className="w-full h-full object-cover"
          src={heroImg}
          alt="hero"
        />
        <div className="absolute top-0 w-full h-full bg-black/50" />

        <div className="absolute top-0 left-0 right-0 w-full">
          <Navbar />
        </div>

        <div className="absolute top-1/4 lg:mx-20 px-3 text-white lg:w-[90%] flex flex-col lg:items-start items-center gap-4">
          <h2 className="text-white lg:text-4xl text-2xl lg:text-left text-center tracking-wide leading-relaxed lg:w-[48%]">
            Connecting Farmers To Equipment, Land, And Labor for a Sustainable
            Future
          </h2>
          <p className="">Your Farming Success Starts Here....</p>
          <Link href="/signup" className="flex items-center space-x-1 py-2 px-6 rounded-lg bg-[#3E803E] hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
            Get started
            <span>
              <Image src={symbol} alt="img" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
