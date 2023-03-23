import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { BsChatSquareDots } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full min-h-[50px] absolute z-10 flex justify-between item-center text-white bg-gray-700/80">
      {/* desktop view */}
      <ul className="hidden sm:flex px-4 py-4">
        <li>
          <a href="/" className="px-4">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="px-4">
            Gallery
          </a>
        </li>
        <li>
          <a href="/" className="px-4">
            Deals
          </a>
        </li>
        <li>
          <a href="/" className="px-4">
            Contact
          </a>
        </li>
      </ul>
      {/* Icons */}
      <div className="flex justify-between py-4">
        <FaFacebookF className="mx-4" />
        <FaTwitter className="mx-4" />
        <FaGoogle className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/* Hambruger menu */}
      <div className="sm:hidden z-20" onClick={handleNav}>
        <FaBars size={30} className="cursor-pointer my-4 mr-4" />
      </div>

      {/* Mobile view */}

      <div
        className={
          nav
            ? " sm:hidden sm:ease-in duration-500 backdrop-blur-md absolute text-gray-300 top-0 left-0 h-screen w-screen px-5 py-5 bg-black/80 flex flex-col"
            : "hidden absolute top-0 h-screen left-[100] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-4 hover:bg-white hover:text-black px-1 rounded-2xl">
            <a href="/" >
              Home  
            </a>
          </li>
          <li className="text-2xl py-4 hover:bg-white hover:text-black px-1 rounded-2xl">
            <a href="/">
              Gallery
            </a>
          </li>
          <li  className="text-2xl py-4 hover:bg-white hover:text-black px-1 rounded-2xl">
            <a href="/">
              Deals
            </a>
          </li>
          <li className="text-2xl py-4 hover:bg-white hover:text-black px-1 rounded-2xl">
            <a href="/" >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
