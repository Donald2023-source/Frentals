"use client";
import CartItem from "@/app/Components/CartItem";
import React, { useState } from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { ProductData, StoreState } from "@/types";
import Button from "@/app/Components/Button";
import { resetCart } from "@/redux/cartSlice";
import ProductCard from "@/app/Components/ProductCard";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import FormatedPrice from "@/app/Components/FormatedPrice";
import { useEffect } from "react";
import CheckoutButton from "@/app/Components/CheckoutButton";

interface Props {
  cart: ProductData[];
  item: ProductData;
}
const page = () => {
  const { cart, userInfo } = useSelector(
    (state: StoreState) => state?.frentals
  );
  // console.log(cart);
  console.log(!userInfo);

  const [total, setTotal] = useState(0);

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: userInfo?.email,
      }),
    });
    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
  };
  useEffect(() => {
    if (cart.length > 0) {
      let price = 0;
      cart.map((item) => (price += item?.price * item?.quantity));
      setTotal(price);
      // console.log(price);
    }
  }, [cart]);

  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={
          cart.length > 0
            ? "flex md:px-20 py-1  justify-between md:font-semibold items-center"
            : "hidden"
        }
      >
        <h2 className="p-3 font-semibold text-2xl w-full border-b">Cart</h2>
        {/* <h2 className="py-2 text-sm rounded-lg px-3 md:px-6">Image</h2>
        <h2 className="py-2 text-sm rounded-lg px-3 md:px-6">Title</h2>
        <h2 className="py-2 text-sm rounded-lg px-3 md:px-6">Price</h2>
        <h2 className="py-2 text-sm rounded-lg px-3 md:px-6">Total Price</h2> */}
      </div>
      <div className="flex flex-col md:gap-2 gap-6 justify-items-stretch justify-center w-full">
        {cart.length > 0 ? (
          cart.map((item: ProductData) => (
            <CartItem key={item._id} item={item} />
          ))
        ) : (
          // Desktop View
          <div className="md:px-1 px-3">
            <motion.div
              initial={{ x: -100, opacity: 0.6 }}
              animate={{ x: 100, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
              }}
              className="hidden md:block border my-5 md:p-9 p-4 w-fit mx-auto rounded-lg shadow-lg"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <ShoppingCart size={53} />
                <div className="flex flex-col items-center gap-6">
                  <p className="md:text-base text-sm text-center">
                    Your cart is empty, click the button below to continue
                    shopping
                  </p>
                  <Link
                    href={"/shop"}
                    className="border py-2 px-10 rounded-lg bg-[#3E803E] text-gray-100 cursor-pointer hover:scale-105 hoverEffect"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Mobile View */}
            <div className="block md:hidden border my-5 md:p-9 p-3 w-fit mx-auto rounded-lg shadow-lg">
              <div className="flex flex-col items-center justify-center gap-4">
                <ShoppingCart size={53} />
                <div className="flex flex-col items-center gap-6">
                  <p className="md:text-base text-sm text-center">
                    Your cart is empty, click the button below to continue
                    shopping
                  </p>
                  <Link
                    href={"/services"}
                    className="border py-2 px-10 rounded-lg bg-[#3E803E] text-gray-100 cursor-pointer hover:scale-105 hoverEffect"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex items-end justify-end mx-auto md:pr-20 pr-4">
        {cart.length > 0 && (
          <div>
            <div className="py-3">
              <h2 className="text-lg border-b py-3">
                Total : <FormatedPrice amount={total} />
              </h2>
            </div>
            <button
              onClick={() => dispatch(resetCart())}
              className="py-2  bg-red-400 hover:scale-105 hover:bg-red-600 text-white hoverEffect cursor-pointer rounded-lg flex items-left justify-end px-10 border rouuded-lg"
            >
              Reset Cart
            </button>
          </div>
        )}
      </div>
      <CheckoutButton
        text="Checkout"
        onClick={handleCheckout}
        disabled={!userInfo}
      />

      {
        userInfo ? (
          ''
        ) : (
          <p className="text-center py-4">
        You have not signed In. <Link className="text-green-900 font-bold" href={"/signup"}>Sign-up</Link>
      </p>  
        )
      }
    </div>
  );
};

export default page;
