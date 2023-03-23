import React, { useState, useTransition } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 left-4 z-[99] md:hidden"
      />
    </div>
  );
};

export default SideNav;
