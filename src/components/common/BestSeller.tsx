import ProductCard from "./ProductCard";

const BestSeller = () => {
  return (
    <div className="container max-w-screen-xl m-auto py-[40px] md:py-[100px] px-[15px] px-auto">
      <h2 className="font-semibold text-3xl pb-10 md:pb-20 text-center">
        Our Bestseller
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSeller;
