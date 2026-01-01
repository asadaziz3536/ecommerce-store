import BestSeller from "@/components/common/BestSeller";
import Categories from "@/components/common/Categories";
import Hero from "@/components/common/Hero";
import InstaStoreis from "@/components/common/InstaStoreis";
import MonthlyDeals from "@/components/common/MonthlyDeals";
import StoreFeatures from "@/components/common/StoreFeatures";
import Testimonials from "@/components/common/Testimonials";
import axios from "axios";
import { useEffect, useState } from "react";
import api from "@/api";
import { toast } from "react-toastify";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      api
        .get("products")
        .then((response) => {
          const data = response.data;

          setProducts(data);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = () => {
      api
        .get("categories")
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
