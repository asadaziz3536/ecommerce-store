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
 const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(true);
  const [price, setPrice] = useState<[number, number]>([0, 2000]);
  const [display, setDisplay] = useState("grid");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const handleNavigation = (nav: any) => navigate(nav);
  const handlePrice = (value: number[]) => setPrice(value as [number, number]);

  // Fetch all categories
  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // Fetch products and filter locally
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products/");
        let allProducts = res.data;

        // Filter by categories (OR logic)
        if (selectedCategories.length > 0) {
          allProducts = allProducts.filter(
            (p) => p.category && selectedCategories.includes(p.category.slug)
          );
        }

        // Filter by price
        allProducts = allProducts.filter(
          (p) => p.price >= price[0] && p.price <= price[1]
        );

        const totalCount = allProducts.length;

        // Pagination
        const start = (currentPage - 1) * itemsPerPage;
        const paginated = allProducts.slice(start, start + itemsPerPage);

        setProducts(paginated);
        setTotalProducts(totalCount);
        setTotalPages(Math.ceil(totalCount / itemsPerPage));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, price, currentPage]);
  return (
    <div className="container max-w-screen-xl m-auto py-16 px-5 xl:px-0">
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
      <div className="grid grid-cols-12 gap-4 pt-10">
        <div className="col-span-12 md:col-span-3">
          <Collapsible open={open} onOpenChange={() => setOpen(!open)}>
            <CollapsibleTrigger className="font-bold text-lg">
              Product Categories
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              {categories.map((category, index) => (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Checkbox
                      checked={selectedCategories.includes(category.slug)}
                      onClick={() =>
                        setSelectedCategories((prev) =>
                          prev.includes(category.slug)
                            ? prev.filter((cat) => cat !== category.slug)
                            : [...prev, category.slug]
                        )
                      }
                    />
                    <div className="ml-1"> {category.name}</div>
                  </div>
                </div>
              ))}
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
              <span>
                Price: ${price[0]} - ${price[1]}
              </span>
              <Slider
                max={2000}
                step={1}
                value={price?? [0,0]}
                onValueChange={handlePrice}
                className="pt-5 w-full"
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
        <div className="col-span-12 md:col-span-9">
          <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Button
                variant={"outline"}
                className="!px-6 cursor-pointer"
                onClick={() => setDisplay("grid")}
              >
                <IoGridOutline />
              </Button>
              <Button
                variant={"outline"}
                className="!px-6 cursor-pointer"
                onClick={() => setDisplay("list")}
              >
                <FaListUl />
              </Button>
              <span className="font-medium">Showing {itemsPerPage} of {totalProducts} results</span>
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
            <div className="grid grid-cols-12 gap-8 pt-12">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div className="col-span-12 md:col-span-4">
                      <ProductCard loading={loading} />
                    </div>
                  ))
                : products.map((product, index) => (
                    <div className="col-span-12 md:col-span-4">
                      <ProductCard
                        key={product.id}
                        product={product}
                        productId={product.id}
                      />
                    </div>
                  ))}
            </div>
          )}

          {display === "list" && (
            <div className="grid md:grid-cols-1 gap-8 pt-12">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div className="col-span-4">
                      <ProductCard loading />
                    </div>
                  ))
                : products.map((product, index) => (
                    <div className="col-span-4">
                      <ProductCard key={product.id} product={product} />
                    </div>
                  ))}
            </div>
          )}

          <Pagination className="justify-end pt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    className={
                      currentPage === i + 1 ? "bg-black text-white" : ""
                    }
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Products;
