import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logoipsum-389.svg";
import { MainMenu } from "./MainMenu";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(true);

  // handle Click
  const handleClick = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);



 return ()=>    window.removeEventListener("resize", handleResize);



  }, []);

  return (
    <div className="flex justify-between items-center p-4 md:px-10 md:py-4 sticky top-0 bg-white z-50">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        {openNav && <MainMenu onClose={() => setOpenNav(!openNav)} />}
      </div>
      <div className="action-btns flex gap-4 items-center">
        <RxHamburgerMenu className="visible md:hidden" onClick={handleClick} />
        <IoSearch className="cursor-pointer" />
        <FaRegHeart className="cursor-pointer" />
        <FiShoppingCart className="cursor-pointer" />
        <Button className="bg-black text-white cursor-pointer">Login </Button>
      </div>
    </div>
  );
};

export default Navbar;
