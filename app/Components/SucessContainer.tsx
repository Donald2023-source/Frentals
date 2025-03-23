"use client";
import { resetCart } from "@/redux/cartSlice";
import { StoreState } from "@/types";
import { CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Loader from "./Loader";

interface Props {
  id: string | null;
}

const SucessContainer = ({ id }: Props) => {
  console.log(id);

  const { cart, userInfo } = useSelector((state: StoreState) => state.frentals);

  const dispatch = useDispatch();

  const [totalAmt, setTotalAmt] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item?.price * item?.quantity;
      return price;
    });

    setTotalAmt(price);
  }, []);

  const handleSaveOrder = async () => {
    try {
      const response = await fetch("/api/saveorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo?.token}`,
        },
        body: JSON.stringify({
          cart,
          email: userInfo?.email,
          id,
          totalAmt,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data?.success) {
        setLoading(false);
        dispatch(resetCart());
        toast.success("Order saved successfully");
      }
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo && cart.length) {
      handleSaveOrder();
    }
  }),
    [];

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full">
          <div className="h-full mx-auto text-center flex flex-col items-center justify-center gap-3 md:w-[40%]">
            <CheckCircle className="text-green-400 my-6" size={80} />
            <p>Your action has been completed successfully. </p>
            <p className="md:text-base text-sm px-4 font-medium leading-8">
              Thank you for your submission. We&apos;ve received your
              information and will process it shortly. You should receive a
              confirmation email within the next few minutes.
            </p>
            <button className="py-3 px-10 rounded border text-accent hover:scale-105 hoverEffect cursor-pointer bg-[#3E803E]">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SucessContainer;
