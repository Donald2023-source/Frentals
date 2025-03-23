"use client";
import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";

interface Props {
  title: string;
  text: string;
  Svg: any;
}

const Barner = ({ title, text, Svg }: Props) => {
  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  console.log(userInfo)

  return (
    <div className="w-full flex flex-col justify-end">
      <div className="w-full md:px-10 px-7 py-3 md:py-5 bg-[#3E803E] text-white rounded-lg">
        <div className="flex items-center justify-between w-full relative">
          <div className="md:w-[45%] w-[70%] absolute flex flex-col gap-1 md:gap-4">
            <h2 className="md:text-4xl md:leading-12 text-lg font-bold">
              Hi {userInfo?.name?.slice(0, 5)}, {title}
            </h2>
            <p className="md:leading-8 leading-[23px] w-full md:text-sm text-xs">{text}</p>
          </div>
          <div className="flex justify-end relative left-7 items-end w-full">{Svg}</div>
        </div>
      </div>
    </div>
  );
};

export default Barner;
