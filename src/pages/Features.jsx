import React from 'react'
import Card from '../components/Card'

const Features = () => {
  return (
    <div className='flex flex-row 2xl:flex-col py-8 px-24 lg:px-12 mt-20'>
        <div className='flex-1 flex items-start justify-center flex-col text-left '>
            <h2 className='text-white font-black text-2xl 2xl:text-xl xl:text-lg '>
            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
            </h2>
            <p className='text-white my-20 '>
            Request Early Access to Get Started
            </p>
        </div>
        <div className='flex-1 '>
            <Card title='Improving end distrusts instantly ' content='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' flex='flex-row'  />
            <Card title='Become the tended active' content='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' flex='flex-row'  />
            <Card title='Message or am nothing' content='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' flex='flex-row'  />
            <Card title='Really boy law county' content='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' flex='flex-row'  />
        </div>
    </div>
  )
}

export default Features