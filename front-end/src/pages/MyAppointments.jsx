import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Appointments</h2>

      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-6">
            <img 
              src={item.image || 'https://via.placeholder.com/100'} 
              alt={item.name || 'Doctor'} 
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            />
            
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-700">{item.name || 'Unknown Doctor'}</p>
              <p className="text-sm text-gray-500">{item.specialty || 'No specialty'}</p>
              <p className="text-sm font-semibold mt-2">Address:</p>
              <p className="text-sm text-gray-600">{item.address?.line1 || 'No address available'}</p>
              <p className="text-sm text-gray-600">{item.address?.line2 || ''}</p>
              <p className="text-sm mt-2"><span className="font-semibold">Date & Time:</span> 25, July | 8:40 PM</p>
            </div>

            <div className="flex space-x-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                Pay Online
              </button>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
