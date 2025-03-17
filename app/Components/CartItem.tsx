"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
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
const CartItem = ({ item }: { item: ProductData }) => {
  const { cart } = useSelector((state: StoreState) => state?.frentals);
  console.log(cart);

  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch(resetCart());
    console.log("cart was reset");
  };

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let price = 0;
    cart.map((item) => (price += item?.price * item?.quantity));
    setTotalAmt(price);
  }, [cart]);

  const [existingProduct, setExisitingProduct] = useState<ProductData | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart.find(
      (product: ProductData) => product._id === item?._id
    );
    if (availableProduct) {
      setExisitingProduct(availableProduct);
    }
  }, [cart, item]);

  const handleMinus = () => {
    if ((existingProduct?.quantity as number) > 1) {
      dispatch(decreaseQuantity(item._id));
      toast.success("Quantity was decreased");
    } else {
      toast.error("Quantity cannot be less than 1");
    }
  };
  return (
    <div className="lg:px-20 px-5 py-2">
      <div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <Image
              width={300}
              height={300}
              src={urlFor(item?.image).url()}
              alt={item?.title}
              className="lg:h-20 lg:w-20 rounded-lg h-12 object-cover w-12"
            />

            <h2 className="md:text-xl font-semibold">{item?.title}</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handleMinus}
                className="md:w-7 md:h-7 w-5 h-5 hover:scale-105 hoverEffect cursor-pointer flex items-center justify-center rounded p-1 bg-green-200"
              >
                -
              </button>
              <h2>{item?.quantity}</h2>
              <button
                onClick={() => {
                  if ((existingProduct?.quantity as number) >= 10) {
                    toast.error("Sorry we can't hire above ten products");
                  } else {
                    dispatch(increaseQuantity(item._id));
                    toast.success("Increased successfully");
                  }
                  
                }}
                className="md:w-7 md:h-7 h-5 w-5 hover:scale-105 hoverEffect cursor-pointer flex items-center justify-center rounded p-1 bg-green-200"
              >
                +
              </button>
            </div>
            <FormatedPrice className="md:text-base text-xs" amount={item?.price} />

            <FormatedPrice
              className="md:text-base text-sm"
              amount={item?.price * item?.quantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
