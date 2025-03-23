"use client";
import React, { useEffect } from "react";
import { Category } from "@/types";
import { getCategory } from "@/lib/getData";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const CategoryElipse = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData: Category[] = await getCategory();
      setCategories(categoriesData);
    };
    fetchCategories();
  }, [categories]);

  return (
    <div className="py-3 w-full">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-10 w-full justify-items-stretch">
        {categories.map((item) => (
          <Link
            key={item.title}
            className="flex flex-col items-center gap-2 w-full"
            href={`/category/${item?.title}`}
          >
            <Image
              className="h-20 object-cover rounded-full w-20"
              width={200}
              height={200}
              src={urlFor(item?.image).url()}
              alt={item?.title}
            />
            <h2 className="md:text-base text-sm font-semibold">
              {item?.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryElipse;
