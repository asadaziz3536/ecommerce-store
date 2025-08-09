import React from "react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import MonthlyDealImg from "@/assets/images/raamin-ka-uR51HXLO7G0-unsplash.jpg"

const MonthlyDeals = () => {
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
              <div className="border-1 border-gray-200 rounded-lg p-3 text-center w-[85px]">
                <p className="font-bold text-2xl">120</p>
                <span>Days</span>
              </div>
              <div className="border-1 border-gray-200 rounded-lg p-3 text-center w-[85px]">
                <p className="font-bold text-2xl">18</p>
                <span>Hours</span>
              </div>
              <div className="border-1 border-gray-200 rounded-lg p-3 text-center w-[85px]">
                <p className="font-bold text-2xl">15</p>
                <span>Minutes</span>
              </div>
              <div className="border-1 border-gray-200 rounded-lg p-3 text-center w-[85px]">
                <p className="font-bold text-2xl">10</p>
                <span>Secs</span>
              </div>
            </div>
            <Button className="flex self-start w-auto px-5 py-4 h-auto">View all Products <GoArrowRight color="white" /></Button>
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
