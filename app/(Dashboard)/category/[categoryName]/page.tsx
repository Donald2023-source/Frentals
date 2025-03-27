import Barner from "@/app/Components/Barner";
import HotProducts from "@/app/Components/HotProducts";
import ProductCard from "@/app/Components/ProductCard";
import AnimatedCart from "@/app/Components/ShopCart";
import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import React from "react";

// ✅ Define params as a Promise type
type ParamsType = Promise<{ categoryName: string[] }>;

const Page = async ({ params }: { params: ParamsType }) => {
  const resolvedParams = await params;
  console.log(resolvedParams)

  if (!resolvedParams?.categoryName?.[0]) {
    return <h2>Category not found</h2>;
  }

  const categoryName = decodeURIComponent(resolvedParams.categoryName[0]); // ✅ Convert first element to string
  const products: ProductData[] = await getProducts();
  const filteredProducts = products.filter((item) =>
    item?.category?.some(
      (cat) => decodeURIComponent(cat.title) === categoryName
    )
  );

  return (
    <div className="lg:px-20 flex flex-col md:items-start items-center justify-center">
      <div className="w-full px-3">
        <Barner
          title={`Products from ${categoryName}`}
          text={`Choose the best products from ${categoryName} to suit your need`}
          Svg={<AnimatedCart />}
        />
      </div>
      <h2 className="md:text-3xl text-2xl text-left tracking-wide py-5 font-bold">
        Products From {categoryName}
      </h2>
      <div className="flex pl-3 overflow-auto max-sm:w-full gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item?.title} item={item} />
          ))
        ) : (
          <h2>No products found for {categoryName}</h2>
        )}
      </div>

      <div className="flex flex-col py-5 pl-3 w-full">
        <h2 className="text-2xl tracking-wide font-semibold py-4">
          Hot Products
        </h2>
        <HotProducts />
      </div>
    </div>
  );
};

export default Page;
