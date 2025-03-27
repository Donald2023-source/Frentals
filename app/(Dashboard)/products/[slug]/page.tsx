import React from "react";
import { groq } from "next-sanity";
import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormatedPrice from "@/app/Components/FormatedPrice";
import Button from "@/app/Components/Button";
import ProductCard from "@/app/Components/ProductCard";
import Container from "@/app/Components/Container";

// Define the params type correctly for a dynamic route
interface Params {
  slug: string[];
}

interface PageProps {
  params: Promise<Params>;
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  if (!resolvedParams?.slug?.[0]) {
    return <h2>No slug found</h2>;
  }

  // Fetch the product details based on slug
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{ ... }`;
  const product: ProductData = await client.fetch(query, {
    slug: resolvedParams.slug[0],
  });
  const Products: ProductData[] = await getProducts();

  // console.log("Fetched Products:", Products);
  // console.log("Fetched Product:", product);

  // Extract description list
  const descriptionList =
    product?.description?.flatMap((block: { children: { text: string }[] }) =>
      block.children.map((child) => child.text)
    ) || [];

  return (
    <Container className="border">
      <div className="flex lg:flex-row w-full flex-col px-1 items-center gap-10">
        {/* Product Image */}
        <div className="lg:w-[70%] w-full">
          {product?.image ? (
            <Image
              width={500}
              height={500}
              src={urlFor(product.image).url()}
              alt={product.title}
              className="w-full rounded-lg md:h-[28rem] object-cover"
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col px-10 gap-8">
          <h2 className="text-2xl font-bold tracking-wider">
            {product?.title}
          </h2>
          <div>
            {descriptionList.map((item, idx) => (
              <li className="list-item px-3 text-gray-500 py-1" key={idx}>
                {item}
              </li>
            ))}
          </div>

          {/* Price section */}
          <div className="flex gap-10">
            <p className="text-green-400 font-semibold">
              <FormatedPrice className="text-black" amount={product?.price} /> /
              day
            </p>
            <p className="text-green-400 font-semibold">
              <FormatedPrice
                className="text-black"
                amount={product?.price * 5}
              />{" "}
              / week
            </p>
            <p className="text-green-400 font-semibold">
              <FormatedPrice
                className="text-black"
                amount={product?.price * 29}
              />{" "}
              / month
            </p>
          </div>

          <Button className="font-semibold text-lg py-5" text="Reserve Now!" />
        </div>
      </div>

      {/* More Like This Section */}
      <div>
        <h2 className="text-3xl font-bold tracking-wider py-10">
          More Like This
        </h2>
        <div className="flex overflow-auto gap-10">
          {Products.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Page;
