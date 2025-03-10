import ProductCard from "@/app/Components/ProductCard";
import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import React from "react";

interface Props {
  categoryName: string;
}

const Page = async ({ params }: { params: Props }) => {
  const products: ProductData[] = await getProducts();
  console.log(products);

  const filteredProducts = products.filter((item) =>
    item?.category?.some((cat) => cat.title === params.categoryName)
  );
  console.log(filteredProducts);

  return (
    <div className="px-20">
      <h2 className="text-xl tracking-wide py-5 font-bold">
        Products under {params.categoryName}
      </h2>
      <div className="flex gap-5 ">
        {" "}
        {/* Use 'gap-2' or a smaller value */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item?.title} item={item} />
          ))
        ) : (
          <h2>No products found for {params.categoryName}</h2>
        )}
      </div>
    </div>
  );
};

export default Page;
