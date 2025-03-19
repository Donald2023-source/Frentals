import React from "react";
import img from "@/assets/SignImg.jpeg";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full max-h-screen h-full">
      <div className="h-screen relative w-full">
        <Image className="w-full object-cover h-full" src={img} alt="SignImg" />

        <div className="bg-black/70 h-full w-full absolute inset-0" />

        <div className="absolute top-1/3 left-0 right-0 flex items-center justify-center">
          <div className="bg-white p-10 h-full rounded-2xl">
            <div className="flex flex-col gap-7">
              <h2 className="text-lg font-bold w-[60%] flex items-center text-center justify-center mx-auto">
                Need an Equipment on Rent? Start Today!
              </h2>

              <form action="">
                <fieldset>
                    <input className="w" type="text" placeholder="James Audu" />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
