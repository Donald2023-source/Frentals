import { addToCart } from "@/redux/cartSlice";
import { ProductData, StoreState } from "@/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
  item?: ProductData;
}

const Button = ({ text, item, className }: Props) => {
  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    if (userInfo) {
      toast.success(`${item?.title.substring(0, 15)} was Reserved`);
    } else {
      toast.success(`Item added to cart, signup to see cart`);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "py-2 px-10 border bg-[#3E803E] hover:scale-105 hover:bg-[rgb(62,130,20)] cursor-pointer hoverEffect rounded-lg text-gray-200 w-full",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
