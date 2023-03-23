import React from "react";

export const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4">
      <form action="/" className="lg:flex lg:justify-between w-full p-4">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2 ">
            <option value="">Grand Antigua</option>
            <option value="">Key west</option>
            <option value="">Maldives</option>
            <option value="">Cozmuel</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input type="Date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input type="Date" className="border rounded-md p-2" />
          </div>
          <div className="hidden md:flex flex-col my-2 p-2 w-full">
            <label>Search</label>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-400 py-2 rounded-md text-white">
              Rates & Availibilties
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
