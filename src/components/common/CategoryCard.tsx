import CardImage from "@/assets/images/hero.jpg";
const CategoryCard = () => {
  return (
    <div className="relative">
      <div className="w-full h-[300px]">
        <img className="w-full h-full object-cover" src={CardImage} alt="" />
      </div>
      <div>
      <span className="absolute left-4 bottom-4 bg-white flex justify-center w-[90%] p-3 rounded-xl">Casual Wear</span>

      </div>
    </div>
  );
};

export default CategoryCard;
