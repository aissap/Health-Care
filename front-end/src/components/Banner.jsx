import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import verifiedIcon from '../assets/verified_icon.svg'; // Ensure correct path
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  
  const [docInfo, setDocInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  useEffect(() => {
    if (doctors && Array.isArray(doctors)) {
      const foundDoctor = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoctor || null);
    }
  }, [doctors, docId]);

  if (!doctors) {
    return <p>Loading doctors...</p>;
  }

  if (!docInfo) {
    return <p>Doctor not found.</p>;
  }

  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      {/* Doctor's Image */}
      <div>
        {docInfo.image && <img className='bg-blue-400 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />}
      </div>

      {/* Doctor's Details */}
      <div className='flex-1 border border-gray-600 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
          {docInfo.name} <img className='w-5' src={verifiedIcon} alt="Verified Icon" />
        </p>
        <p>{docInfo.degree} - {docInfo.specialty}</p>
        <button className='py-0.5 px-2 border text-xs rounded-full bg-primary'>Book Appointment</button>
      </div>

      {/* About Section */}
      <div>
        <p className="flex items-center">
          About <img src={assets.info_icon} alt="Info Icon" />
        </p>
        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
      </div>

      {/* Appointment Fee */}
      <p>
        Appointment fee: <span>{currencySymbol}{docInfo.fees}</span>
      </p>
    </div>
  );
};

export default Appointment;
