import React, { useState } from 'react'
import logo from '../assets/logo.svg';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Navbar = () => {
    const [menu, setMenu] = useState(true);
  return (
        <nav className='py-8 px-24 lg:px-12 flex items-center justify-between '>
            <div className='flex flex-1 items-center justify-start'>
                <div className='mr-6'>
                <img src={logo} alt="logo" className='w-[60px] h-[16px]'/>
                </div>
                <div className='lg:hidden text-white flex gap-5 text-base '>
                    <p><a href="#home">Home</a></p>
                    <p><a href="gpt3">What is GPT?</a></p>
                    <p><a href="possibility">Open AI</a></p>
                    <p><a href="features">Case Studies</a></p>
                    <p><a href="blog">Library</a></p>
                </div>
                <div className='hidden lg:flex relative'>
                {menu ? 
                <RiCloseLine  color='#fff' size={27} onClick={() => setMenu(false)}/>
                : <RiMenu3Line color='#fff' size={27} onClick={() => setMenu(true)}/>
                }
                {menu && (
                    <div className=' bg-blue-900 flex text-white flex-col absolute
                    top-10 right-0 min-w-[210px] h-6/6 flex items-end justify-end
                     text-lg rounded-xl p-4 gap-2 text-bold '>
                        <p><a href="#home">Home</a></p>
                        <p><a href="gpt3">What is GPT?</a></p>
                        <p><a href="possibility">Open AI</a></p>
                        <p><a href="features">Case Studies</a></p>
                        <p><a href="blog">Library</a></p>
                    </div>
                )}
                </div>
            </div>


            <div>
                <ul className='gap-5 text-white flex text-2xl lg:text-lg'>
                    <li className=''>Sign in</li>
                    <li className='bg-orange-600 rounded-1xl p-2 lg:p-1'>Sign up</li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar