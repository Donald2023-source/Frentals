'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import logo from '@/assets/logo.jpg'
import Image from 'next/image'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const navItems = [
        { name: 'Home', link: '/' }, 
        { name: 'Services', link: '/services' }, 
        { name: 'About Us', link: '/about' }, 
        { name: 'Contact Us', link: '/contact' }, 
        { name: 'FAQ', link: '/faq' }, 
    ]

    const [isOpen, setIsOpen] = useState(false)
    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    const path = usePathname()
    console.log(path)
  return (
    <div className='relative h-16'>
        <div className='absolute top-0 left-0 w-full z-20 text-white py-2 px-5 items-center flex justify-between h-full'>
            <div>
                <Image className='h-16 w-16 rounded-full' src={logo} alt='logo' />
            </div>
            <div className='flex items-center space-x-4'>
                <ul className='flex lg:flex-row flex-col lg:space-y-0 space-y-4 lg:text-left lg:relative absolute left-0 lg:top-0 top-10 lg:space-x-11 space-x-0 mx-auto w-full items-center text-center'>
                    {navItems.map((item, idx) => (
                        <li key={idx} className={path === item.link ? 'font-bold cursor-pointer transition-all' : 'text-gray-400 hover:text-white cursor-pointer transition-all'}>{item.name}</li>
                    ))}
                </ul>
            </div>

            <CiMenuFries className='lg:hidden cursor-pointer' />

            <div className='lg:flex space-x-4 hidden'>
                <button className='border py-2 hover:scale-105 transition-all px-5 cursor-pointer rounded-lg'>Sign In</button>
                <button className='py-2 hover:scale-105 transition-all cursor-pointer px-5 rounded-lg bg-[#3E803E]'>Sign up</button>
            </div>
        </div>

        
    </div>
  )
}

export default Navbar
