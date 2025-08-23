import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaRegHeart, FaStar } from "react-icons/fa6";
import StoreFeatures from "@/components/common/StoreFeatures";
import RelatedProducts from "@/components/common/RelatedProducts";

const ProductDetail = () => {
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
        <div></div>
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
          <TabsContent value="Reviews">Change your password here.</TabsContent>
        </Tabs>
      </div>

    <RelatedProducts />

      <StoreFeatures   />
    </div>
  );
};

export default ProductDetail;
