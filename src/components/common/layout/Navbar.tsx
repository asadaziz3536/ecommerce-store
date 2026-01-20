import { useEffect, useLayoutEffect, useRef, useState } from "react";
import logo from "@/assets/images/site-logo.svg";
import { MainMenu } from "../../common/MainMenu";
import { Button } from "../../ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { useAuth } from "@/context/AuthContext";
import InstallButton from "../InstallButton";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isReady, setIsReady] = useState(false);
  const [isToken, setIsToken] = useState(localStorage.getItem("token"));
  const { user } = useAuth();

  const headerRef = useRef(null);
  const navigate = useNavigate();

  // handle Click
  const handleClick = () => {
    setOpenNav(!openNav);
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpenNav(true);
      } else {
        setOpenNav(false);
      }

      setIsReady(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (openNav && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalCount = cart.reduce(
    (prev, curr) => prev + (curr.quantity || 0),
    0,
  );

  return (
    <div
      ref={headerRef}
      className={`flex justify-between items-center p-4 md:px-10 border-b ${
        isScrolled ? "md:py-2" : "md:py-4"
      } sticky top-0 right-0 left-0 bg-white z-[1000] ${
        isScrolled ? "shadow-md" : ""
      } transition-all ease-in-out duration-300`}
    >
      <div
        className={`md:hidden bg-black/50 fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          openNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenNav(false)}
      ></div>

      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="menu bg-black md:bg-transparent">
        {<MainMenu onClose={() => setOpenNav(!openNav)} isOpen={openNav} />}
      </div>
      <div className="action-btns flex gap-4 items-center">
        <RxHamburgerMenu
          className="visible md:hidden z-50"
          onClick={handleClick}
        />
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
          title="cart"
        >
          <span className="absolute right-[-12px] top-[-12px] text-white flex items-center justify-center text-xs bg-red-500 w-[20px] h-[20px] rounded-full">
            {totalCount}
          </span>
          <FiShoppingCart />
        </div>

        <Button
          onClick={
            isToken ? () => navigate("/dashboard") : () => navigate("/login")
          }
          className="bg-black text-white cursor-pointer px-7"
        >
          {user ? "Dashboard" : "Login"}
        </Button>
        <InstallButton />
      </div>
    </div>
  );
};

export default Navbar;
