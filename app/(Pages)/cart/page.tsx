"use client";
import CartItem from "@/app/Components/CartItem";
import React from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { ProductData, StoreState } from "@/types";
import Button from "@/app/Components/Button";
import { resetCart } from "@/redux/cartSlice";
import ProductCard from "@/app/Components/ProductCard";
import { ShoppingCart } from "lucide-react";

interface Props {
  cart: ProductData[];
  item: ProductData;
}
const page = () => {
  const { cart } = useSelector((state: StoreState) => state?.frentals);
  console.log(cart);

  

  const handleCheckout = async() => {
    try {
      const response = await fetch("/api/checkout", {
        method: 'POST',
        // body: JSON.stringify(cart, user?.email)
      });
    } catch(error) {
      console.log("Error", error);
    }
  }

  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex px-20 py-1  justify-between font-semibold items-center">
        <h2 className="py-2 text-sm rounded-lg  px-6">Image</h2>
        <h2 className="py-2 text-sm rounded-lg  px-6">Title</h2>
        <h2 className="py-2 text-sm rounded-lg  px-6">Quantity</h2>
        <h2 className="py-2 text-sm rounded-lg  px-6">Price</h2>
        <h2 className="py-2 text-sm rounded-lg  px-6">Total Price</h2>
      </div>
      <div className="flex flex-col md:gap-2 gap-8 justify-items-stretch justify-center w-full">
        {cart.length > 0 ? (
          cart.map((item: ProductData) => (
            <CartItem key={item._id} item={item} />
          ))
        ) : (
          <div>
            <div>
            <ShoppingCart className="" />
            </div>
          </div>
        )}
      </div>

      <div
        onClick={() => dispatch(resetCart())}
        className="w-full flex items-end justify-end mx-auto pr-20"
      >
        {cart.length > 0 && (
          <button className="py-2 bg-red-400 hover:scale-105 hover:bg-red-600 text-gray-300 hoverEffect cursor-pointer rounded-lg flex items-left justify-end px-10 border rouuded-lg">
            Reset Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default page;
