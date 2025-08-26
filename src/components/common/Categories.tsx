import React, { useRef } from "react";
import CategoryCard from "./CategoryCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";



const Categories = () => {
  const swiperRef = useRef(null);
  return (
    <div className="container max-w-screen-xl m-auto py-[40px] md:py-[100px] px-[15px]">
      <div className="flex justify-between items-center py-8">
        <h2 className="font-semibold text-3xl">Shop by Categories</h2>
        <div className="flex gap-3">
          <Button className="cursor-pointer" variant={"secondary"}>
            <GoArrowLeft />{" "}
          </Button>
          <Button className="cursor-pointer" onClick={() => swiperRef.current?.slideNext()}>
            {" "}
            <GoArrowRight />
          </Button>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}

       breakpoints={{
           320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
       }}
        //   navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <CategoryCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
