import React from 'react'
import Hero from './Components/Hero'
import hero from "@/assets/hero.jpeg";
import Stats from './Components/Stats';
const page = () => {
 
  return (
    <div>
      <div>
        <Hero 
          text="Connecting Farmers To Equipment, Land, and Labor For A Sustainable Future" 
          subText="Your Farming Success Starts Here...." 
          imageUrl={hero} 
        />
      </div> 
      <Stats />
    </div>
  )
}

export default page
