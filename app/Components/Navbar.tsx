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
    <div className='absolute top-0  left-0 w-full bg-gray-800 text-white p-2 flex justify-between'>
      <div>
        <Image className='h-16 w-16 rounded-full' src={logo} alt='logo' />
      </div>
      <div>
        <ul className='flex space-x-11'>
            {navItems.map((item, idx) =>(
                <li className={path ===item.link ? 'font-bold cursor-pointer transition-all' : 'text-gray-400 hover:text-white cursor-pointer transition-all'}>{item.name}</li>
            ))}
        </ul>

        <div className='flex space-x-4'>
            <button className='border py-2 px-5 rounded-lg'>Sign In</button>
            <button className='border py-2 px-5 rounded-lg'>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
