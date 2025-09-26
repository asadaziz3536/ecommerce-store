import { useEffect, useState } from "react";

import cardImg from "@/assets/images/hero.jpg";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface CardItem {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}

interface Props {
  card: CardItem;
}
const UserCard = ({ card }: Props) => {

  const navigate=useNavigate()
  return (
    <div className="rounded-md group relative">
      <div className="w-full h-100 relative">
        <img
          className="w-full h-full object-cover rounded-md"
          src={card.avatar}
          alt=""
        />
      </div>
      <div className="aboslute flex justify-between items-end opacity-0 group-hover:opacity-100 absolute text-white bg-[#0000006e] inset-0 rounded-md p-3 pb-9   transform transition-all ease-in-out duration-300">
        <div>
          <h3 className="font-medium text-xl  translate-y-[70px] group-hover:translate-y-0 transform ease-in-out duration-300">
            {card.name}
          </h3>
          <p className="translate-y-[90px] group-hover:translate-y-0 transform ease-in-out duration-300">
            {card.email}
          </p>
        </div>
        <div className="transform translate-x-[-40px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-300">
          <Button onClick={()=>navigate(`/dashboard/users/${card.id}`)}>View</Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
