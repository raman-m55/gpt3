import React from 'react'

const Card = ({title , content , flex}) => {
  return (
    <div className={`flex ${flex} gap-10 flex-1 lg:my-15 `}>
        <div className='mb-20  w-[220px]'>
            <div className='w-[32px] h-[3px] bg-fuchsia-600 my-3 block' />
             <h1 className='text-white font-bold flex-1 md:text-sm sm:text-[10px] '>{title}</h1>
        </div>
        <div className='text-left '>
            <p className='text-gray-100 text-md 2xl:test-sm md:text-xs flex-1'>{content}</p>
        </div>
    </div>
  )
}

export default Card