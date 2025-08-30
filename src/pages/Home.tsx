import BestSeller from "@/components/common/BestSeller";
import Categories from "@/components/common/Categories";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InstaStoreis from "@/components/common/InstaStoreis";
import MonthlyDeals from "@/components/common/MonthlyDeals";
import StoreFeatures from "@/components/common/StoreFeatures";
import Testimonials from "@/components/common/testimonials";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
        const data = response.data;

        setProducts(data);
      });
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = () => {
      axios
        .get("https://api.escuelajs.co/api/v1/categories")
        .then((response) => {
          const data = response.data;

          console.log("categories", data);

          setCategories(data);
        });
    };

    getCategories();
  }, []);
  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <BestSeller products={products} />
      <MonthlyDeals />
      <Testimonials />
      <InstaStoreis />
      <StoreFeatures />
    </div>
  );
};

export default Home;
