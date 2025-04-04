import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import verifiedIcon from "../assets/verified_icon.svg";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

// Import Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    if (Array.isArray(doctors) && doctors.length > 0) {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo || null);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      generateAvailableSlots();
    }
  }, [docInfo]);

  const generateAvailableSlots = () => {
    const allSlots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        currentDate.setHours(Math.max(10, currentDate.getHours() + 1));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      allSlots.push(timeSlots);
    }
    setDocSlots(allSlots);
  };

  return (
    docInfo && (
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left Side - Doctor's Image */}
        <div className="sm:w-1/3 min-w-[250px]">
          <img
            className="bg-blue-400 w-full rounded-lg"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Right Side - Doctor Info & Booking */}
        <div className="flex-1 border border-gray-600 rounded-lg p-8 py-7 bg-white min-h-[450px]">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}{" "}
            <img className="w-5" src={verifiedIcon} alt="Verified Icon" />
          </p>
          <p>
            {docInfo.degree || "N/A"} - {docInfo.speciality || "Unknown Specialty"}
          </p>
          <p className="text-gray-500 font-medium mt-2">
            Appointment fee:{" "}
            <span className="text-gray-600">
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
          <button className="mt-4 py-2 px-4 border rounded-full bg-primary text-white">
            Book Appointment
          </button>

          {/* About Section */}
          <div className="mt-6">
            <p className="text-lg font-medium">
              About <img src={assets.info_icon} alt="Info" className="inline" />
            </p>
            <p className="text-sm text-gray-600 mt-2">{docInfo.about}</p>
          </div>

          {/* Booking Slots Section */}
          <div className="mt-6">
            <p className="text-lg font-medium">Booking Slots</p>

            {/* Days of the Week */}
            <div className="flex gap-3 items-center w-full overflow-x-auto scroll-smooth mt-4">
              {docSlots.length > 0 &&
                docSlots.map((item, index) => (
                  <div
                    key={index}
                    className={`text-center py-3 px-4 rounded-full cursor-pointer transition duration-300 ${
                      slotIndex === index
                        ? "bg-primary text-white"
                        : "border border-gray-300 text-gray-600"
                    }`}
                    onClick={() => setSlotIndex(index)}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))}
            </div>

            {/* Time Slots Swiper - Improved */}
            <div className="mt-4 relative">
              <Swiper
                slidesPerView={3}
                spaceBetween={8}
                freeMode={true}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                modules={[FreeMode]}
                className="flex items-center justify-center"
                style={{ width: "100%", maxWidth: "350px" }}
              >
                {docSlots.length > 0 &&
                  docSlots[slotIndex]?.map((item, index) => (
                    <SwiperSlide key={index} className="w-auto">
                      <p
                        onClick={() => setSlotTime(item.time)}
                        className={`text-sm font-medium px-4 py-2 rounded-full cursor-pointer transition ${
                          item.time === slotTime
                            ? "bg-primary text-white"
                            : "text-gray-500 border border-gray-300 bg-white"
                        }`}
                        style={{ minWidth: "70px", textAlign: "center" }}
                      >
                        {item.time}
                      </p>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>

            <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
              Book an appointment
            </button>
          </div>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
