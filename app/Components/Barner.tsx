'use client'
import React from "react";
import CyclistAnimation from "./Bike";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
const Barner = () => {

  const { userInfo } = useSelector((state: StoreState) => state.frentals)
  return (
    <div className="w-full md:px-10 px-7 md:py-10 rounded-lg bg-[#3E803E]">
      <div className="flex items-center justify-between">
        <div className="md:w-[30%] text-white flex flex-col gap-1 md:gap-4">
          <h2 className="md:text-4xl md:leading-12 text-xl font-bold ">
           Hi { userInfo.name.slice(0, 5) }, 
           <br />
           Welcome To Frentals
          </h2>
          <p className="md:leading-8  leading-7 md:text-sm text-xs">
            Best farm equipment rental services. We give the best of farm
            rentals, let's work!
          </p>
        </div>
        <CyclistAnimation />
        
      </div>
    </div>
  );
};

export default Barner;
