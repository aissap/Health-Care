import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-12">
      {/* Title Section */}
      <div className="mb-8">
        <p className="text-3xl font-semibold text-gray-800">
          ABOUT <span className="text-primary">Us</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <img
          src={assets.about_image}
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Text Section */}
        <div className="md:w-1/2 text-gray-700">
          <p className="text-lg font-medium">
            Welcome to <span className="text-primary">Prescripto</span>
          </p>
          <p className="mt-4">
            At Prescripto, our mission is to provide accessible and reliable healthcare services to
            everyone. We connect patients with experienced medical professionals, offering seamless
            appointment scheduling, virtual consultations, and expert medical advice.
          </p>
          <p className="mt-4">
            Our platform is designed to ensure that quality healthcare is just a few clicks away.
            With our user-friendly interface, you can book appointments, get prescriptions, and
            consult with specialists from the comfort of your home.
          </p>
          <b className="block mt-6 text-lg font-semibold text-gray-800">
            Your Health, Our Priority
          </b>
          <p className="mt-2">
            Whether you need routine check-ups, urgent medical consultations, or expert advice, our
            dedicated team of doctors is here to help. Join us and take control of your healthcare
            journey today.
          </p>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">Built with ❤️ by <b className="text-primary">Aissa Zerrad</b></p>
          </div>
        </div>
      </div>
      <div className="text-xl my-4 mt-16 text-center">
  <p>
    Why <span className="text-gray-700 font-semibold">Choose Us</span>
  </p>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-20">
  <div className="border px-10 md:px-16 py-6 flex flex-col gap-3 text-[15px] rounded-lg shadow-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
    <b className="text-lg">Efficiency:</b>
    <p>Prescripto simplifies healthcare by reducing wait times and streamlining appointment booking for faster access to care.</p>
  </div>
  <div className="border px-10 md:px-16 py-6 flex flex-col gap-3 text-[15px] rounded-lg shadow-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
    <b className="text-lg">Convenience:</b>
    <p>Book appointments anytime, anywhere. Instant confirmations and seamless communication make healthcare hassle-free.</p>
  </div>
  <div className="border px-10 md:px-16 py-6 flex flex-col gap-3 text-[15px] rounded-lg shadow-sm hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
    <b className="text-lg">Personalization:</b>
    <p>Get tailored healthcare experiences with doctor recommendations based on your needs and preferences.</p>
  </div>
</div>

    </div>
  );
};

export default About;
