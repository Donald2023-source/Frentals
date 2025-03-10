import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import React from "react";

interface Props {
  categoryName: string;
}

const Page = async ({ params }: { params: Props }) => {
  console.log(params);

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
          <div key={item?._id}>
            <div>{item?.title}</div>
          </div>
        ))
      ) : (
        <h2>No products found for {params.categoryName}</h2>
      )}
    </div>
  );
};

export default Page;
