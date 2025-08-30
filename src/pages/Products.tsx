import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

import { GoPlus } from "react-icons/go";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Slider } from "@/components/ui/slider";

import ProductCard from "@/components/common/ProductCard";

import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleNavigation = (nav: any) => {
    navigate(nav);
  };

  const productCategories = ["Men", "Women"];

  const [open, setOpen] = useState(true);

  const [price, setPrice] = useState(300);

  const [display, setDisplay] = useState("grid");

  const handlePrice = (value: number[]) => {
    setPrice(value[0]);
  };

  useEffect(() => {
    const getProducts = async () => {
      axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
        const data = response.data;

        setProducts(data);
      });
    };
    getProducts();
  }, []);

  return (
    <div className="container max-w-screen-xl m-auto py-16 px-5 md:px-0">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer"
                onClick={() => handleNavigation("/shop")}
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
                All Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid md:grid-cols-12 gap-4 pt-10">
        <div className="col-span-3">
          <Collapsible open={open} onOpenChange={() => setOpen(!open)}>
            <CollapsibleTrigger className="font-bold text-lg">
              Product Categories
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <Collapsible>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Checkbox />
                    <div className="ml-1"> Men</div>
                  </div>
                  <CollapsibleTrigger>
                    <GoPlus />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>Content</CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Checkbox />
                    <div className="ml-1"> Women</div>
                  </div>
                  <CollapsibleTrigger>
                    <GoPlus />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>Content</CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Checkbox />
                    <div className="ml-1"> Kids</div>
                  </div>
                  <CollapsibleTrigger>
                    <GoPlus />
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>Content</CollapsibleContent>
              </Collapsible>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1"> Bags</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1"> Belts</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1"> Wallets</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1"> Watches</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1"> Accessories</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1"> Winter Wear</div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible
            open={open}
            onOpenChange={() => setOpen(!open)}
            className="pt-8"
          >
            <CollapsibleTrigger className="font-bold text-lg">
              Filter by Price
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <span>Price: ${price} - $2000</span>
              <Slider
                max={2000}
                step={1}
                value={[price]}
                onValueChange={handlePrice}
                className="pt-5"
              />
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={open}
            onOpenChange={() => setOpen(!open)}
            className="pt-8"
          >
            <CollapsibleTrigger className="font-bold text-lg">
              Filter by Color
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="bg-red-500 w-6 h-6 rounded-sm"></div>
                  <div className="ml-1">Red</div>
                </div>
                <span>(10)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="bg-blue-500 w-6 h-6 rounded-sm"></div>
                  <div className="ml-1">Blue</div>
                </div>
                <span>(10)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="bg-orange-500 w-6 h-6 rounded-sm"></div>
                  <div className="ml-1">Orange</div>
                </div>
                <span>(10)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="bg-black w-6 h-6 rounded-sm"></div>
                  <div className="ml-1">Black</div>
                </div>
                <span>(10)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="bg-green-500 w-6 h-6 rounded-sm"></div>
                  <div className="ml-1">Green</div>
                </div>
                <span>(10)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="bg-yellow-500 w-6 h-6 rounded-sm"></div>
                  <div className="ml-1">Yellow</div>
                </div>
                <span>(10)</span>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible
            open={open}
            onOpenChange={() => setOpen(!open)}
            className="pt-8"
          >
            <CollapsibleTrigger className="font-bold text-lg">
              Filter by Size
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1">S</div>
                </div>
                <span>(6)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1">M</div>
                </div>
                <span>(6)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1">L</div>
                </div>
                <span>(6)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1">XL</div>
                </div>
                <span>(6)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1">XXL</div>
                </div>
                <span>(6)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Checkbox />
                  <div className="ml-1">XXXL</div>
                </div>
                <span>(6)</span>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="col-span-9">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Button
                variant={"outline"}
                className="p-0 cursor-pointer"
                onClick={() => setDisplay("grid")}
              >
                <IoGridOutline />
              </Button>
              <Button
                variant={"outline"}
                className="p-0 cursor-pointer"
                onClick={() => setDisplay("list")}
              >
                <FaListUl />
              </Button>
              <span className="font-medium">Showing 1-16 of 72 results </span>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by latest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {display === "grid" && (
            <div className="grid md:grid-cols-12 gap-8 pt-12">
              {products.map((product, index) => (
                <div className="col-span-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          {display === "list" && (
            <div className="grid md:grid-cols-1 gap-8 pt-12">
              {products.map((product, index) => (
                <div className="col-span-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          <Pagination className="justify-end pt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Products;
