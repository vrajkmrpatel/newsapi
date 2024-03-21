import React from 'react'

const Footer = () => {
  let date = new Date();
  return (
    <div className='text-sm md:text-lg p-3 mx-auto flex justify-center items-center bg-indigo-600 text-white'>
      <h3>Copyright @{date.getFullYear()} Vraj Patel | All rights reserved</h3>
    </div>
  )
}

export default Footer