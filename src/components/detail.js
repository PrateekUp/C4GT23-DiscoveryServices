import React from "react";
import { useLocation } from "react-router-dom";
import Showtimes from "./timeslot";
import Carousel from "./carousel/carousel";

function getFacilityName(facility) {
  switch (facility) {
    case "ac":
      return "Air Conditioner";
    case "wifi":
      return "Wifi";
    case "parking":
      return "Parking";
    case "smartclass":
      return "Smart-Class";
    default:
      return "Catering Service";
  }
}
const Detail = () => {
  const location = useLocation();
  const roomDetails = location.state.roomDetails;
  const slots = location.state.slots;
  const images = [roomDetails.image];

  return (
    <>
      <div className="flex flex-col h-max bg-green-200 p-8 rounded shadow-md mt-8">
        <h1 className="font-bold text-[#18122B] text-2xl">
          {roomDetails.name}
        </h1>
        <h2 className="text-gray-400 text-lg font-semibold uppercase tracking-wider">
          {roomDetails.institute}
        </h2>
        <hr className="h-px my-2 w-64 mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="w-full h-[50vh] p-8">
          <Carousel images={images} />
        </div>
        {/* items */}
        <h2 className="text-xl font-bold text-wrap">Description</h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <h4 className="mb-4">{roomDetails.description}</h4>
        <h2 className="text-xl font-bold text-wrap mt-2"> Location </h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <h4>{roomDetails.state}</h4>
        <h2 className="text-xl font-bold text-wrap mt-2"> Facilities </h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex flex-wrap space-x-1 my-1">
          {roomDetails.facilities.map((facility, index) => (
            <span
              key={index}
              className="bg-blue-400 text-white px-2 py-1 my-1 rounded"
            >
              {getFacilityName(facility)}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-bold text-wrap mt-2"> Available Slots </h2>
        <hr className="h-px my-2 w-64 mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <Showtimes times={slots} />
      </div>
    </>
  );
};

export default Detail;
