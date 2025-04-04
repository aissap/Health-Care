import React, { useState } from "react";
import { assets } from "../assets/assets"; // Ensure correct import path

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Aissa Zerrad",
    image: assets.profile_pic,
    email: "jesus.jesus.core@gmail.com",
    phone: "+212 707 696 305",
    address: {
      line1: "13th Cross, Guercif",
      line2: "Boulevard Khalid Bno Lwalid, Guercif, Morocco",
    },
    gender: "Male",
    dob: "2000-02-14",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // Handle Input Change
  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageFile(file);
      setUserData({ ...userData, image: imageURL });
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      {/* Profile Picture at the Top Left */}
      <div className="flex items-center space-x-6">
        <label htmlFor="profile-pic-upload" className="relative cursor-pointer">
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"
          />
          {isEdit && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold rounded-full">
              Change
            </div>
          )}
        </label>
        <input
          type="file"
          id="profile-pic-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <div>
          {isEdit ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
          )}
          <p className="text-gray-500">{userData.email}</p>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Profile Information */}
      <div className="space-y-4">
        <div>
          <label className="text-gray-600 font-medium">Phone</label>
          {isEdit ? (
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-700">{userData.phone}</p>
          )}
        </div>

        <div>
          <label className="text-gray-600 font-medium">Address</label>
          {isEdit ? (
            <>
              <input
                type="text"
                name="line1"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData({ ...userData, address: { ...userData.address, line1: e.target.value } })
                }
                className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="line2"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData({ ...userData, address: { ...userData.address, line2: e.target.value } })
                }
                className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            </>
          ) : (
            <>
              <p className="text-gray-700">{userData.address.line1}</p>
              <p className="text-gray-700">{userData.address.line2}</p>
            </>
          )}
        </div>

        <div className="flex justify-between">
          <div>
            <label className="text-gray-600 font-medium">Gender</label>
            {isEdit ? (
              <select
                name="gender"
                value={userData.gender}
                onChange={handleInputChange}
                className="w-full border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            ) : (
              <p className="text-gray-700">{userData.gender}</p>
            )}
          </div>
          <div>
            <label className="text-gray-600 font-medium">Date of Birth</label>
            {isEdit ? (
              <input
                type="date"
                name="dob"
                value={userData.dob}
                onChange={handleInputChange}
                className="border rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-700">{userData.dob}</p>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsEdit(!isEdit)}
          className="bg-blue-600 text-white px-5 py-2 rounded-md mt-4 hover:bg-blue-700 transition"
        >
          {isEdit ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
