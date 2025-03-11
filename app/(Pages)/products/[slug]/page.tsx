import React from "react";
import { groq } from "next-sanity";
import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params: { slug } }: Props) => {
  console.log(slug);
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    ...
  }`;

  const product: ProductData = await client.fetch(query, { slug });
  const Products: ProductData[] = await getProducts();

  console.log(product);
  return (
    <div className="w-full px-20">
      This is the detail page for {slug}
      <div className="border">
        {product?.image && (
          <Image
        width={500}
        height={500}
        src={urlFor(product.image).url()}
        alt={product.title}
        className="w-1/2"
          />
        )}
      </div>
    </div>
  );
};

export default page;
