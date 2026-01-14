import BestSeller from "@/components/common/BestSeller";
import Categories from "@/components/common/Categories";
import Hero from "@/components/common/Hero";
import InstaStoreis from "@/components/common/InstaStoreis";
import MonthlyDeals from "@/components/common/MonthlyDeals";
import StoreFeatures from "@/components/common/StoreFeatures";
import Testimonials from "@/components/common/Testimonials";
import { useEffect, useState } from "react";
import api from "@/api";
import { toast } from "react-toastify";

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

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get<Product[]>("products");

        setProducts(response.data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = () => {
      api
        .get<Category[]>("categories")
        .then((response) => {
          const data = response.data;
          setCategories(data);
        })
        .catch((error) => {});
    };

    getCategories();
  }, []);

  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <BestSeller products={products} loading={loading} />
      <MonthlyDeals />
      <Testimonials />
      <InstaStoreis />
      <StoreFeatures />
    </div>
  );
};

export default Home;
