import React from "react";
import ProductCard from "./ProductCard";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
interface Product {
  category: Category;
  creationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  slug: string;
  title: string;
  updatedAt: string;
}

interface Props {
  products: Product[];
}
const RelatedProducts = ({ products }: Props) => {
  return (
    <div className="py-20">
      <h2 className="font-semibold text-4xl pb-6">Related Products</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {products.slice(0, 8).map((product, index) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
