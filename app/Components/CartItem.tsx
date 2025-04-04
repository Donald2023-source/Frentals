"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData, StoreState } from "@/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  decreaseQuantity,
  increaseQuantity,
  resetCart,
} from "@/redux/cartSlice";
import { toast } from "sonner";
import FormatedPrice from "./FormatedPrice";
import PriceSelection from "./PriceSelection";

const CartItem = ({ item }: { item: ProductData }) => {
  const { cart } = useSelector((state: StoreState) => state?.frentals);
  const dispatch = useDispatch();

  const [selectedPrice, setSelectedPrice] = useState<number>(
    item?.price * item?.quantity
  ); 

  const handlePriceChange = (price: number) => {
    setSelectedPrice(price);
  };

  const handleQuantity = (action: "increase" | "decrease") => {
    if (action === "decrease" && item.quantity > 1) {
      dispatch(decreaseQuantity(item._id));
    } else if (action === "decrease" && item.quantity <= 1) {
      toast.error("Quantity cannot be less than 1");
    } else if (action === "increase" && item.quantity < 10) {
      dispatch(increaseQuantity(item._id));
    } else if (action === "increase" && item.quantity >= 10) {
      toast.error("Maximum quantity of 10 reached");
    }
  };

  return (
    <div className="lg:px-20 py-2">
      <div className="w-full">
        <div className="flex items-center bg-accent p-4 rounded-lg justify-between w-full">
          <Image
            width={300}
            height={300}
            src={urlFor(item?.image).url()}
            alt={item?.title}
            className="lg:h-20 lg:w-20 rounded-lg h-12 object-cover w-12"
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="md:text-xl text-center md:w-32 font-semibold">
              {item?.title}
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantity("decrease")}
                className="md:w-7 md:h-7 w-5 h-5 hover:scale-105 hoverEffect cursor-pointer flex items-center justify-center rounded p-1 bg-green-200"
                disabled={item.quantity <= 1} 
              >
                -
              </button>
              <h2>{item?.quantity}</h2>
              <button
                onClick={() => handleQuantity("increase")}
                className="md:w-7 md:h-7 h-5 w-5 hover:scale-105 hoverEffect cursor-pointer flex items-center justify-center rounded p-1 bg-green-200"
                disabled={item.quantity >= 10}
              >
                +
              </button>
            </div>
          </div>

          <PriceSelection item={item} onPriceChange={handlePriceChange} />

          <FormatedPrice
            className="md:text-base text-sm"
            amount={selectedPrice * item?.quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
