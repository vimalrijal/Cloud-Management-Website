import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-m-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold text-indigo-600'>Trusted by developer across the world</h2>
                <p className='text-xl py-6 text-gray-500 '>This is the world's first cloud based storage solution, which are more likely to be quickest, fastest and scalable</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-pink-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-pink-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-pink-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About