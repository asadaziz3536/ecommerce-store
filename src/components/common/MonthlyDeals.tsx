import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import MonthlyDealImg from "@/assets/images/raamin-ka-uR51HXLO7G0-unsplash.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const MonthlyDeals = () => {








const [timeLeft,setTimeLeft]=useState({
days:0,
hours:0,
minutes:0,
seconds:0
  
})









useEffect(()=>{
  const targetTime=new Date("2025-12-31T23:59:59").getTime();

  console.log("target time", targetTime)

const timer=setInterval(()=>{



  const currentTime=new Date().getTime();


  const difference=targetTime-currentTime;

  


if(difference<=0){
clearInterval(timer)
return;
}


const days=Math.floor(difference/(24*60*60*1000));
const hours=Math.floor((difference/(60*60*1000))%24);
const minutes=Math.floor((difference/(60*1000))%60)
const seconds=Math.floor((difference/1000)%60)

setTimeLeft({days,hours,minutes,seconds})



}, 1000)



  return ()=> clearInterval(timer)

},[])



  return (
    <section>
      <div className="container max-w-screen-xl m-auto py-[40px] md:py-[100px]">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6 justify-center order-2 md:order-1">
            <h2 className="font-semibold text-3xl">Deals of the month</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptates quisquam ipsa sit sapiente? Aut officiis
              sequi, aliquam sunt recusandae adipisci eum amet eos quidem
              voluptatibus sint aliquid, in quibusdam.
            </p>

            <div className="flex gap-4 flex-wrap">
{[{label:"Days", value:timeLeft.days}
  ,{
    label:"Hours", value:timeLeft.hours
  },{
    label:"minutes", value:timeLeft.minutes
  },{
    label:"seconds", value:timeLeft.seconds
  }
].map((item)=>(
  <div className="border-1 border-gray-200 rounded-lg p-3 text-center w-[85px]">
  <p className="font-bold text-2xl">{item.value}</p>
  <span>{item.label}</span>
</div>


))

}
              
              
             
            
            </div>
            <Button onClick={()=>navigate("/products")} className="flex self-start w-auto" size={"lg"}>View all Products <FaArrowRightLong color="white" /></Button>
          </div>


          <div className="h-[300px] md:h-[500px] order-1 md:order-2">
            <img className="w-full h-full object-cover" src={MonthlyDealImg} alt="Monthly Deal Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyDeals;
