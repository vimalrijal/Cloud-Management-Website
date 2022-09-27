import React,{useState} from 'react'

import { HiOutlineMenu,HiX } from "react-icons/hi";

import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {

    const [nav, setnav] = useState(false);
    
    const handleClick = () => setnav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        
        <div className='px-2 flex justify-between items-center w-full h-full'>

            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND</h1>
                <ul className='hidden md:flex '> 
                
                    <li><Link  to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
                    <li><Link  to="about" smooth={true} offset={50} duration={500}>About</Link></li>
                    <li><Link  to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
                    <li><Link  to="platform" smooth={true} offset={50} duration={500}>Platform</Link></li>
                    <li><Link  to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
                </ul>
            </div>

            <div className='hidden md:flex pr-4 justify-between'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>

            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <HiOutlineMenu className='w-5'/> : <HiX/>}
            </div>

        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li><Link  to="home" smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link  to="about" smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link  to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
                <li><Link  to="platform" smooth={true} offset={50} duration={500}>Platform</Link></li>
                <li><Link  to="pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li>
        <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>

    </div>
  )
}

export default Navbar