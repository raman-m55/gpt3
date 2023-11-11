import React from 'react'
import {google , slack , atlassian , dropbox , shopify} from '../components/imports';

const br = [google , slack , atlassian , dropbox , shopify]

const Brand = () => {
  return (
    <div className=' px-24 lg:px-12 my-20 flex flex-wrap  justify-center items-center gap-4 '>
        {br.map((item , index ) => (
            <div key={index} className='flex justify-center items-center  flex-1'>
                <img src={item} alt={item}  className=''/>
            </div>
        ))}
    </div>
  )
}

export default Brand