"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";
import { navItems } from "../Constants";
import Link from "next/link";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const path = usePathname();

  const { userInfo } = useSelector((state: StoreState) => state.frentals);
  // console.log(userInfo)

  return (
    <div className="relative h-16">
      <div className="absolute top-0 left-0 w-full z-20 text-white py-2 px-3 lg:px-20 items-center flex justify-between h-full">
        <Image
          className="lg:h-16 w-10 h-10 lg:w-16 rounded-full"
          src={logo}
          alt="logo"
        />

        <ul className="hidden lg:flex space-x-11">
          {navItems.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className={`cursor-pointer transition-all ${
                path === item.link
                  ? "font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div className={userInfo ? "hidden" : "lg:flex space-x-4 hiddem"}>
          <Link
            href={"/signin"}
            className="border py-2 cursor-pointer px-5 rounded-lg hover:scale-105 transition-all"
          >
            Sign In
          </Link>
          <Link
            href={"/signup"}
            className="py-2 px-5 cursor-pointer rounded-lg bg-[#3E803E] hover:scale-105 transition-all"
          >
            Sign up
          </Link>
        </div>

        <CiMenuFries
          onClick={toggleNav}
          className="lg:hidden cursor-pointer text-2xl"
        />

        {nav && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => setNav(false)}
          />
        )}

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: nav ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-green-900/25 backdrop-blur-lg p-5 z-50 flex flex-col items-center justify-center space-y-6 text-white"
        >
          {navItems.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              onClick={() => setNav(false)}
              className={`cursor-pointer transition-all text-lg ${
                path === item.link
                  ? "font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <div>
            <Link
              href={"/signin"}
              className="border cursor-pointer py-2 px-5 rounded-lg hover:scale-105 transition-all"
            >
              Sign In
            </Link>
            <Link
              href={"/signup"}
              className="py-2 px-5 cursor-pointer rounded-lg bg-[#3E803E] hover:scale-105 transition-all"
            >
              Sign up
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
