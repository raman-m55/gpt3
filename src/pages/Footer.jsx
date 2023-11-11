import React from 'react'
import logo from '../assets/logo.svg';




const Footer = () => {
  return (
    <div className='py-8 px-24 lg:px-12 flex flex-col bg-blue-900'>
        <div className=' flex flex-col justify-center items-center gap-10'>
            <h1 className='text-center text-4xl text-white'>Do you want to step in to the <br />
             future before others</h1>
                <p className='text-white border border-white text-2xl p-4'>Request Early Access</p>
        </div>
        <div className='flex flex-row lg:flex-col justify-between lg:justify-center  items-center lg:items-start text-gray-300 gap-5 mt-32'>
        <div className='flex flex-col gap-5  lg:mb-10 lg:m-auto'>
            <img src={logo} alt="logo" className='cover flex-1'/>
            <p className='text-xl text-gray-200'>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
            </p>
        </div>
            <div className='text-xl flex flex-col gap-5'>
                <p className='font-bold  text-white'>pnks</p>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className='text-xl flex flex-col gap-5'>
                <p className='font-bold text-white' >Company</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className='text-xl flex flex-col gap-5'>
                <p className='font-bold text-white' >Get in touch</p>
                <p>Crechterwoord K12 <br /> 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
            </div>
        </div>
    </div>
  )
}

export default Footer