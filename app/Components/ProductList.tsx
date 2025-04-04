"use client";
import { getProducts } from "@/lib/getData";
import ProductCard from "./ProductCard";
import React, { useEffect, useState } from "react";
import { ProductData } from "@/types";
import ProductCardWireframe from "@/app/Components/ProductWireframe"; 

const ProductList = () => {
  const [myProduct, setMyProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const Products = await getProducts();
        setMyProducts(Products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setMyProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Loading state with wireframes
  if (loading) {
    return (
      <div className="flex overflow-auto max-w-full gap-5">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <ProductCardWireframe
                item={{
                  _id: `loading-${index}`,
                  slug: { _type: "slug", current: "loading" },
                }}
              />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="flex overflow-auto max-w-full gap-5">
      {myProduct.map((item) => (
        <ProductCard key={item?._id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
