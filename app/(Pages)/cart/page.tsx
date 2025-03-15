'use client'
import CartItem from "@/app/Components/CartItem";
import React from "react";
import { useSelector, UseSelector } from "react-redux";
import { ProductData, StoreState } from "@/types";


interface Props {
  cart: ProductData[],
  item: ProductData
}
const page = () => {
  const { cart } = useSelector((state: StoreState) => state?.frentals);
  console.log(cart);

  return (
    <div className="flex flex-col md:gap-2 gap-8 justify-items-stretch justify-center w-full">
      {cart.map((item: ProductData) => (
        <CartItem item={item} />
      ))}
    </div>
  );
};

export default page;
