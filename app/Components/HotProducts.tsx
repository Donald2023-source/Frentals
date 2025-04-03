"use client"
import { getHotProducts } from "@/lib/getData";
import { ProductData, StoreState } from "@/types";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const HotProducts = () => {
  const [hotProducts, setHotProducts] = useState<ProductData[]>([])
  useEffect(() => {
    const hotProducts = async () => {
      const HotProducts: ProductData[] = await getHotProducts();
      setHotProducts(HotProducts)
    };
    hotProducts()
  }, []);

  return (
    <div className="flex overflow-auto max-w-full gap-5 ">
      {hotProducts.map((item) => (
        <ProductCard key={item?._id} item={item} />
      ))}
    </div>
  );
};

export default HotProducts;
