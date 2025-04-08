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
import { ColorRing } from "react-loader-spinner";
import Link from "next/link";

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
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  const loader = (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#d3d3d3", "#a9a9a9", "#808080", "#696969", "#dcdcdc"]}
    />
  );

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
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

      if (response.ok) {
        // console.log("User created successfully:", data);
        // console.log(data.user);
        router.push("/dashboard");
        const user = data.user;
        console.log(user);
        dispatch(
          addUser({
            name: user?.displayName,
            email: user?.email,
            id: user?.uid,
          })
        );
        setIsLoading(false);
      } else {
        console.error("Signup failed:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  const { cart } = useSelector((state: StoreState) => state.frentals);

  // console.log(cart);

  // console.log(userInfo);

  if (userInfo) {
    console.log("user", userInfo);
    router.push("/dashboard");
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
                  {isLoading ? (
                    <div className="flex justify-center items-center gap-2">
                      {loader} signing up
                    </div>
                  ) : (
                    <span className="text-sm font-semibold">Sign Up</span>
                  )}
                </button>
              </form>
            </div>
            <div className="font-semibold flex items-center justify-center gap-2 md:text-base text-sm">
              Already have an Account?{" "}
              <Link className="text-[#3E803E]" href="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
