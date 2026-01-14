import CategoryCard from "@/components/common/CategoryCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import api from "@/api";
import { toast } from "react-toastify";

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const response = await api.get<Category[]>("categories");
        const data = await response.data;
        setCategories(data);
      } catch (error: any) {
        toast.error(error.message);
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
