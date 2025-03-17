"use client";
import { getHotProducts } from "@/lib/getData";
import { ProductData, StoreState } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const HotProducts = async () => {
  const HotProducts: ProductData[] = await getHotProducts();
  console.log("Hot Products", HotProducts);

  return (
    <div className="flex overflow-auto max-w-full gap-5 ">
      {HotProducts.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default HotProducts;
