import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props {
    text: string;
    className?:string
}
const Button = ({text, className}: Props) => {
  return (
    <button className={twMerge('py-2 px-10 border bg-[#3E803E] hover:scale-105 hover:bg-[rgb(62,130,20)] cursor-pointer hoverEfect rounded-lg text-gray-200')}>
      {text}
    </button>
  )
}

export default Button
