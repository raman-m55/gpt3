import React from 'react'
import './whatGPT3.css';
import Card from '../components/Card';


const WhatGPT3 = () => {
  return (
    <div className=' mx-24 lg:mx-12 px-24 lg:px-12  p-10 gpt3__whatgpt3'>
      <div className='flex flex-col '>
      <div>
        <Card title='What is GPT-3' content='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' flex='flex-col'/>
      </div>
        <div className='flex flex-row justify-between items-center my-20 gap-10'>
        <div >
        <h1 className='text-white text-3xl 2xl:text-xl lg:text-lg font-black xl:text-lg lg:text-md '>The possibilities are beyond your imagination</h1>
        </div>
        <div>
        <p className='text-white text-xl '>Explore The Library</p>

        </div>
        </div>

        <div className='flex flex-row flex-wrap gap-4 my-20 '>
            <Card title='Chatbots' content='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' flex='flex-col'/> 
            <Card title='Knowledgebase' content='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' flex='flex-col'/> 
            <Card title='Education' content='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' flex='flex-col'/> 
        </div>

      </div>


    </div>
  )
}

export default WhatGPT3
