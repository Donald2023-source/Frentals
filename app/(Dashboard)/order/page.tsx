"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const Page = () => {
  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  const email = userInfo?.email;

  const fetchOrders = async (email: string) => {
    try {
      const ordersRef = collection(db, "order", email, "orders");
      const querySnapshot = await getDocs(ordersRef);

      const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(orders);
      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (email) {
      fetchOrders("the@gmail.xom");
    }
  }, [email]); // only run when email is available

  return (
    <div className="py-8">
      <motion.h2
        initial={{ x: 0 }}
        animate={{ x: 50 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="text-center font-semibold text-3xl"
      >
        Coming Soon!!!
      </motion.h2>
    </div>
  );
};

export default Page;
