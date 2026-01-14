import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaRegStar, FaStar } from "react-icons/fa6";
import StoreFeatures from "@/components/common/StoreFeatures";
import RelatedProducts from "@/components/common/products/RelatedProducts";
import ReviewerImage from "@/assets/images/hero.jpg";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { addToCart } from "@/store/cart";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import api from "@/api";

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: [string, string, string];
  creationAt: string;
  updatedAt: string;
}

const ProductDetail = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const handleNavigation = (nav: any) => {
    navigate(nav);
  };
  const addProduct = () => {
    if (!product) return;
    dispatch(
      addToCart({
        ...product,
        quantity,
      })
    );
    toast.success("Product addded to cart successfully!");
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Product[]>("products");
        setProducts(response.data);

        const found = response.data.find((p) => p.id === Number(id)) || null;
        if (found) {
          setProduct(found); // main product
          setCategory(found.category.name);
        }
      } catch (error) {
        setProduct(null);
        setCategory("");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  if ((!loading && products.length === 0) || (!loading && product === null)) {
    return (
      <div className="container max-w-screen-xl m-auto py-16 px-5 md:px-0">
        <h1 className="text-2xl">Oops No Product Found!</h1>
      </div>
    );
  }
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
      <div className="grid grid-cols-12 md:grid-cols-2 gap-4 pt-10">
        <div className="col-span-12 md:col-span-1">
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              } as React.CSSProperties
            }
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2  w-full md:h-[600px]"
            slidesPerView={1}
          >
            {loading ? (
              <SwiperSlide>
                <Skeleton className="w-full h-full" />
              </SwiperSlide>
            ) : (
              product?.images.map((image) => (
                <SwiperSlide>
                  <img src={image} />
                </SwiperSlide>
              ))
            )}
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
            {loading
              ? [1, 2, 3, 4].map((i) => (
                  <SwiperSlide key={i}>
                    <div className="h-40 w-full">
                      {" "}
                      {/* fixed height for thumbnail */}
                      <Skeleton className="h-full w-full" />
                    </div>
                  </SwiperSlide>
                ))
              : product?.images.map((image) => (
                  <SwiperSlide>
                    <img src={image} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>

        <div className="col-span-12 md:col-span-1">
          {loading ? (
            <Skeleton className="h-[40px] w-24 rounded-4xl mb-2" />
          ) : (
            <span className="border p-2 px-4 rounded-4xl text-sm block max-w-max mb-2 font-medium">
              {product?.category.name}
            </span>
          )}
          <h2 className="font-bold text-2xl">
            {loading ? (
              <Skeleton className="h-8" />
            ) : (
              product?.title || "Product Not Found"
            )}
          </h2>

          <div className="flex items-center gap-1">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <span className="text-gray-400">5.0 (121 Reviews)</span>
          </div>
          <p>
            {loading ? (
              <Skeleton className="h-8 w-[50px]" />
            ) : (
              `$${product?.price}`
            )}
          </p>
          <p className="py-5 w-full">
            {loading ? (
              <>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
              </>
            ) : (
              product?.description
            )}
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
              <Button
                onClick={handleDecrement}
                className="bg-transparent  rounded-sm cursor-pointer border-r text-black hover:bg-transparent"
              >
                -
              </Button>
              <input
                type="number"
                name=""
                id=""
                className="w-10"
                min="1"
                value={quantity}
              />
              <Button
                onClick={handleIncrement}
                className="bg-transparent  rounded-sm cursor-pointer border-l text-black hover:bg-transparent"
              >
                +
              </Button>
            </div>

            <div className="grow-1">
              <Button
                onClick={addProduct}
                className="bg-black rounded-sm cursor-pointer w-full"
              >
                Add to Cart
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            expedita libero suscipit blanditiis quod quibusdam sunt, accusamus
            voluptates saepe iusto quasi harum aliquid ratione perferendis
            dolores quas aperiam tempore sit.
          </TabsContent>
          <TabsContent value="Information">
            <ul>
              <li className="flex gap-4">
                <p className="font-bold">Color</p>
                <span>Red, Blue, Orange, Black, Green, Yellow</span>
              </li>
              <li className="flex gap-4">
                <p className="font-bold">Size</p>
                <span>S, M, L, XL, XXL</span>
              </li>
            </ul>
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
                <label htmlFor="" className="block font-medium pb-1">
                  Name
                </label>
                <Input
                  className="py-6 border-black"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-medium pb-1">
                  Email Address
                </label>
                <Input
                  className="py-6 border-black"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="" className="block font-medium pb-1">
                  Your Review
                </label>
                <Textarea
                  className="py-4 border-black"
                  placeholder="Enter Your Review"
                />
              </div>

              <Button className="max-w-max">Submit</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      <RelatedProducts products={products} categoryName={category} />
      <StoreFeatures />
    </div>
  );
};

export default ProductDetail;
