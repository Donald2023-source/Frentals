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
    item?.category?.some(
      (cat) => decodeURIComponent(cat.title) === params.categoryName
    )
  );
  console.log(filteredProducts);

  return (
    <div className="lg:px-20 flex flex-col md:items-start items-center justify-center">
      <h2 className="text-3xl tracking-wide py-5 font-bold">
        Products From {params.categoryName}
      </h2>
      <div className="md:flex grid grid-cols-2 gap-5 ">
        {" "}
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
