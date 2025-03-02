import React from 'react'
import Hero from './Components/Hero'
import hero from "@/assets/hero.jpeg";
import Stats from './Components/Stats';
const page = () => {
 
  return (
    <div>
      <div>
        <Hero />
      </div> 
      <Stats />
    </div>
  )
}

export default page
