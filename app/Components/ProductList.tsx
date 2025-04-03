"use client";
import { getProducts } from "@/lib/getData";
import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import { ProductData } from "@/types";

const ProductList = () => {
  const [myProduct, setMyProducts] = useState<ProductData[]>([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const Products: ProductData[] = await getProducts();
      setMyProducts(Products);
    };
    fetchproducts();
  }, []);
  return (
    <div className="flex overflow-auto max-w-full gap-5 ">
      {myProduct.map((item) => (
        <ProductCard key={item?._id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
