import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick: any;
  disabled?: boolean;
  className?: string;
  text: string;
}
const CheckoutButton = ({ onClick, disabled, text, className }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "rounded-md bg-[#3E803E] md:w-[30%] cursor-pointer py-4 hoverEffect hover:scale-105 mx-auto flex items-center justify-center text-white px-10",
        "disabled:bg-gray-300 disabled:cursor-not-allowed disabled:scale-100",
        className
      )}
    >
      {text}
    </button>
  );
};

export default CheckoutButton;
