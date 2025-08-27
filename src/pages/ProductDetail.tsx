import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import StoreFeatures from "@/components/common/StoreFeatures";
import RelatedProducts from "@/components/common/RelatedProducts";

import ReviewerImage from "@/assets/images/hero.jpg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const navigate = useNavigate();

  const handleNavigation = (nav: any) => {
    navigate(nav);
  };

  return (
    <div className="container max-w-screen-xl m-auto py-16 px-5 md:px-0">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer"
                onClick={() => handleNavigation("/")}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer"
                onClick={() => handleNavigation("/products")}
              >
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer"
                onClick={() => handleNavigation("/products")}
              >
                Women Textured Handheld Bag
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-2 gap-4 pt-10">
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={18}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Yk Disney</h2>
          <p>Girls Pink Moana Printed Dress</p>
          <div className="flex items-center gap-1">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <span className="text-gray-400">5.0 (121 Reviews)</span>
          </div>
          <p>
            $80 <span className="text-gray-400">$100</span>
          </p>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            dignissimos delectus illum, facere recusandae consequuntur mollitia
            ipsa vel sit culpa eos? Laudantium maiores commodi quia hic quisquam
            rerum unde aliquid.
          </p>

          <h3 className="font-bold pb-3">Color</h3>
          <div className="flex items-center gap-1.5">
            <Button className="bg-red-500 w-7 h-8 rounded-sm cursor-pointer"></Button>
            <Button className="bg-blue-500  w-7 h-8 rounded-sm cursor-pointer"></Button>
            <Button className="bg-orange-500 w-7 h-8 rounded-sm cursor-pointer"></Button>
            <Button className="bg-black w-7 h-8 rounded-sm cursor-pointer"></Button>
            <Button className="bg-green-500 w-7 h-8 rounded-sm cursor-pointer"></Button>
            <Button className="bg-yellow-500 w-7 h-8 rounded-sm cursor-pointer"></Button>
          </div>

          <h3 className="font-bold pt-5 pb-3">Size</h3>
          <div className="flex items-center gap-1.5">
            <Button className="bg-transparent border-1 shadow-none w-7 h-8 rounded-sm cursor-pointer text-black">
              S
            </Button>
            <Button className="bg-transparent border-1 shadow-none  w-7 h-8 rounded-sm cursor-pointer text-black">
              M
            </Button>
            <Button className="bg-transparent border-1 shadow-none w-7 h-8 rounded-sm cursor-pointer text-black">
              L
            </Button>
            <Button className="bg-transparent border-1 shadow-none  w-7 h-8 rounded-sm cursor-pointer text-black">
              XL
            </Button>
            <Button className="bg-transparent border-1 shadow-none w-7 h-8 rounded-sm cursor-pointer text-black">
              XXL
            </Button>
            <Button className="bg-transparent border-1 shadow-none w-7 h-8 rounded-sm cursor-pointer text-black">
              XXL
            </Button>
          </div>

          <div className="flex gap-3 pt-9">
            <div className="flex border-1 border-gray-400 rounded-sm">
              <Button className="bg-transparent border-1 rounded-sm cursor-pointer border-0 text-black hover:bg-transparent">
                -
              </Button>
              <input type="text" name="" id="" className="w-10" />
              <Button className="bg-transparent border-1 rounded-sm cursor-pointer border-0 text-black hover:bg-transparent">
                +
              </Button>
            </div>

            <div className="grow-1">
              <Button className="bg-black rounded-sm cursor-pointer w-full">
                Add to Cart
              </Button>
            </div>
            <div>
              <Button className="bg-transparent border-1 rounded-sm cursor-pointer text-black">
                <FaRegHeart />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-30">
        <Tabs defaultValue="account" className="">
          <TabsList className="border-b">
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Information">
              Additional Information
            </TabsTrigger>
            <TabsTrigger value="Reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="Description">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="Information">
            Change your password here.
          </TabsContent>
          <TabsContent value="Reviews" className="pt-3">
            <h3 className="text-xl font-bold">Customer Reviews</h3>
            <div className="py-6 flex flex-col gap-3">
              <div className="flex gap-2">
                <img
                  className="w-15 h-15 rounded-full object-cover"
                  src={ReviewerImage}
                  alt=""
                />
                <div>
                  <h6 className="font-medium text-xl">Mark Williams</h6>

                  <div className="flex items-center gap-1">
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                  </div>
                </div>
              </div>
              <p className="font-bold text-lg">Excellent Product, I love it</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                totam qui repudiandae repellat quaerat. Odit aperiam ipsam
                nostrum aspernatur deserunt commodi repellendus numquam dolore
                nisi maxime quaerat sit, nulla unde!
              </p>
              <p className="text-gray-400">
                Review by <span className="font-medium text-black">Krist</span>{" "}
                Posted on{" "}
                <span className="font-medium text-black">June 05,2025</span>
              </p>
            </div>
            <hr />
            <div className="py-6 flex flex-col gap-3">
              <div className="flex gap-2">
                <img
                  className="w-15 h-15 rounded-full object-cover"
                  src={ReviewerImage}
                  alt=""
                />
                <div>
                  <h6 className="font-medium text-xl">Mark Williams</h6>

                  <div className="flex items-center gap-1">
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                    <FaStar size={20} color="orange" />
                  </div>
                </div>
              </div>
              <p className="font-bold text-lg">Excellent Product, I love it</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                totam qui repudiandae repellat quaerat. Odit aperiam ipsam
                nostrum aspernatur deserunt commodi repellendus numquam dolore
                nisi maxime quaerat sit, nulla unde!
              </p>
              <p className="text-gray-400">
                Review by <span className="font-medium text-black">Krist</span>{" "}
                Posted on{" "}
                <span className="font-medium text-black">June 05,2025</span>
              </p>
            </div>
            <hr />
            <h3 className="text-xl font-bold py-6">Add your Review</h3>
            <span className="pb-3 block font-medium">Your Rating</span>

            <div className="flex">
              <Button className="border-r p-2 bg-transparent rounded-none text-black shadow-none cursor-pointer hover:bg-transparent">
                <FaRegStar />
              </Button>
              <Button className="flex border-r p-2 bg-transparent rounded-none text-black shadow-none cursor-pointer hover:bg-transparent">
                <FaRegStar />
                <FaRegStar />
              </Button>
              <Button className="flex border-r p-2 bg-transparent rounded-none text-black shadow-none cursor-pointer hover:bg-transparent">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </Button>

              <Button className="flex border-r p-2 bg-transparent rounded-none text-black shadow-none cursor-pointer hover:bg-transparent">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </Button>

              <Button className="flex border-r p-2 bg-transparent rounded-none text-black shadow-none cursor-pointer hover:bg-transparent">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </Button>
            </div>

            <form action="" className="flex flex-col gap-5 pt-6">
              <div>
                <label htmlFor="" className="block font-medium pb-1">Name</label>
               <Input className="py-6 border-black"  placeholder="Enter Your Name" />
              </div>
               <div>
                <label htmlFor="" className="block font-medium pb-1">Email  Address</label>
               <Input className="py-6 border-black"  placeholder="Enter Your Email" />
              </div>
             <div>
                <label htmlFor="" className="block font-medium pb-1">Your Review</label>
             <Textarea className="py-4 border-black" placeholder="Enter Your Review" />
              </div>

              <Button className="max-w-max px-10 py-7">Submit</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>

      <RelatedProducts />

      <StoreFeatures />
    </div>
  );
};

export default ProductDetail;
