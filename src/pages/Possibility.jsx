import React from 'react'
import possibility from '../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='py-8 px-24 lg:px-12 mt-20 flex flex-row md:flex-col items-center justify-center gap-7'>
        <div className='flex items-center justify-center cover flex-1'>
            <img src={possibility} alt="p" className='w-full h-' />
        </div>
        <div className='flex flex-col text-left flex-1 gap-2'>
            <h2 className='text-blue-300'>
            Request Early Access to Get Started
            </h2>
            <h1 className='text-white text-3xl xl:text-xl lg:text-lg '>
            The possibilities are beyond your imagination
            </h1>
            <p className='text-gray-500'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <p className='text-white'>
            Request Early Access to Get Started
            </p>
        </div>
    </div>
  )
}

export default Possibility