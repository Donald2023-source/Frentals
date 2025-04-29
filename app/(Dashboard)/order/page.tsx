"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { addUser } from "@/redux/cartSlice"; // Adjust based on your Redux setup
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("userInfo:", userInfo);

    const unsubscribe = onAuthStateChanged(
      auth,
      (user: User | null) => {
        setLoading(false);
        if (user) {
          console.log("Firebase current user:", user);
          const firebaseEmail = user.email;

          // Sync Redux userInfo with Firebase user
          if (firebaseEmail && firebaseEmail !== userInfo?.email) {
            console.log("Syncing Redux with Firebase email:", firebaseEmail);
            dispatch(addUser({ email: firebaseEmail }));
          }

          // Fetch orders if email is available
          if (firebaseEmail) {
            fetchOrders(firebaseEmail);
          } else {
            setError("No email found for authenticated user");
          }
        } else {
          console.log("No Firebase authenticated user");
          setError("Please sign in to view orders");
          // Optionally clear Redux userInfo if user is not authenticated
          if (userInfo?.email) {
            console.log("Clearing stale Redux userInfo");
            dispatch(addUser(null));
          }
        }
      },
      (authError) => {
        console.error("Auth state error:", authError);
        setError("Authentication error occurred");
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [dispatch, userInfo?.email]);

  const router = useRouter();
  if (!userInfo) {
    router.push("/");
  }

  const fetchOrders = async (email: string) => {
    try {
      console.log("Querying Firestore path:", `order/${email}/orders`);
      const ordersRef = collection(db, "order", email, "orders");
      const querySnapshot = await getDocs(ordersRef);

      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched orders:", ordersData);
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch orders: " + (error as Error).message);
    }
  };

  

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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length > 0 ? (
        <ul>
          {
            orders.map((order) => (
              <div>{order}</div>
            ))
          }
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Page;
