import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setfilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyfilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyfilter();
  }, [doctors, speciality]); // Ensure dependencies are correct

  const getButtonClass = (buttonSpeciality) => {
    return speciality === buttonSpeciality
      ? 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-blue-500 bg-blue-100 text-blue-700' // Active button style
      : 'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 transition-all cursor-pointer'; // Inactive button style
  };

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p
            onClick={() => speciality === 'Generalphysician' ? navigate('/doctors') : navigate('/doctors/General%20physician')}
            className={getButtonClass('Generalphysician')}
          >
            Generalphysician
          </p>
          <p
            onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}
            className={getButtonClass('Gynecologist')}
          >
            Gynecologist
          </p>
          <p
            onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}
            className={getButtonClass('Dermatologist')}
          >
            Dermatologist
          </p>
          <p
            onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}
            className={getButtonClass('Pediatricians')}
          >
            Pediatricians
          </p>
          <p
            onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}
            className={getButtonClass('Neurologist')}
          >
            Neurologist
          </p>
          <p
            onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}
            className={getButtonClass('Gastroenterologist')}
          >
            Gastroenterologist
          </p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item) => (
            <div
              key={item._id} // Assuming `_id` is unique for each doctor
              onClick={() => navigate(`/appointment/${item._id}`)} // Fixed missing `navigate` import
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
