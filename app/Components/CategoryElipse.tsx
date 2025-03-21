"use client";
import React, { useEffect } from "react";
import { Category } from "@/types";
import { getCategory } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Link } from "lucide-react";
const CategoryElipse = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData: Category[] = await getCategory();
      setCategories(categoriesData);
    };
    fetchCategories();
  }, []);

  return (
    <div className="py-3">
      <div>
        {categories.map((item) => (
          <Link href={`/category/${item?.title}`}>
            <Image
              className="h-20 object-cover rounded-full w-20"
              width={200}
              height={200}
              src={urlFor(item?.image).url()}
              alt={item?.title}
            />
            <h2>{item?.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryElipse;
