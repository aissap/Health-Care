import React from 'react'
import { assets } from '../assets/assets';


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col -justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'> 98435 Willms Station <br /> suite 300, New York USA</p>
          <p className='text-gray-500'>Tel: (+212) 707696305 <br /> Email: jesus.jesus.core@gmail.com</p>
          <p className='flex flex-col justify-center items-start gap-6'>Careers at Prescripto</p>
          <p className='text-gray-500'>Learn more about our teams and job openings. </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-primary hover:text-white transition-all duration-500'>Explore JObs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact