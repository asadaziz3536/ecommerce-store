import BestSeller from "@/components/common/BestSeller";
import Categories from "@/components/common/Categories";
import Footer from "@/components/common/Footer";
import Hero from "@/components/common/Hero";
import InstaStoreis from "@/components/common/InstaStoreis";
import MonthlyDeals from "@/components/common/MonthlyDeals";
import StoreFeatures from "@/components/common/StoreFeatures";
import Testimonials from "@/components/common/testimonials";

const Home = () => {
  return (
    <div>
    
      <Hero />
      <Categories />
      <BestSeller />
      <MonthlyDeals />
      <Testimonials />
      <InstaStoreis />
      <StoreFeatures />
    </div>
  );
};

export default Home;
