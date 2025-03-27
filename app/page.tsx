"use client";
import React from "react";
import Hero from "./Components/Hero1";
import hero from "@/assets/hero.jpeg";
import Stats from "./Components/Stats";
import Cards from "./Components/Cards";
import missionImg from "@/assets/Mission.png";
import Image from "next/image";
import { motion } from "framer-motion";
import visionImg from "@/assets/Vision.png";
import whyImg from "@/assets/Why.jpeg";
import { Testimonials, whyItems } from "./Constants";
import { useState } from "react";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import ButtomSection from "./Components/ButtomSection";
import Loader from "./Components/Loader";
import { useSelector } from "react-redux";
import { StoreState } from "@/types";
import { useRouter } from "next/navigation";

const page = () => {
  const { userInfo } = useSelector((state: StoreState) => state.frentals);

  const router = useRouter();
  if (userInfo.email) {
    router.push("/dashboard");
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % Testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + Testimonials.length) % Testimonials.length
    );
  };

  return (
    <div>
      <div>
        <Hero />
      </div>
      <Stats />
      <Cards />

      <div className="flex flex-col items-center justify-between text-center lg:px-20 px-4 py-10">
        <h2 className="font-semibold text-lg">Who We Are</h2>
        <p className="text-gray-500 lg:text-md text-sm leading-9">
          We are a dedicated platform committed to transforming agriculture by
          connecting farmers with essential resources. Our mission is to bridge
          the gap between farmers and the tools, land, and labor they need to
          thrive. Whether it’s providing access to farming equipment, farmlands,
          or skilled farmhands, we aim to empower farmers with the resources
          necessary to enhance productivity and sustainability.
        </p>
      </div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:px-20 px-8 py-4 mt-5"
      >
        <h2 className="text-center font-bold text-2xl">Our Mission</h2>
        <div className="flex lg:flex-row flex-col items-center gap-10 justify-between">
          <Image
            className="lg:h-[400px] lg:w-[400px]"
            src={missionImg}
            alt="Image"
          />
          <p className="leading-10 lg:w-[50%]">
            Our mission is to empower farmers by providing easy access to the
            tools, land, and labor they need to succeed. We are committed to
            fostering agricultural growth by simplifying the process of
            acquiring modern farming equipment, finding suitable farmlands, and
            connecting with skilled farmhands. Through our platform, we aim to
            drive sustainability, increase productivity, and support farmers in
            achieving their full potential. We believe that by enabling farmers
            with the right resources, we can contribute to building a stronger,
            more resilient agricultural community for the future.
          </p>
        </div>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:px-20 px-8 py-4 mt-5"
      >
        <h2 className="text-center font-bold text-2xl py-5">Our Vision</h2>
        <div className="flex lg:flex-row-reverse flex-col items-center gap-10 justify-between">
          <Image
            className="lg:h-[400px] lg:w-[400px] object-cover rounded-xl"
            src={visionImg}
            alt="Image"
            priority
          />
          <p className="leading-10 lg:w-[50%]">
            Our mission is to empower farmers by providing easy access to the
            tools, land, and labor they need to succeed. We are committed to
            fostering agricultural growth by simplifying the process of
            acquiring modern farming equipment, finding suitable farmlands, and
            connecting with skilled farmhands. Through our platform, we aim to
            drive sustainability, increase productivity, and support farmers in
            achieving their full potential. We believe that by enabling farmers
            with the right resources, we can contribute to building a stronger,
            more resilient agricultural community for the future.
          </p>
        </div>
      </motion.div>

      <div className="w-full relative h-[500px]">
        <div className="w-full rounded-xl h-[500px]">
          <Image className="w-full rounded-lg h-full" src={whyImg} alt="img" />
        </div>
        <div className="bg-[#3e803e8c] rounded-xl w-full h-full absolute top-0" />

        <div className="absolute top-1/4 lg:mx-20 px-3 text-white lg:w-[90%] flex flex-col lg:items-start items-center gap-4">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="tex-white text-3xl font-bold text-white">
              Why Choose Us?
            </h2>
            <p className="lg:w-[65%] text-center leading-9">
              We are dedicated to providing farmers with a seamless experience
              by offering access to the essential resources they need—modern
              farming equipment, fertile farmlands, and skilled labor.{" "}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:grid grid-cols-4 hidden gap-10 py-10"
          >
            {whyItems.map((item, idx) => (
              <div className="flex gap-4 flex-col w-full lg:w-64" key={idx}>
                <Image className="h-10" src={item.icon} alt="img" />
                <div className="flex flex-col">
                  <h2 className="lg:text-lg text-md font-semibold">
                    {item.name}
                  </h2>
                  <p className="lg:text-sm text-xs">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Testimonial
      <div className="py-10">
        <Testimonial />
      </div> */}

      <ButtomSection />
    </div>
  );
};

export default page;
