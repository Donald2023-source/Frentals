import { client } from "@/sanity/lib/client";
import { categoryQuery, hotProductsQuery, productQuery } from "./query";

const getCategory = async () => {
  const categoryData = await client.fetch(categoryQuery);
  return categoryData;
};

const getProducts = async () => {
  const Products = await client.fetch(productQuery);
  return Products;
};

const getHotProducts = async () => {
  const hotProducts = await client.fetch(hotProductsQuery);
  return hotProducts;
};
export { getCategory, getProducts, getHotProducts };
