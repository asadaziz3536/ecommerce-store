import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ErrorAnimation from "@/assets/icons/404-blue.lottie?url"

const NotFound = () => {
  return (
    <div className='container max-w-screen-xl m-auto'>
      <div className="flex flex-col justify-center items-center h-screen">
     <DotLottieReact className='w-[300px] h-[300px]' src={ErrorAnimation}  loop
      autoplay    />
       <h2 className='text-2xl font-bold'>Page not found</h2>
      <p>Oops! The page you are looking for do not exist</p>
      </div>
    </div>
  )
}

export default NotFound