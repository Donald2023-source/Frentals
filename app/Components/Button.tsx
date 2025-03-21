"use client";
import { addToCart } from "@/redux/cartSlice";
import { ProductData } from "@/types";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
  item?: ProductData;
}
const Button = ({ text, item, className }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.title.substring(0, 15)} was Reserved`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "py-2 px-10 border bg-[#3E803E] hover:scale-105 hover:bg-[rgb(62,130,20)] cursor-pointer hoverEffect rounded-lg text-gray-200 w-full"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
