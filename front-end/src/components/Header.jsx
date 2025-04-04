import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse bg-sky-500 rounded-lg px-6 md:px-10 lg:px-20">
      {/* Right side (Doctors' Image) */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        <img
          src={assets.header_img}
          alt="Header"
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>

      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-8 md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-3 text-white text-sm front-light">
          <img
            src={assets.group_profiles}
            alt=""
            className="w-28 "
          />
          <p>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center bg-white text-sky-600 font-semibold py-1 px-8 rounded-full shadow-md hover:bg-sky-600 hover:text-white transition-all duration-300 ease-in-out mt-4 border border-sky-600"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="" className="ml-2 w-3 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
