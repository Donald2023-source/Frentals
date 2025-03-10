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
    <div>
      <h2>Products under {params.categoryName}</h2>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <ProductCard key={item?.title} item={item} />
          
        ))
      ) : (
        <h2>No products found for {params.categoryName}</h2>
      )}
    </div>
  );
};

export default Page;
