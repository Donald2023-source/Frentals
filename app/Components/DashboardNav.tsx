import React from "react";
import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
const DashboardNav = () => {
  const navItems = [
    { name: "Home", link: "/dashboard" },
    { name: "Shop", link: "/shop" },
    { name: "Cart", link: "/cart" },
    { name: "Settings", link: "/settings" },
  ];
  return (
    <div className="px-5 py-3">
      <nav>
        <div className="flex items-center gap-4">
          <Image
            className="h-16 w-16 rounded-full object-cover"
            src={logo}
            alt="logo"
          />
          <h2 className="font-semibold text-lg text-gray-400">Frentals</h2>
        </div>

        <div>
            {
                navItems.map((item) => (
                    <div>
                        <Link href={item.link}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
      </nav>
    </div>
  );
};

export default DashboardNav;
