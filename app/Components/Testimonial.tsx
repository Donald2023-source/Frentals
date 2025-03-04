import React, { useState } from "react";
import { Testimonials } from "../Constants";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2) % Testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2) % Testimonials.length);
  };
  return (
    <div>
      {
        <div className="flex flex-col items-center relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-5 mx-auto w-full "
          >
            {Testimonials.slice(currentIndex, currentIndex + 2).map(
              (testimonial, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center py-10 px-6 shadow-xl w-[35%] rounded-lg"
                >
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <h2></h2>
                  <h3 className="text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm leading-7 text-center">
                    {testimonial.text}
                  </p>
                </div>
              )
            )}
          </motion.div>
          <div className="flex gap-4 top-1/2 absolute justify-between w-[85%]">
            <button
              onClick={handlePrev}
              className="p-4 shadow text-lg rounded-full hover:scale-105 cursor-pointer hover:bg-[#3e803e46] hoverEffect"
            >
              <MdArrowBackIosNew />
            </button>
            <button
              onClick={handleNext}
              className="p-4 shadow text-lg rounded-full hover:scale-105 cursor-pointer hover:bg-[#3e803e46] hoverEffect"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Testimonial;
