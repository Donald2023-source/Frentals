"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ShoppingCart,
  Menu,
  X,
  Home,
  ShoppingBag,
  CheckCheckIcon,
  Settings2,
  Settings,
  User,
} from "lucide-react";
import logo from "@/assets/logo.jpg";

const DashboardNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { icon: <Home />, name: "Dashboard", link: "/dashboard" },
    { icon: <ShoppingBag />, name: "Shop", link: "/shop" },
    { icon: <CheckCheckIcon />, name: "Orders", link: "/order" },
    { icon: <Settings />, name: "Settings", link: "/settings" },
  ];

  const { userInfo,cart } = useSelector((state: StoreState) => state.frentals);
  const userLogo = userInfo?.name.slice(0, 1);
  const path = usePathname();
  

  return (
    <div className="md:px-5 px-3 py-3 flex items-center justify-between border-b border-gray-100">
      {/* Logo & Branding */}
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-gray-500 hover:text-[#3E803E] transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="cursor-pointer" size={28} />
            ) : (
              <Menu className="cursor-pointer" size={28} />
            )}
          </button>
          <Image
            className="md:h-16 md:w-16 w-10 h-10 rounded-full object-cover"
            src={logo}
            alt="logo"
          />
          <h2 className="font-semibold text-lg text-gray-400">Frentals</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className={`${
                path === item.link
                  ? "font-bold text-[#3E803E]"
                  : "text-gray-400 hover:text-[#3E803E]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Link className="relative" href={'/cart'}>
          
          <ShoppingCart
            className="hover:scale-105  cursor-pointer transition-all"
            size={23}
          />
          <h2 className="absolute -top-2 -right-3 p-2 text-gray-100 border rounded-full h-5 w-5 bg-green-600 flex items-center text-sm justify-center">{ cart.length}</h2>
        </Link>
        <Avatar className="md:w-13 md:block md:h-13 h-10 w-10 hover:scale-105 cursor-pointer">
          <AvatarFallback className="font-bold text-lg p-3">
            {userLogo}
          </AvatarFallback>
        </Avatar>
      </div>

      {menuOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 bg-opacity-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />

          <motion.div
            initial={{ x: "100%", opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }} //
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed z-20 right-0 top-0 w-64 h-full bg-white rounded-lg shadow-lg flex flex-col p-5"
          >
            <button
              className="self-end text-gray-500 hover:text-[#3E803E] transition"
              onClick={() => setMenuOpen(false)}
            >
              <X className="cursor-pointer" size={28} />
            </button>

            <nav className="mt-5 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`${
                    path === item.link
                      ? "font-bold text-[#3E803E]"
                      : "text-gray-500 hover:text-[#3E803E]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center gap-4">
                    {item?.icon}
                    {item.name}
                  </div>
                </Link>
              ))}

              <h2 className="flex items-center gap-4 text-gray-500">
                <User />
                Profile
              </h2>
            </nav>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default DashboardNav;
