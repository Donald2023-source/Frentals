'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '@/assets/logo.jpg'
import Image from 'next/image'
const Navbar = () => {
    const navItems = [
        { name: 'Home', link: '/' }, 
        { name: 'Services', link: '/services' }, 
        { name: 'About Us', link: '/about' }, 
        { name: 'Contact Us', link: '/contact' }, 
        { name: 'FAQ', link: '/faq' }, 
    ]

    const path = usePathname()
    console.log(path)
  return (
    <div>
        <div className='absolute top-0 left-0 w-full  text-white py-2 px-5 items-center flex justify-between'>
        <div>
            <Image className='h-16 w-16 rounded-full' src={logo} alt='logo' />
        </div>
        <div className='flex items-center space-x-4'>
            <ul className='flex space-x-11'>
                {navItems.map((item, idx) =>(
                    <li className={path ===item.link ? 'font-bold cursor-pointer transition-all' : 'text-gray-400 hover:text-white cursor-pointer transition-all'}>{item.name}</li>
                ))}
            </ul>
        </div>

        <div className='flex space-x-4'>
                <button className='border py-2 px-5 cursor-pointer rounded-lg'>Sign In</button>
                <button className='py-2 hover:scale-105 transition-all cursor-pointer px-5 rounded-lg bg-[#3E803E]'>Sign up</button>
            </div>
        </div>

        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10' />
    </div>
  )
}

export default Navbar
