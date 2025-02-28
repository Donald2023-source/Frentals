'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '@/assets/logo.jpeg'
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
  return (
    <div className='absolute top-0  left-0 w-full bg-gray-800 text-white p-6 flex justify-between'>
      <div>
        <Image src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default Navbar
