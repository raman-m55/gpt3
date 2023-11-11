import React from 'react'
import Article from '../components/Article'
import blog01 from '../assets/blog01.png';
import blog02 from '../assets/blog02.png';
import blog03 from '../assets/blog03.png';
import blog04 from '../assets/blog04.png';
import blog05 from '../assets/blog05.png';


const Blog = () => {
  return (
    <div className='py-8 px-24 lg:px-12 mt-20 flex flex-col'>
        <div>
            <h1 className='text-white text-4xl mb-10'>A lot is happening, 
We are blogging about it.</h1>
        </div>
        <div className='flex row  xl:flex-col '>
            <div className='flex-[0.75] mr-5 xl:m-0 xl:mb-5'>
                <Article url={blog01} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            </div>
            <div className='grid grid-cols-2 gap-5 flex-1 lg:grid-cols-1'>
                <Article url={blog02} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
                <Article url={blog03} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
                <Article url={blog04} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
                <Article url={blog05} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            </div>
        </div>
    </div>
  )
}

export default Blog