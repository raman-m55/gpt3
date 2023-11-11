import React from 'react'
import ai from '../assets/ai.png' ; 
import people from '../assets/people.png';


const Header = () => {
  return (
      <div className=' px-24 lg:px-12 flex flex-row justify-center   '>
        <div className=' flex flex-col flex-1 p-0'>
          <h1 className='gradient__text font-extrabold text-7xl lg:text-5xl md:text-3xl md:2xl sm:text-xl'>Lets Build Something <br />
              amazing with GPT-3 OpenAI
          </h1>
          <p className='text-left leading-6 text-gray-300 text-xl  py-10 md:text-lg sm:text-sm'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='flex flex-row w-full p-0'>
            <input type="text" className='w-full  rounded-l-lg border-none h-[60px] px-2 m-0 outline-0' />
            <button className='w-2/6 bg-orange-600 rounded-r-lg border-none h-[61px] text-xl sm:text-base font-bold text-white'>Get Started</button>
          </div>
          <div className='flex flex-row gap-2 pt-10 items-center '>
          <img src={people} alt="people" />
          <p className='text-white md:text-xs'>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='lg:hidden flex items-center justify-center flex-1'>
    <     img src={ai} alt="ai" className='cover w-full h-auto ' />
        </div>

  
      </div>
  )
}

export default Header