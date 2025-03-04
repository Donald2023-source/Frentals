import React, { useState } from "react";
import { Testimonials } from "../Constants";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 2) % Testimonials.length)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 2) % Testimonials.length)
    }
  return (
    <div>
      {
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-5 mx-auto w-full">
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
                  <h3 className="text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm leading-7 text-center">
                    {testimonial.text}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-300 rounded"
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
