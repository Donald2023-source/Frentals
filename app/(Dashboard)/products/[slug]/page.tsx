"use client";
import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormatedPrice from "@/app/Components/FormatedPrice";
import ProductCard from "@/app/Components/ProductCard";
import Container from "@/app/Components/Container";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import ErrorPage from "@/app/Components/ErrorPage";
import ProductDetailWireframe from "@/app/Components/ProductDetailWireframe"; // New import

const ProductActions = dynamic(() => import("@/app/Components/ProductActions"));

const Page = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const [state, setState] = useState<{
    product: ProductData | null;
    products: ProductData[] | null;
    loading: boolean;
    error: boolean;
  }>({
    product: null,
    products: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!slug) {
        setState({
          product: null,
          products: null,
          loading: false,
          error: true,
        });
        return;
      }

      setState((prev) => ({ ...prev, loading: true }));

      try {
        const query = groq`*[_type == 'product' && slug.current == $slug][0]{ ... }`;
        const product: ProductData = await client.fetch(query, { slug });

        const productsResult = await getProducts();
        if (productsResult.error) {
          throw new Error("Failed to fetch related products");
        }

        setState({
          product: product || null,
          products: productsResult,
          loading: false,
          error: !product,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({
          product: null,
          products: null,
          loading: false,
          error: true,
        });
      }
    };

    fetchData();
  }, [slug]);

  console.log(state.products)

  // Loading state with new wireframe
  if (state.loading) {
    return (
      <Container>
        <ProductDetailWireframe
          item={{ _id: "loading", slug: { _type: "slug", current: "loading" } }}
        />
      </Container>
    );
  }

  // Error state
  if (state.error) {
    return (
      <ErrorPage
        message={state.product ? "Something went wrong" : "Product not found"}
      />
    );
  }

  if (!state.product) return null;

  const descriptionList =
    state.product.description?.flatMap(
      (block: { children: { text: string }[] }) =>
        block.children.map((child) => child.text)
    ) || [];

  return (
    <Container className="border">
      <div className="flex lg:flex-row w-full flex-col px-1 items-center gap-10">
        {/* Product Image */}
        <div className="lg:w-[70%] w-full">
          {state.product.image ? (
            <Image
              width={500}
              height={500}
              src={urlFor(state.product.image).url()}
              alt={state.product.title}
              className="w-full rounded-lg md:h-[28rem] h-72 object-cover"
            />
          ) : (
            <p className="text-gray-500">No image available</p>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col px-10 gap-8">
          <h2 className="text-2xl font-bold tracking-wider">
            {state.product.title}
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
              <FormatedPrice
                className="text-black"
                amount={state.product.price ?? 0}
              />{" "}
              / day
            </p>
            <p className="text-green-400 font-semibold">
              <FormatedPrice
                className="text-black"
                amount={(state.product.price ?? 0) * 5}
              />{" "}
              / week
            </p>
            <p className="text-green-400 font-semibold">
              <FormatedPrice
                className="text-black"
                amount={(state.product.price ?? 0) * 29}
              />{" "}
              / month
            </p>
          </div>

          <ProductActions product={state.product} />
        </div>
      </div>

      {/* More Like This Section */}
    
        <div>
          <h2 className="text-3xl font-bold tracking-wider py-10">
            More Like This
          </h2>
          <div className="flex overflow-auto gap-10">
            {state?.products?.map((item) => (
              <>
              <ProductCard key={item._id} item={item} />
              {console.log(item._id, item.title, item.slug.current)}
              </>
            ))}
          </div>
        </div>
      
    </Container>
  );
};

export default Page;