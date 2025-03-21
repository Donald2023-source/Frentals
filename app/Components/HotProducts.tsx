import { getHotProducts } from "@/lib/getData";
import { ProductData, StoreState } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";


const HotProducts = async () => {
  const HotProducts: ProductData[] = await getHotProducts();

  return (
    <div className="flex overflow-auto max-w-full gap-5 ">
      {HotProducts.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

export default HotProducts;
