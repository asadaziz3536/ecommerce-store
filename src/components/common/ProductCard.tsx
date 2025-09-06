import React, { useEffect, useState } from "react";

import CardImage from "@/assets/images/hero.jpg";
import { Button } from "../ui/button";
import { TiStarOutline } from "react-icons/ti";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



interface Props{
  product:object,
}

const ProductCard = ({product}:Props) => {
  const [cart,setCart]=useState([])

  const navigate=useNavigate()

  const handleClick=(id)=>{
   navigate(`/ProductDetail/${id}`)
  }
  const addToCart=(product:object)=>{


 
    setCart([...cart, product])




  }


  useEffect(()=>{
    console.log("cart:", cart )
  },[cart])
  return (

    
    <div className="flex flex-col group cursor-pointer border-1 rounded-xl">
     
      <div className="relative">
        <img
          className="w-full h-[360px] object-cover rounded-tr-md rounded-tl-md rounded-br-0 rounded-bl-0"
          src={product?.images[0]}
          alt=""
        />
        <div className="action-btns absolute top-6 right-6">
          <ul className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-y-3.5 group-hover:translate-y-0 transition-all ease-in-out duration-300">
            <li className="bg-white  p-3 rounded-full hover:bg-gray-700 hover:text-white">
              <TiStarOutline />
            </li>
            <li className="bg-white  p-3 rounded-full hover:bg-gray-700 hover:text-white">
              <TbArrowsLeftRight />
            </li>
            <li className="bg-white  p-3 rounded-full hover:bg-gray-700 hover:text-white" onClick={()=>handleClick(product.id)}>
              <FiEye />
            </li>
          </ul>
        </div>

        <Button onClick={()=>addToCart(product)} className="bg-white text-black border-0 absolute bottom-6 z-50 w-auto left-3.5 right-3.5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-700 hover:text-white" size={"default"}>
          Add to Cart
        </Button>
      </div>
      <div className="p-4">
        <h3 className="font-medium overflow-ellipsis overflow-hidden">{product?.title}</h3>
        <p>{product?.category.name}</p>
        <span className="mr-2">{product?.price}</span>
        <span className="line-through text-gray-400">$40.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
