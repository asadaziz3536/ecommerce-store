import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-[url('@/assets/images/hero.jpg')] bg-no-repeat bg-cover !py-0"> 
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="hero bg-[url('@/assets/images/hero.jpg')] bg-no-repeat bg-cover  min-h-[100vh] flex items-center ">
          <div className="container max-w-screen-xl m-auto">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-semibold">Classic Exclusive</p>
              <div>
                <h1 className="font-bold text-6xl">Women's Collection</h1>
                <p className="text-3xl pt-3">UPTO 40% OFF</p>
              </div>
              <Button className="flex self-start items-center bg-black text-white   gap-2">
                Shop Now <FaArrowRightLong color="white" />
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero   min-h-[100vh] flex items-center ">
          <div className="container max-w-screen-xl m-auto">
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-semibold">Classic Exclusive</p>
              <div>
                <h1 className="font-bold text-6xl">Women's Collection</h1>
                <p className="text-3xl pt-3">UPTO 40% OFF</p>
              </div>
              <Button className="flex self-start w-auto items-center bg-black text-white  px-5 py-4 h-auto gap-2 cursor-pointer">
                Shop Now <GoArrowRight color="white" />
              </Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
      </section>
  );
};

export default Hero;
