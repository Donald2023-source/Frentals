"use client";
import Container from "@/app/Components/Container";
import Loader from "@/app/Components/Loader";
import { AvatarFallback } from "@/components/ui/avatar";
import { auth, db } from "@/firebase";
import { removeUser } from "@/redux/cartSlice";
import { StoreState } from "@/types";
import { Avatar } from "@radix-ui/react-avatar";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface User {
  name: string;
  password: string;
  email: string;
  phoneNumber: number;
}

const Page = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userInfo } = useSelector((state: StoreState) => state.frentals);

  const fetchData = async () => {
    if (!userInfo?.id) return;

    setLoading(true);
    try {
      const docRef = doc(db, "users", userInfo.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as User);
      } else {
        console.error("No such document exists");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userInfo?.id]);

  const dispatch = useDispatch();
  const router = useRouter();

  if (!userInfo) {
    router.push("/");
  }

  return (
    <Container>
      <div>
        <h2 className="p-3 font-semibold border-b text-xl">Settings</h2>

        {loading ? (
          <Loader />
        ) : userInfo ? (
          <div className="mt-4 flex flex-col gap-5 px-3 md:px-1">
            <Avatar className="h-20 w-20 mx-auto text-2xl">
              <AvatarFallback>{userInfo.name.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <h2 className="text-sm font-semibold mx-auto">{userInfo.name}</h2>

            <div className="flex flex-col gap-2">
              <h2 className="md:text-base text-sm font-semibold">Email</h2>
              <span className="p-3 border rounded">
                {userData?.email || "N/A"}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="md:text-base text-sm font-semibold">
                Phone Number
              </h2>
              <span className="p-3 border rounded">
                {userData?.phoneNumber || "N/A"}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="md:text-base text-sm font-semibold">Password</h2>
              <div className="flex items-center gap-2">
                <input
                  type={isVisible ? "text" : "password"}
                  value={userData?.password || ""}
                  className="p-3 border rounded flex-1"
                  readOnly
                />
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="p-2"
                >
                  {isVisible ? <EyeClosed /> : <Eye />}
                </button>
              </div>
              <button
                onClick={() => {
                  if (userInfo) {
                    dispatch(removeUser());
                    signOut(auth);
                    router.push("/");
                  }
                }}
                className="py-3 px-10 rounded-lg border ml-auto bg-red-500 hover:bg-red-600 hoverEffect cursor-pointer text-white"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default Page;
