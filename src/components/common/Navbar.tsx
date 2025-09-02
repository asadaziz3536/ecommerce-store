import  { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/logoipsum-389.svg";
import { MainMenu } from "./MainMenu";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled]= useState(false);


 const headerRef= useRef(null);

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

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY> 8){
        setIsScrolled(true)

      }
      else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return ()=> window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div ref={headerRef} className={`flex justify-between items-center p-4 md:px-10 ${isScrolled? 'md:py-2':'md:py-4'} sticky top-0 bg-white z-50 ${isScrolled ? 'shadow-md':''} transition-all ease-in-out duration-300`}>
      <div className="logo">
        <Link to={"/"}>
        <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu">
        {openNav && <MainMenu onClose={() => setOpenNav(!openNav)} />}
      </div>
      <div className="action-btns flex gap-4 items-center">
        <RxHamburgerMenu className="visible md:hidden" onClick={handleClick} />
        <IoSearch className="cursor-pointer" />
        <FaRegHeart className="cursor-pointer" />
        <FiShoppingCart className="cursor-pointer" />
        <Button className="bg-black text-white cursor-pointer px-7">Login </Button>
      </div>
    </div>
  );
};

export default Navbar;
