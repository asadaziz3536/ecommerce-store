import CategoryCard from "@/components/common/CategoryCard";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );

        const data = await response.data;
        setCategories(data);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);
  return (
    <section>
      <div className="container max-w-screen-xl m-auto">
        <div className="grid grid-cols-12 gap-5">
          {loading
            ? Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                  {<Skeleton className="h-[300px]" />}
                </div>
              ))
            : categories.map((category, index) => (
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <CategoryCard category={category} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
