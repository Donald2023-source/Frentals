"use client";
import React from "react";
import icon1 from "@/assets/Icon (3).png";
import icon2 from "@/assets/Icon (4).png";
import icon3 from "@/assets/Icon (5).png";
import icon4 from "@/assets/Icon (6).png";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
const Stats = () => {
  const stats = [
    { num: "10,000+", name: "Achievements", icon: icon1 },
    { num: "2 Million", name: "Users", icon: icon2 },
    { num: "500 +", name: "Clients", icon: icon3 },
    { num: "140", name: "Equipments", icon: icon4 },
  ];

  return (
    <div className="flex items-center justify-center py-3">
      <div className="grid lg:grid-cols-4 grid-cols-2 place-items-center place-content-center w-full gap-6 px-4 lg:w-[90%] lg:px-5 border-gray-400 shadow-xl py-7 rounded-xl">
        {stats.map((item, idx) => (
          <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="flex items- w-4/5  justify-center"
        key={idx}
          >
        <Image src={item.icon} alt="img" />
        <div>
          <h2 className="md:text-xl font-semibold">{item.num}</h2>
          <p className="md:text-sm text-xs">{item.name}</p>
        </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
