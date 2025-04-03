'use client'
import React from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="py-8">
      <motion.h2 initial={{x: 0}} animate={{x: 50}} transition={{ duration:2, repeat: Infinity, repeatType: 'reverse'}} className="text-center font-semibold text-3xl">Coming Soon!!!</motion.h2>
    </div>
  );
};

export default page;
