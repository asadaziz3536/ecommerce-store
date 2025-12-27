import Logo from "@/assets/images/logoipsum-389.svg";
import { Link } from "react-router-dom";
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import VisaCard from "@/assets/icons/visa-card.svg";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 pt-[70px] px-[15px]">
      <div className="container max-w-screen-xl m-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <ul className="grid gap-4">
            <img className="pb-6" src={Logo} alt="" />
            <li className="flex items-center gap-2">
              <MdOutlinePhoneInTalk size={24} />
              <Link to="/">(704) 555 0127</Link>
            </li>
            <li className="flex items-center gap-2">
              <CiMail size={24} />
              <Link to="/"> kris@gmail.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <IoLocationOutline size={24} />
              <Link to="/">
                389 | Rachview Dr. Richardson, California 62639
              </Link>
            </li>
          </ul>
          <ul className="grid gap-4">
            <h5 className="text-white text-xl font-bold">Information</h5>
            <li className="flex items-center gap-2">
              <Link to="/">My Account</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/">Login</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/">My Cart</Link>
            </li>

            <li className="flex items-center gap-2">
              <Link to="/">My Whishlist</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/">Checkout</Link>
            </li>
          </ul>
          <ul className="grid gap-4">
            <h5 className="text-white text-xl font-bold">Service</h5>
            <li className="flex items-center gap-2">
              <Link to="/">About Us</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/">Careers</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/">Delivery Information</Link>
            </li>

            <li className="flex items-center gap-2">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
          <ul className="grid gap-4">
            <h5 className="text-white text-xl font-bold">Subscribe</h5>
            <p>
              Enter your email below to be the first to know about new
              collections and prodcut launches
            </p>

            <div className="flex items-center justify-between border p-3 gap-3 rounded-md h-[60px] group focus-within:border-2">
              <FaRegEnvelope size={30} />
              <input
                type="email"
                name=""
                id=""
                className="w-full border-0 focus-visible:border-0 outline-0"
                placeholder="Your Email"
              />

              <GoArrowRight size={30} />
            </div>
          </ul>
        </div>

        <hr className="border-t border-gray-400 mt-20" />

        <div className="flex flex-col items-center md:flex-row justify-between py-5">
          <div className="flex gap-2">
            <img src={VisaCard} alt="" />
            <img src={VisaCard} alt="" />
            <img src={VisaCard} alt="" />
            <img src={VisaCard} alt="" />
          </div>
          <div>
            <span>© 2024. Krist All rights reserved </span>
          </div>
          <div className="flex gap-3">
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
