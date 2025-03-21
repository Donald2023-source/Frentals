"use client";
import React from "react";
import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShoppingCart } from "lucide-react";
const DashboardNav = () => {
  const navItems = [
    { name: "Home", link: "/dashboard" },
    { name: "Shop", link: "/shop" },
    { name: "Orders", link: "/order" },
    { name: "Settings", link: "/settings" },
  ];

  const { userInfo } = useSelector((state: StoreState) => state.frentals);

  const userLogo = userInfo?.name.slice(0, 1);

  const path = usePathname();
  return (
    <div className="px-5 py-3 flex items-center justify-between">
      <nav className="flex gap-20">
        <div className="flex items-center gap-4">
          <Image
            className="h-16 w-16 rounded-full object-cover"
            src={logo}
            alt="logo"
          />
          <h2 className="font-semibold text-lg text-gray-400">Frentals</h2>
        </div>

        <div className=" hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <div>
              <Link
                className={`${path === item.link ? "font-bold text-[#3E803E]" : " text-gray-400 hover:text-[#3E803E]"}`}
                href={item.link}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

      </nav>
        <div className="flex items-center gap-5">
          <ShoppingCart size={23} />
          <Avatar className="w-13 h-13">
            <AvatarFallback className="font-bold text-lg p-3">
              {userLogo}
            </AvatarFallback>
          </Avatar>
        </div>
    </div>
  );
};

export default DashboardNav;
