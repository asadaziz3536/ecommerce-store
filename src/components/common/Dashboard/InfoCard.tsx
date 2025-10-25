import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

import { ReactElement } from "react";

interface Props {
  cardIcon: ReactElement;
  iconBg: string;
  title: string;
  totalAmount: string;
  percentage:string;
  todayTotal:number;
  increment:boolean;

}


const InfoCard = ({ title, totalAmount, cardIcon, iconBg,percentage, todayTotal, increment }: Props) => {
  return (
    <div className="border shadow-md p-4 rounded-om rounded-[20px] flex flex-col gap-3">
      <div className="flex  items-center  gap-2">
        <span
          className={`flex items-center justify-center ${iconBg==="blue"? "bg-blue-700":iconBg==="sky"? "bg-sky-500":iconBg==="orange"? "bg-orange-500":iconBg==="red"? "bg-red-500":""} w-10 h-10 rounded-full text-white`}
        >
          {cardIcon}
        </span>
        <span>{title}</span>
      </div>
      <h3 className="font-bold text-2xl title">{totalAmount}</h3>
      <p className="flex gap-2">
        <span>{percentage}</span>
       {increment ?  <GoArrowUpRight className="text-green-700" /> :   <GoArrowDownRight className="text-red-700" /> } |
        <span className="text-gray-500">+${todayTotal} today</span>
      </p>
    </div>
  );
};

export default InfoCard;
