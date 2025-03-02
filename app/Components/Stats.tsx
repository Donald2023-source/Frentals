import React from 'react'
import icon1 from '@/assets/Icon (3).png'
import icon2 from '@/assets/Icon (4).png'
import icon3 from '@/assets/Icon (5).png'
import icon4 from '@/assets/Icon (6).png'
import Image from 'next/image'
const Stats = () => {

    const stats = [
        { num: '10,000+', name: 'Achievements', icon: icon1},
        { num: '2 Million', name: 'Users', icon: icon2},
        { num: '500 +', name: 'Clients', icon: icon3},
        { num: '140', name: 'Equipments', icon: icon4}
    ]

  return (
    <div>
      <div className='flex flex-wrap items-center justify-between gap-6 px-4 lg:w-[90%] lg:px-5 border-gray-400 shadow-xl py-7 mx-auto rounded-xl'>
        {
            stats.map((item, idx) => (
                <div className='flex items-center' key={idx}>
                    <Image src={item.icon} alt="img" />
                    <div>
                        <h2 className='text-xl font-semibold'>{item.num}</h2>
                        <p className='text-sm'>{item.name}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Stats
