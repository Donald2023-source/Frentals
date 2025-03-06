import icon1 from '@/assets/why1.svg';
import icon2 from '@/assets/why2.svg';
import icon3 from '@/assets/why3.svg';
import icon4 from '@/assets/why4.svg';
import Avatar from '@/assets/Avatar.png'
import Avatar2 from '@/assets/Avatar (1).png'
import { FaRegStar } from "react-icons/fa";

 export const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "FAQ", link: "/faq" },
  ];

export const whyItems = [
    { name: 'Proven Expertise', text:'With years of experience, we deliver solutions that work', icon: icon1},
    { name: 'Customer-Centric Approach', text:'We prioritize your needs to create custom solutions.', icon: icon2},
    { name: 'Innovative Solutions', text:'We stay ahead of the curve with the latest tech trends.', icon: icon3},
    { name: 'Reliable Support', text:'Our team is here for you every step of the way.', icon: icon4},
  ]

  export const Testimonials = [
    { 
      name: 'Jeremiah Sunday', 
      text: 'Thanks to Kudev they really did a great job on remodeling my living room and my bedroom!', 
      avatar: Avatar,
      icon: FaRegStar
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

  export const FooterItems = [
    {
        title: 'INFO',
        listItem: ['About Us', 'For Customers', 'Contacts']
    },
    {
        title: 'CONTACT US',
        listItem: ['+234 980 971-24-19', 'checkme@gmail.com']
    },
    {
        title: 'FIND US',
        listItem: ['Jobs']
    },

  ]

  export const Category = [
    { name: 'Lorry and Trucks', value: 'lorry and trucks' },
    { name: 'Site Dumpers', value: 'site dumpers' },
    { name: 'Bulldozers', value: 'bulldozers' },
    { name: 'Tractors', value: 'tractors' },
    { name: 'Sprayer', value: 'sprayers' },
    { name: 'Torary Tiller', value: 'rotary tiller' },
  ]