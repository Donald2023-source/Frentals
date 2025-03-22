import { getProducts } from "@/lib/getData";
import ProductCard from "./ProductCard";
import React from "react";
import { ProductData } from "@/types";

const ProductList = async () => {
  const Products: ProductData[] = await getProducts();

  return (
    <div className="flex overflow-auto max-w-full gap-5 ">
      {Products.map((item) => (
        <ProductCard key={item?._id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
