import { useEffect, useState } from "react";

import cardImg from "@/assets/images/hero.jpg";

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
  return (
    <div className="rounded-md group relative">
      <div className="w-full h-100 relative">
        <img
          className="w-full h-full object-cover rounded-md"
          src={card.avatar}
          alt=""
        />
      </div>
      <div className="absolute inset-0  flex-col justify-end items-center bg-[#00000073] text-white p-4 rounded-md pb-5 opacity-0  group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h3 className="transform font-medium text-xl translate-y-[70px] group-hover:translate-y-0 transition duration-300 ease-in-out">
          {card.name}
        </h3>
        <p className="transform translate-y-[70px] group-hover:translate-y-0 transition duration-300 ease-in-out">
          {card.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
