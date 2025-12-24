import { useEffect, useState } from "react";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "@/components/common/ProductCard";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { ChevronUp } from "lucide-react";
import api from "@/api";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [openItems, setOpenItems] = useState({});
  const [price, setPrice] = useState<[number, number]>([0, 2000]);
  const [display, setDisplay] = useState("grid");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategoryFromURL = searchParams.get("category");

  const handleNavigation = (nav: any) => navigate(nav);
  const handlePrice = (value: number[]) => setPrice(value as [number, number]);

  const toggle = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Fetch categories
  useEffect(() => {
    setLoading(true);
    api
      .get("categories")
      .then((res) => setCategories(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Fetch products with API filtering
  useEffect(() => {
    const fetchProducts = async () => {
      if (categories.length === 0) return;

      setLoading(true);
      try {
        let results: any[] = [];

        // If no categories selected, fetch all products within price range
        if (selectedCategories.length === 0) {
          const res = await api.get("products", {
            params: {
              price_min: price[0],
              price_max: price[1],
            },
          });
          results = res.data;
        } else {
          // Fetch products for each selected category
          const promises = selectedCategories.map((catSlug) => {
            const category = categories.find((c: any) => c.slug === catSlug);
            if (!category) return Promise.resolve({ data: [] });
            return api.get("products", {
              params: {
                price_min: price[0],
                price_max: price[1],
                categoryId: category.id,
              },
            });
          });

          const responses = await Promise.all(promises);
          responses.forEach((res) => (results = results.concat(res.data)));
        }

        // Sort optionally (e.g., by ID)
        results.sort((a, b) => a.id - b.id);

        // Total products for pagination
        setTotalProducts(results.length);
        setTotalPages(Math.ceil(results.length / itemsPerPage));

        // Apply client-side pagination
        const start = (currentPage - 1) * itemsPerPage;
        const paginated = results.slice(start, start + itemsPerPage);
        setProducts(paginated);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategories, price, currentPage, categories]);

  // Sync category from URL
  useEffect(() => {
    if (selectedCategoryFromURL) {
      setSelectedCategories([selectedCategoryFromURL]);
    }
  }, [selectedCategoryFromURL]);
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, price]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages]);

  return (
    <div className="container max-w-screen-xl m-auto py-16 px-5 xl:px-0">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => handleNavigation("/")}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => handleNavigation("/products")}>
                All Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-12 gap-4 pt-10">
        {/* Sidebar Filters */}
        <div className="col-span-12 md:col-span-3">
          <Collapsible
            open={!openItems["first"]}
            onOpenChange={() => toggle("first")}
          >
            <CollapsibleTrigger className="flex  items-center justify-between font-bold text-lg w-full">
              Product Categories
              {!openItems["first"] ? <FaChevronUp /> : <FaChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              {loading
                ? Array.from({ length: 7 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className="flex items-center gap-1.5 w-full h-6 mb-1"
                    />
                  ))
                : categories.map((category: any) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-1.5">
                        <Checkbox
                          checked={selectedCategories.includes(category.slug)}
                          onCheckedChange={() =>
                            setSelectedCategories((prev) =>
                              prev.includes(category.slug)
                                ? prev.filter((cat) => cat !== category.slug)
                                : [...prev, category.slug]
                            )
                          }
                        />
                        <div className="ml-1">{category.name}</div>
                      </div>
                    </div>
                  ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Price Filter */}
          <Collapsible
            open={!openItems["second"]}
            onOpenChange={() => toggle("second")}
            className="pt-8"
          >
            <CollapsibleTrigger className="flex  items-center justify-between font-bold text-lg w-full">
              Filter by Price
              {!openItems["second"] ? <FaChevronUp /> : <FaChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-4">
              <span>
                Price: ${price[0]} - ${price[1]}
              </span>
              <Slider
                max={2000}
                step={1}
                value={price}
                onValueChange={handlePrice}
                className="pt-5 w-full"
              />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Products List */}
        <div className="col-span-12 md:col-span-9">
          {totalProducts > 0 && !loading && (
            <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Button variant={"outline"} onClick={() => setDisplay("grid")}>
                  <IoGridOutline />
                </Button>
                <Button variant={"outline"} onClick={() => setDisplay("list")}>
                  <FaListUl />
                </Button>
                <span className="font-medium">
                  Showing{" "}
                  {totalProducts === 0
                    ? 0
                    : (currentPage - 1) * itemsPerPage + 1}
                  -{Math.min(currentPage * itemsPerPage, totalProducts)} of{" "}
                  {totalProducts}
                </span>
              </div>
            </div>
          )}

          {totalProducts === 0 && !loading && (
            <div className="flex justify-center items-center">
              <p className="font-bold">No product found</p>
            </div>
          )}

          {display === "grid" && (
            <div className="grid grid-cols-12 gap-8 pt-12">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="col-span-12 md:col-span-4">
                      <ProductCard loading={loading} />
                    </div>
                  ))
                : products.map((product: any) => (
                    <div key={product.id} className="col-span-12 md:col-span-4">
                      <ProductCard product={product} productId={product.id} />
                    </div>
                  ))}
            </div>
          )}

          {display === "list" && (
            <div className="grid md:grid-cols-1 gap-8 pt-12">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="col-span-4">
                      <ProductCard loading />
                    </div>
                  ))
                : products.map((product: any) => (
                    <div key={product.id} className="col-span-4">
                      <ProductCard product={product} />
                    </div>
                  ))}
            </div>
          )}

          {totalProducts > 0 && !loading && (
            <Pagination className="justify-end pt-10">
              <PaginationContent>
                <PaginationItem className="cursor-pointer">
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          className={
                            currentPage === page ? "bg-black text-white" : ""
                          }
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  // Ellipsis logic
                  if (
                    (page === currentPage - 2 && page > 1) ||
                    (page === currentPage + 2 && page < totalPages)
                  ) {
                    return (
                      <PaginationItem key={`ellipsis-${page}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }

                  // Hide other pages
                  return null;
                })}

                <PaginationItem className="cursor-pointer">
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
