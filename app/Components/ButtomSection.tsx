import React from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import secImg from "@/assets/secimg.jpeg";
import Image from "next/image";
const ButtomSection = () => {
  return (
    <div>
      <Testimonial />
      <div className="w-full relative h-[500px]">
        <div className="w-full rounded-xl h-[500px]">
          <Image className="w-full rounded-lg h-full" src={secImg} alt="img" />
        </div>
        <div className="bg-[#3e803e4f] rounded-xl w-full h-full absolute top-0" />

        <div className="absolute top-1/4 px-3 mt-5 text-white left-0 flex flex-col items-center justify-center mx-auto w-full gap-4">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="lg:text-3xl text-xl text-center font-bold text-white">
              Get in Touch With Us - Your Agricultural Solutions Partner
            </h2>
            <p className="lg:w-[65%] lg:text- md:text-base text-sm px-4 text-center leading-9">
              Thank you for considering us fot your Agricultural needs . We are
              eager to assist you with our expertise and services . Feel free to
              reach out.
            </p>
          </div>
          <button className="py-2 px-5 rounded-lg cursor-pointer hover:scale-105 hoverEffect bg-[#3E803E] border">
            Contact Us
          </button>
        </div>
        <span className="mt-1">
          <Footer />
        </span>
      </div>
    </div>
  );
};

export default ButtomSection;
