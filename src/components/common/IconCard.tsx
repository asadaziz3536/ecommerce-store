import React, { Component, type ReactNode } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";


interface Props{
    title:string,
    description:string,
    image:ReactNode
}


const IconCard = (props:Props) => {
  return (
    <div className="flex flex-col gap-2">
      {props.image}
      <h3 className="font-bold text-xl">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default IconCard;
