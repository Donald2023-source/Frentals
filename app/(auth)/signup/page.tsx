"use client";
import React, { useState } from "react";
import img from "@/assets/SignImg.jpeg";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/redux/cartSlice";
import { userAgent } from "next/server";
import { StoreState } from "@/types";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const page = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState("")
  // const [password, setPassword] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      dispatch(
        addUser({
          name: data.user.displayName,
          email: data.user.email,
          id: data.user.uid,
        })
      );

      if (response.ok) {
        // console.log("User created successfully:", data);
        // console.log(data.user);
        const user = data.user;
      } else {
        console.error("Signup failed:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  const { cart } = useSelector((state: StoreState) => state.frentals);

  // console.log(cart);

  const router = useRouter();

  // console.log(userInfo);

  if (userInfo) {
    console.log("user", userInfo);
    router.push("/services");
  } 

  const handleSignout = () => {
    dispatch(removeUser());
    toast.success("user logged out successfully");
  };

  return (
    <div className="w-full max-h-screen h-full">
      <div className="h-screen relative w-full">
        <Image className="w-full object-cover h-full" src={img} alt="SignImg" />

        <div className="bg-black/70 h-full w-full absolute inset-0" />

        <div className="absolute top-0 bottom-0 mx-1 my-auto h-fit left-0 right-0 flex flex-col items-center justify-center">
          <div className="bg-white md:p-10 p-6 h-full rounded-2xl">
            <div className="flex flex-col gap-7">
              <h2 className="text-lg font-bold w-[60%] flex items-center text-center justify-center mx-auto">
                Hi, Need an Equipment on Rent? Start Today!
              </h2>

              <form
                onSubmit={handleSignup}
                className="flex flex-col gap-7"
                action=""
              >
                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Name</legend>
                  <input
                    onChange={handleChange}
                    value={formData.name}
                    name="name"
                    className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none"
                    type="text"
                    placeholder="James Audu"
                  />
                </fieldset>

                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Email</legend>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none"
                    type="text"
                    placeholder="jamesaudu@gmail.com"
                  />
                </fieldset>

                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">
                    Phone Number
                  </legend>
                  <input
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none"
                    maxLength={11}
                    type="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="08123000238"
                  />
                </fieldset>

                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">
                    Password
                  </legend>

                  <input
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none"
                    type={isVisible ? "text" : "password"}
                    placeholder="password"
                  />
                  <span
                    className="cursor-pointer text-sm"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? <Eye size={17} /> : <EyeClosed size={17} />}
                  </span>
                </fieldset>

                <button
                  type="submit"
                  className="py-2 my-4 px-10 bg-[#3E803E] text-white rounded-lg cursor-pointer hover:scale-105 hoverEffect"
                >
                  Submit
                </button>
              </form>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
