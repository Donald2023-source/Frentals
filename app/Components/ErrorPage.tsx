import React from 'react'

const ErrorPage = ({message} : { message: string}) => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-center mt-10'>Error</h1>
      <p className='text-center mt-4'>{message}</p>
      <div className='flex justify-center items-center mt-4'>
        <img src="/images/error.png" alt="Error" className='w-1/2 h-auto' />
      </div>
    </div>
  )
}

export default ErrorPage
