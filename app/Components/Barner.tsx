"use client";
import React from "react";
import CyclistAnimation from "./Bike";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
interface Props {
  title: string;
  text: string;
  Svg: any;
}
const Barner = ({ title, text, Svg }: Props) => {
  const { userInfo } = useSelector((state: StoreState) => state.frentals);

  return (
    <div className="w-full md:px-10 px-7 md:py-0 py-3 rounded-lg bg-[#3E803E]">
      <div className="flex items-center justify-between">
        <div className="md:w-[40%] w-full text-white flex flex-col gap-1 md:gap-4">
          <h2 className="md:text-4xl md:leading-12 text-lg font-bold ">
            Hi {userInfo?.name.slice(0, 5)}, {title}
          </h2>
          <p className="md:leading-8 md:block hidden md:text-sm text-xs">
            {text}
          </p>
        </div>
        <h2>{Svg}</h2>
      </div>
    </div>
  );
};

export default Barner;
