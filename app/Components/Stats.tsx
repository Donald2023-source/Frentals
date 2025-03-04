'use client'
import React from 'react'
import icon1 from '@/assets/Icon (3).png'
import icon2 from '@/assets/Icon (4).png'
import icon3 from '@/assets/Icon (5).png'
import icon4 from '@/assets/Icon (6).png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { easeInOut } from 'framer-motion/dom'
const Stats = () => {

    const stats = [
        { num: '10,000+', name: 'Achievements', icon: icon1},
        { num: '2 Million', name: 'Users', icon: icon2},
        { num: '500 +', name: 'Clients', icon: icon3},
        { num: '140', name: 'Equipments', icon: icon4}
    ]

  return (
    <div>
      <div className='lg:flex my-4 md:flex grid grid-cols-2 place-items-center items-center justify-between gap-6 px-4 lg:w-[90%] lg:px-5 border-gray-400 shadow-xl py-7 mx-auto rounded-xl'>
        {
            stats.map((item, idx) => (
                <motion.div initial={{x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1}} transition={{ duration: 1, ease: easeInOut}} className='flex items-center w-52' key={idx}>
                    <Image src={item.icon} alt="img" />
                    <div>
                        <h2 className='text-xl font-semibold'>{item.num}</h2>
                        <p className='text-sm'>{item.name}</p>
                    </div>
                </motion.div>
            ))
        }
      </div>
    </div>
  )
}

export default Stats
