import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[]; // array of strings
  category: {
    id: number;
    name: string;
    image: string;
  };
}

interface Props {
  products: Product[];
  loading?: boolean;
}

const BestSeller = ({ products, loading }: Props) => {
  return (
    <div className="container max-w-screen-xl m-auto py-[40px] md:py-[100px] px-[15px] px-auto">
      <h2 className="font-semibold text-3xl pb-10 md:pb-20 text-center">
        Recent Products
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ProductCard key={i} loading />
            ))
          : products
              .slice(0, 8)
              .map((product, index) => (
                <ProductCard key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default BestSeller;
