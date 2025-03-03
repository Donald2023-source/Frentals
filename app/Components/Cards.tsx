'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon1 from '@/assets/CardIcon.png';
import icon2 from '@/assets/CardIcon2.png';
import icon3 from '@/assets/CardIcon3.png';
import symbol from '@/assets/Symbol.png';

const Cards = () => {
    const cardItems = [
        { 
            name: 'Agricultural Equipment', 
            text: 'We provide farmers with tools they need to enhance productivity and efficiency.', 
            icon: icon1
        },
        { 
            name: 'Available Farmlands', 
            text: 'This section serves as a hub for farmers seeking access to arable lands for cultivation.', 
            icon: icon2
        },
        { 
            name: 'Farm Management Services', 
            text: 'We offer expert farm management services to help maximize agricultural output.', 
            icon: icon3
        }
    ];

    return (
        <div>
            <motion.div 
                className='flex lg:flex-row flex-col gap-4 w-[90%] items-center justify-between mx-auto'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {cardItems.map((item, idx) => (
                    <motion.div 
                        key={idx} 
                        className='flex flex-col gap-4 rounded-md text-white bg-[#3E803E] p-4 w-[380px]'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <Image src={item.icon} alt="img" />
                        </div>
                        <div className='space-y-3'>
                            <h2 className='font-semibold'>{item.name}</h2>
                            <p>{item.text}</p>
                            <motion.button 
                                className='border py-2 px-4 cursor-pointer bg-white/20 hover:scale-105 transition-all rounded-lg flex items-center gap-2'
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Book Service
                                <Image src={symbol} alt="icon" />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Cards;
