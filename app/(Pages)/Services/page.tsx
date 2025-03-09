"use client";

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import ProductCard from "@/app/Components/ProductCard";
import { getCategory, getProducts } from "@/lib/getData";
import { urlFor } from "@/sanity/lib/image";
import { Category, ProductData } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await getCategory();
      setCategories(fetchedCategories);

      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/category/${categoryId}`);
  };

  return (
    <div>
      <h2 className="font-semibold text-center text-2xl py-5">
        Browse Machinery Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        {categories.map((item) => (
          <div
            key={item._id}
            className="relative group cursor-pointer"
            onClick={() => handleCategoryClick(item._id)} // Pass category ID
          >
            <Image
              priority
              height={500}
              width={300}
              src={urlFor(item?.image).url()}
              alt={item?.title}
              className="h-52 rounded-xl hoverEffect hover:scale-105"
            />
            <div className="absolute top-0 rounded-xl hoverEffect hover:scale-105 h-full w-full bg-black/70" />
            <div className="absolute group-hover:scale-105 hoverEffect flex flex-col items-center x-10 top-1/2 left-0 right-0">
              <p className="font-semibold text-center text-white text-lg">
                {item?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {products.map((item) => (
          <ProductCard key={item?._id} title="Hot Deals For The Week" item={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
