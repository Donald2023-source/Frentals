"use client";
import React from "react";
import { useSelector, UseSelector } from "react-redux";
import { StoreState } from "@/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
const page = () => {
  const { cart } = useSelector((state: StoreState) => state?.frentals);
  console.log(cart);

  return (
    <div className="px-20 py-10">
      <div>
        <div>
          {cart.map((item) => (
            <div key={item?._id}>
              <Image
                width={300}
                height={300}
                src={urlFor(item?.image).url()}
                alt={item?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
