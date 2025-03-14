"use client";
import React from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { StoreState } from "@/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { resetCart } from "@/redux/cartSlice";
const page = () => {
  const { cart } = useSelector((state: StoreState) => state?.frentals);
  console.log(cart);

  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch(resetCart());
    console.log("cart was reset");
  };

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
        <button
          className="py-3 rounded-xl px-10 text-gray-200 bg-red-600 cursor-pointer"
          onClick={handleResetCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default page;
