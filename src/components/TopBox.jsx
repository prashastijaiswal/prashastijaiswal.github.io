import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

export const TopBox = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center-center   ">
        <BsChatSquareDots size={30} className="text-purple-600 " />
        <h1 className="text-gray-700 mx-3 ">INDIA.Bay</h1>
      </div>
      <div className=" hidden sm:flex items-center">
        <AiOutlineClockCircle size={20} className="mr-2 text-purple-800" />
        <p>9AM-5PM</p>
      </div>
      <div className=" hidden sm:flex items-center">
        <AiFillPhone size={30} className="pr-2 text-purple-800" />
        <p>+91 9394422717</p>
      </div>
      <button>Get a free Quote</button>
    </div>
  );
};
