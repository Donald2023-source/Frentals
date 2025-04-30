"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { addUser } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

// Define the structure of an order item
interface OrderItem {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  description?: Array<{ children: Array<{ text: string }> }>;
  category?: Array<{ title: string; _id: string }>;
  slug?: { current: string };
  image?: string | { _type: string; asset: { _ref: string } };
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
  _type?: string;
}

interface Order {
  id: string;
  items: OrderItem[];
  amount: number;
}

const Page = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  const [orders, setOrders] = useState<Order[]>([]);
  const [data, setData] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Handle authentication state
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

  // Redirect if no userInfo
  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  // Flatten items when orders change
  useEffect(() => {
    if (orders.length > 0) {
      const items = orders.flatMap((order) => order.items || []);
      console.log("Flattened items:", items);
      setData(items);
    }
  }, [orders]);

  // Log data for debugging
  useEffect(() => {
    if (data.length > 0) {
      console.log("Data:", data);
    }
  }, [data]);

  const fetchOrders = async (email: string) => {
    try {
      console.log("Querying Firestore path:", `order/${email}/orders`);
      const ordersRef = collection(db, "order", email, "orders");
      const querySnapshot = await getDocs(ordersRef);

      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Order[];
      console.log("Fetched orders:", ordersData);
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch orders: " + (error as Error).message);
    }
  };

  return (
    <div className="py-8 max-w-4xl mx-auto">
      <div>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: 50 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="text-center font-semibold text-3xl mb-6"
        >
          Your Orders
        </motion.h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <div className="text-red-500 bg-red-100 p-4 rounded text-center">
            {error}
          </div>
        ) : data.length > 0 ? (
          <ul className="space-y-4">
            {data.map((item, index) => (
              <li
                key={item._id || index}
                className="p-4 border rounded shadow-sm bg-white"
              >
                <div className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <span className="font-semibold">Products:</span>{" "}
                    {item.title || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold">ID:</span>{" "}
                    {item._id || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {item.quantity || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold">Price:</span> $
                    {item.price ? item.price.toFixed(2) : "N/A"}
                  </div>
                </div>
               
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
