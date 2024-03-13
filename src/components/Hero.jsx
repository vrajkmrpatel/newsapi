import React from 'react'

const Hero = () => {
  return (

    <div className='w-full h-[40vh] md:h-[50vh] bg-indigo-600 flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-bold md:text-3xl text-white'>News Hub</h3>
        <h3 className='text-sm md:text-base font-semibold lg:text-xl uppercase p-2 text-white'>The website built with the news api</h3>
    </div>
  )
}

export default Hero