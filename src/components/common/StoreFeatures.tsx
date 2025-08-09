import IconCard from "./IconCard";
import {MdOutlineLocalShipping}  from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import { BsCreditCard } from "react-icons/bs";




const StoreFeatures = () => {
  return (
    <section>
      <div className="container max-w-screen-xl m-auto py-[40px] md:py-[100px]">
        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
          <IconCard image={<MdOutlineLocalShipping size={50} />}   title="Free Shipping" description="Free Shipping for order above $150" />
          <IconCard image={<AiOutlineDollarCircle size={50} />}   title="Money Guarantee" description="Within 30 days for an exchange" />
          <IconCard image={<FaHeadphones size={50} />}   title="Online Support" description="24 hours a day, 7 days a week" />
          <IconCard image={<BsCreditCard size={50} />}   title="Flexible Payment" description="Pay with multiple credit cards" />
        </div>
      </div>
    </section>
  );
};

export default StoreFeatures;
