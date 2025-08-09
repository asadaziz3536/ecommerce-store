import CardImg from "@/assets/images/hero.jpg";
import { FaInstagram } from "react-icons/fa";
import { Button } from "../ui/button";

const InstaCard = () => {
  return (
    <div className="relative group overflow-hidden">
      <img
        className="w-full h-[300px] object-cover group-hover:scale-125 transition-all ease-in-out duration-300"
        src={CardImg}
        alt=""
      />
      <div className="absolute inset-0 bg-[#00000061] flex items-center justify-center opacity-0 group-hover:opacity-100">
        <Button className="bg-white text-black w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer hover:text-white">
          <FaInstagram />
        </Button>
      </div>
    </div>
  );
};

export default InstaCard;
