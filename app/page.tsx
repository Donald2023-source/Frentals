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
const page = () => {
 
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
          className='px-20 py-4 mt-5'>

        <h2 className='text-center font-bold text-2xl'>Our Mission</h2>
          <div className='flex items-center gap-10 justify-between'>
            <Image className='h-[400px] w-[400px]' src={missionImg} alt="Image" />
            <p className='leading-10 w-[50%]'>Our mission is to empower farmers by providing easy access to the tools, land, and labor they need to succeed. We are committed to fostering agricultural growth by simplifying the process of acquiring modern farming equipment, finding suitable farmlands, and connecting with skilled farmhands. Through our platform, we aim to drive sustainability, increase productivity, and support farmers in achieving their full potential. We believe that by enabling farmers with the right resources, we can contribute to building a stronger, more resilient agricultural community for the future.</p>
          </div>
      </motion.div>

{/* Vision */}
      <motion.div  
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} 
          className='px-20 py-4 mt-8'>

        <h2 className='text-center font-bold text-2xl'>Our Vision</h2>
          <div className='flex flex-row-reverse items-center gap-10 justify-between'>
            <Image className='h-[300px] w-[400px]' src={visionImg} alt="Image" />
            <p className='leading-10 w-[50%]'>Our mission is to empower farmers by providing easy access to the tools, land, and labor they need to succeed. We are committed to fostering agricultural growth by simplifying the process of acquiring modern farming equipment, finding suitable farmlands, and connecting with skilled farmhands. Through our platform, we aim to drive sustainability, increase productivity, and support farmers in achieving their full potential. We believe that by enabling farmers with the right resources, we can contribute to building a stronger, more resilient agricultural community for the future.</p>
          </div>
      </motion.div>
    </div>
  )
}

export default page
