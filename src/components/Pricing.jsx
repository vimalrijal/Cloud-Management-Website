import React from 'react'

import { HiCheck } from "react-icons/hi";


const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

        <div className='max-w-[1240px] mx-auto py-12'>

            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h2 className='text-5xl font-bold text-white py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo quibusdam unde, totam amet at ea distinctio tenetur similique beatae.</h2>
            </div>

            {/* pricing cards */}
            <div className='grid md:grid-cols-2'>
                {/* 1 */}
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                {/* 2 */}
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>premium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$99 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><HiCheck className='w-8 h-8 text-green-600'/> Lorem, ipsum dolor.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Pricing

