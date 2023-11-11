import React from 'react'

const CTA = () => {
  return (
    <div className='mx-24 lg:mx-12 my-20 flex flex-row justify-between bg-fuchsia-400 items-center p-4 '>
        <div className=' flex flex-col '>
            <p className='font-bold text-sm md:text-xs'>Request Early Access to Get Started</p>
            <h1 className='font-bold text-2xl md:text-base sm:text-sm' >Register today & start exploring the endless possiblities.</h1>
        </div>
        <div className=''>
            <button className='bg-black rounded-md p-5 xl:p-4 lg:p-3 md:p-1  font-bold lg:font-medium
            text-[18px] md:text-[14px] min-w-[180px] md:min-w-[100px] sm:min-w-[90px] ml-2 text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default CTA