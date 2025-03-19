import React from "react";
import img from "@/assets/SignImg.jpeg";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full max-h-screen h-full">
      <div className="h-screen relative w-full">
        <Image className="w-full object-cover h-full" src={img} alt="SignImg" />

        <div className="bg-black/70 h-full w-full absolute inset-0" />

        <div className="absolute top-0 bottom-0 mx-1 my-auto h-fit left-0 right-0 flex flex-col items-center justify-center">
          <div className="bg-white md:p-10 p-6 h-full rounded-2xl">
            <div className="flex flex-col gap-7">
              <h2 className="text-lg font-bold w-[60%] flex items-center text-center justify-center mx-auto">
              Hi, Need an Equipment on Rent? Start Today!
              </h2>

              <form className="flex flex-col gap-7" action="">
                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Name</legend>
                    <input className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none" type="text" placeholder="James Audu" />
                </fieldset>

                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Email</legend>
                    <input className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none" type="text" placeholder="jamesaudu@gmail.com" />
                </fieldset>

                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Phone Number</legend>
                    <input className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none" type="tel" placeholder="08123000238" />
                </fieldset>

                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Password</legend>
                    <input className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none" type="password" placeholder="password" />
                </fieldset>

                <button className="py-2 my-4 px-10 bg-[#3E803E] text-white rounded-lg cursor-pointer hover:scale-105 hoverEffect">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
