import CardImage from "@/assets/images/hero.jpg";
import { useNavigate } from "react-router-dom";


interface Category{
  
creationAt: string
id: number
image: string
name: string
slug: string
updatedAt: string 
}

interface Props{

  category:Category
}
const CategoryCard = ({category}:Props) => {
  

 const navigate= useNavigate()

  const handleClick=(categorySlug:any)=>{
    console.log("category slug", categorySlug)
    navigate(`/products?category=${categorySlug}`)
  }
  return (
    <div className="relative">
      <div className="w-full h-[300px]">
        <img className="w-full h-full object-cover rounded-xl" src={category.image} alt="" />
      </div>
      <div>
      <span onClick={()=>handleClick(category.slug)} className="cursor-pointer absolute left-4 bottom-4 bg-white flex justify-center w-[90%] p-3 rounded-xl">{category.name}</span>

      </div>
    </div>
  );
};

export default CategoryCard;
