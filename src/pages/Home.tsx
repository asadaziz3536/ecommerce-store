import BestSeller from "@/components/common/BestSeller";
import Categories from "@/components/common/Categories";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InstaStoreis from "@/components/common/InstaStoreis";
import MonthlyDeals from "@/components/common/MonthlyDeals";
import Navbar from "@/components/common/Navbar";
import StoreFeatures from "@/components/common/StoreFeatures";
import Testimonials from "@/components/common/testimonials";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <BestSeller />
      <MonthlyDeals />
      <Testimonials />
      <InstaStoreis />
      <StoreFeatures />
      <Footer />
    </div>
  );
};

export default Home;
