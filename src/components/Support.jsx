import React from 'react'

import { HiArrowSmRight,HiPhone,HiGlobeAlt,HiCubeTransparent } from "react-icons/hi";
import supportImg from '../assets/support.jpg';

const Support = () => {
  return (
    <div name='support' className='w-full h-full mt-24 '>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='supportImg'/>
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>Finding The Right Team</h3>
                <p className='text-3xl py-4 text-slate-300 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores voluptatibus itaque consequuntur magni aperiam libero iusto deleniti nostrum nesciunt id, exercitationem quia odit, dolor qui.</p>
            </div>

            <div className='grid grid-col-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiPhone className='text-white bg-indigo-600 w-16 h-16 p-4 rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6 '>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, id.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className=' flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiGlobeAlt className='text-white bg-indigo-600 w-16 h-16 p-4 rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6 '>Technical</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, id.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className=' flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='ml-2'/></p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiCubeTransparent className='text-white bg-indigo-600 w-16 h-16 p-4 rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6 '>Media Inqueries</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quibusdam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, id.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className=' flex items-center text-indigo-600'>Contact Us <HiArrowSmRight className='ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support