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
import ProductDetailWireframe from "@/app/Components/ProductDetailWireframe";
import ProductList from "@/app/Components/ProductList";

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

  if (state.loading) {
    return (
      <Container>
        <ProductDetailWireframe
          item={{ _id: "loading", slug: { _type: "slug", current: "loading" } }}
        />
      </Container>
    );
  }

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
    <Container className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {state.product.image ? (
            <Image
              width={500}
              height={500}
              src={urlFor(state.product.image).url()}
              alt={state.product.title}
              className="w-full max-w-lg rounded-lg object-cover h-64 md:h-[28rem]"
            />
          ) : (
            <p className="text-gray-500 text-center">No image available</p>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-left px-2 gap-6">
          <h2 className="text-3xl font-bold tracking-wide">
            {state.product.title}
          </h2>
          <ul className="space-y-2">
            {descriptionList.map((item, idx) => (
              <li className="text-gray-600 list-disc list-inside" key={idx}>
                {item}
              </li>
            ))}
          </ul>

          {/* Price section */}
          <div className="flex flex-wrap  gap-6 mt-4">
            <p className="text-lg font-medium">
              <FormatedPrice
                className="text-green-600 font-semibold"
                amount={state.product.price ?? 0}
              />{" "}
              <span className="text-gray-600">/ day</span>
            </p>
            <p className="text-lg font-medium">
              <FormatedPrice
                className="text-green-600 font-semibold"
                amount={(state.product.price ?? 0) * 5}
              />{" "}
              <span className="text-gray-600">/ week</span>
            </p>
            <p className="text-lg font-medium">
              <FormatedPrice
                className="text-green-600 font-semibold"
                amount={(state.product.price ?? 0) * 29}
              />{" "}
              <span className="text-gray-600">/ month</span>
            </p>
          </div>

          <div className="mt-6">
            <ProductActions product={state.product} />
          </div>
        </div>
      </div>

      {/* More Like This Section */}
      {state.products && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold tracking-wide text-center mb-8">
            More Like This
          </h2>
          <ProductList />
        </div>
      )}
    </Container>
  );
};

export default Page;
