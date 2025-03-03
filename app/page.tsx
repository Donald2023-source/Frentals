'use client'
import React from 'react'
import Hero from './Components/Hero'
import hero from "@/assets/hero.jpeg";
import Stats from './Components/Stats';
import Cards from './Components/Cards';
import missionImg from '@/assets/Mission.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
import visionImg from '@/assets/Vision.png';
import whyImg from '@/assets/Why.jpeg';
import icon1 from '@/assets/why1.svg';
import icon2 from '@/assets/why2.svg';
import icon3 from '@/assets/why3.svg';
import icon4 from '@/assets/why4.svg';
import Avatar from '@/assets/Avatar.png'
import Avatar2 from '@/assets/Avatar (1).png'
import { useState } from 'react';
const page = () => {
  const whyItems = [
    { name: 'Proven Expertise', text:'With years of experience, we deliver solutions that work', icon: icon1},
    { name: 'Customer-Centric Approach', text:'We prioritize your needs to create custom solutions.', icon: icon2},
    { name: 'Innovative Solutions', text:'We stay ahead of the curve with the latest tech trends.', icon: icon3},
    { name: 'Reliable Support', text:'Our team is here for you every step of the way.', icon: icon4},
  ]

  const Testimonials = [
    { 
      name: 'Jeremiah Sunday', 
      text: 'Thanks to Kudev they really did a great job on remodeling my living room and my bedroom!', 
      avatar: Avatar
    },

    { 
      name: 'Jeremiah Sunday', 
      text: 'Thanks to Kudev they really did a great job on remodeling my living room and my bedroom!', 
      avatar: Avatar2
    },

    { 
      name: 'Jeremiah Sunday', 
      text: 'This is the third testimonial', 
      avatar: Avatar
    },

    { 
      name: 'Jeremiah Sunday', 
      text: 'TThis is the fourth testimonial', 
      avatar: Avatar2
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % Testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + Testimonials.length) % Testimonials.length);
  };
 
  return (
    <div>
      <div>
        <Hero />
      </div> 
      <Stats />
      <Cards />

      <div className='flex flex-col items-center justify-between text-center lg:px-20 px-4 py-10'>
        <h2 className='font-semibold text-lg'>Who We Are</h2>
        <p className='text-gray-500 lg:text-md text-sm leading-9'>We are a dedicated platform committed to transforming agriculture by connecting farmers with essential resources. Our mission is to bridge the gap between farmers and the tools, land, and labor they need to thrive. Whether it’s providing access to farming equipment, farmlands, or skilled farmhands, we aim to empower farmers with the resources necessary to enhance productivity and sustainability.</p>
      </div>

    {/* Mission */}
      <motion.div  
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          className='lg:px-20 px-12 py-4 mt-5'>

        <h2 className='text-center font-bold text-2xl'>Our Mission</h2>
          <div className='flex lg:flex-row flex-col items-center gap-10 justify-between'>
            <Image className='lg:h-[400px] lg:w-[400px]' src={missionImg} alt="Image" />
            <p className='leading-10 lg:w-[50%]'>Our mission is to empower farmers by providing easy access to the tools, land, and labor they need to succeed. We are committed to fostering agricultural growth by simplifying the process of acquiring modern farming equipment, finding suitable farmlands, and connecting with skilled farmhands. Through our platform, we aim to drive sustainability, increase productivity, and support farmers in achieving their full potential. We believe that by enabling farmers with the right resources, we can contribute to building a stronger, more resilient agricultural community for the future.</p>
          </div>
      </motion.div>

{/* Vision */}
    <motion.div  
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          className='lg:px-20 px-12 py-4 mt-5'>

        <h2 className='text-center font-bold text-2xl'>Our Mission</h2>
          <div className='flex lg:flex-row-reverse flex-col items-center gap-10 justify-between'>
            <Image className='lg:h-[400px] lg:w-[400px]' src={visionImg} alt="Image" />
            <p className='leading-10 lg:w-[50%]'>Our mission is to empower farmers by providing easy access to the tools, land, and labor they need to succeed. We are committed to fostering agricultural growth by simplifying the process of acquiring modern farming equipment, finding suitable farmlands, and connecting with skilled farmhands. Through our platform, we aim to drive sustainability, increase productivity, and support farmers in achieving their full potential. We believe that by enabling farmers with the right resources, we can contribute to building a stronger, more resilient agricultural community for the future.</p>
          </div>
      </motion.div>

      <div className='w-full relative h-[500px]'>
        <div className='w-full rounded-xl h-[500px]'>
          <Image className='w-full rounded-lg h-full' src={whyImg} alt="img" />
        </div>
        <div className='bg-[#3e803e8c] rounded-xl w-full h-full absolute top-0'/>
        
        <div className='absolute top-1/4 lg:mx-20 px-3 text-white lg:w-[90%] flex flex-col lg:items-start items-center gap-4'>
          <div className='flex flex-col items-center space-y-4'>
            <h2 className='tex-white text-3xl font-bold text-white'>Why Choose Us?</h2>
            <p className='lg:w-[65%] text-center leading-9'>We are dedicated to providing farmers with a seamless experience by offering access to the essential resources they need—modern farming equipment, fertile farmlands, and skilled labor. </p>
          </div>

            <motion.div  
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} 
            className='lg:grid grid-cols-4 hidden gap-10 py-10'>
            {
              whyItems.map((item, idx) => (
              <div className='flex gap-4 flex-col w-full lg:w-64' key={idx}>
                <Image className='h-10' src={item.icon} alt="img" />
                <div className='flex flex-col'>
                <h2 className='lg:text-lg text-md font-semibold'>{item.name}</h2>
                <p className='lg:text-sm text-xs'>{item.text}</p>
                </div>
              </div>
              ))
            }
            </motion.div>
        </div>
      </div>

      {/* Testimonial */}

      <div>
          {  
              <div className='flex flex-col items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  {Testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, idx) => (
                    <div key={idx} className='flex flex-col items-center p-8 shadow-xl w-[80%] rounded-lg'>
                      <Image className='h-16 w-16 rounded-full' src={testimonial.avatar} alt={testimonial.name} />
                      <h3 className='font-semibold text-lg'>{testimonial.name}</h3>
                      <p className='text-gray-500'>{testimonial.text}</p>
                    </div>
                  ))}
                </div>
                <div className='flex gap-4 mt-4'>
                  <button onClick={handlePrev} className='px-4 py-2 bg-gray-300 rounded'>Previous</button>
                  <button onClick={handleNext} className='px-4 py-2 bg-gray-300 rounded'>Next</button>
                </div>
              </div>
}
      </div>
    </div>
  )
}

export default page
