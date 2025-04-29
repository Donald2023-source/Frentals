"use client";
import React, { useState } from "react";
import img from "@/assets/SignImg.jpeg";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ColorRing } from "react-loader-spinner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import Link from "next/link";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      dispatch(
        addUser({
          name: user?.displayName || "User",
          email: user.email || "",
          id: user.uid,
        })
      );

      toast.success("Successfully logged in!");
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);

      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Incorrect password");
          break;
        case "auth/user-not-found":
          toast.error("No user found with this email");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email format");
          break;
        default:
          toast.error("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-h-screen h-full">
      <div className="h-screen relative w-full">
        <Image className="w-full object-cover h-full" src={img} alt="SignImg" />
        <div className="bg-black/70 h-full w-full absolute inset-0" />

        <div className="absolute top-0 bottom-0 mx-1 my-auto h-fit left-0 right-0 flex flex-col items-center justify-center">
          <div className="bg-white md:w-[35%] w-[90%] p-10 h-full rounded-2xl">
            <div className="flex flex-col gap-10">
              <h2 className="text-lg font-bold w-[60%] flex items-center text-center justify-center mx-auto">
                Welcome Back! Login to Continue
              </h2>

              <form onSubmit={handleLogin} className="flex flex-col gap-7">
                <fieldset className="w-full flex items-center py-1 px-3 rounded-md border border-gray-300">
                  <legend className="px-3 text-sm text-gray-800">Email</legend>
                  <input
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    className="focus:border-none py-1 tracking-wide text-sm h-full w-full flex items-center justify-center outline-none"
                    type="email"
                    placeholder="jamesaudu@gmail.com"
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
                  disabled={isLoading}
                  className="py-2 my-4 px-10 bg-[#3E803E] text-white rounded-lg cursor-pointer hover:scale-105 hoverEffect disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center gap-2">
                      {loader} Logging in
                    </div>
                  ) : (
                    <span className="text-sm font-semibold">Login</span>
                  )}
                </button>
              </form>
            </div>
            <div className="font-semibold flex items-center justify-center gap-2 md:text-base text-sm">
              Don't have an Account?{" "}
              <Link className="text-[#3E803E]" href="/signup">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
