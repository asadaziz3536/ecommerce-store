import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-no-repeat bg-cover !p-0">
      <Swiper
        className="h-[calc(100vh-85px)]"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="hero bg-white md:bg-[url('@/assets/images/hero-1.png')] bg-no-repeat bg-cover h-full  flex items-center ">
            <div className="container max-w-screen-xl m-auto p-[15px] relative">
              <div className="flex flex-col gap-5">
                <p className="text-3xl font-semibold">Featured Collection</p>
                <div>
                  <h1 className="font-bold text-5xl">
                    Fashion, Electronics & More
                  </h1>
                  <p className="text-3xl pt-3">UPTO 40% OFF</p>
                </div>
                <Button
                  onClick={() => navigate("/products")}
                  className="flex self-start items-center bg-black text-white   gap-2"
                >
                  Shop Now <FaArrowRightLong color="white" />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero bg-white  md:bg-[url('@/assets/images/hero.jpg')] bg-no-repeat bg-cover  min-h-[100vh] flex items-center ">
            <div className="container max-w-screen-xl m-auto p-[15px] relative">
              <div className="flex flex-col gap-5">
                <p className="text-3xl font-semibold">Featured Collection</p>
                <div>
                  <h1 className="font-bold text-5xl">
                    Fashion, Electronics & More
                  </h1>
                  <p className="text-3xl pt-3">UPTO 40% OFF</p>
                </div>
                <Button
                  onClick={() => navigate("/products")}
                  className="flex self-start items-center bg-black text-white   gap-2"
                >
                  Shop Now <FaArrowRightLong color="white" />
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
