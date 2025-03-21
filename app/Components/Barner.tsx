import React from 'react'
import CyclistAnimation from './Bike'

const Barner = () => {
  return (
    <div className='w-full px-10 py-10 rounded-lg bg-[#3E803E]'>
      <div className='flex items-center justify-between'>
        <div className='w-[30%] text-white flex flex-col gap-4'>
            <h2 className='text-4xl font-bold '>Welcome To Frentals</h2>
            <p className='leading-8'>Best farm equipment rental services. We give the best of farm rentals, let's work!</p>
        </div>
        <CyclistAnimation />
      </div>
    </div>
  )
}

export default Barner
