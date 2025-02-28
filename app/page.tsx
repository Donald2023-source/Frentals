import React from 'react'
import Hero from './Components/Hero'
import hero from "@/assets/hero.jpeg";
const page = () => {
 
  return (
    <div>
       <Hero 
        text="Connecting Farmers to Equipment, Land, and Labor for a Sustainable Future" 
        subText="Your Farming Success Starts Here...." 
        imageUrl={`${hero}`} 
       /> 
    </div>
  )
}

export default page
