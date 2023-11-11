import React from 'react'

const Article = ({url , content}) => {
  return (
    <div className='w-full h-max bg-blue-600'>
        <div className='w-full h-1/2'>
            <img src={url} alt={url} className='w-full h-full cover' />
        </div>
        <div className='flex flex-col justify-between text-left p-4 '>
            <div>
                <p className='text-lg m-4  text-gray-200'>Sep 26, 2021</p>
                <h1 className='text-white text-2xl mx-4 sm:text-xl'>{content}</h1>
            </div>
            <div>
                <p className='text-gary-400 test-xs text-gray-200 m-4'>Sep 26, 2021</p>
            </div>
        </div>
    </div>
  )
}

export default Article