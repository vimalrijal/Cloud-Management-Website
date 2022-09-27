import React from 'react'

import { FaFacebook, FaInstagram, FaGithub, FaTwitter, FaTwitch} from 'react-icons/fa'   

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Pricing</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Documentation</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase '>Subscribe to our news letter</p>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, similique.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input type='email' className='w-full p-2 mr-4 rounded-md mb-4' placeholder='enter email'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>

            <div className='flex-col px-2 py-4 max-w-[1240px] m-auto  justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>2022 workflow, copyright all reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl '>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaGithub/>
                    <FaTwitch/>
                    <FaTwitter/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer