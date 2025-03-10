'use client'
import { urlFor } from "@/sanity/lib/image";
import { ProductData } from "@/types";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import FormatedPrice from "./FormatedPrice";
import Button from "./Button";

interface Props {
  item: ProductData;
  className?: string;
}

const ProductCard = ({ item }: Props) => {
 
  const descriptionList = item?.description?.flatMap((block: { children: { text: string }[] }) => 
    block.children.map(child => child.text)
  );

  console.log(descriptionList);

  return (
    <div>
      <div className={twMerge("border shadow rounded-lg w-72")}>
        <Image
          className="h-72 w-72 rounded-lg object-cover"
          priority
          height={300}
          width={300}
          src={urlFor(item?.image).url()}
          alt={item?.title}
        />
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg text-center py-1">
            {item?.title}
          </h4>
          <div className="flex items-center justify-between px-3 py-1">
            <p className="text-semibold">Rent Price</p>
            <span className="text-sm text-green-500">
              <FormatedPrice
                className="text-base text-black"
                amount={item?.price}
              />{" "}
              per day
            </span>
          </div>
          {/* Render the description as a list */}
          {descriptionList?.length > 0 && (
            <ul className="text-sm text-gray-600 px-5 line-clamp-2">
              {descriptionList.map((text, idx) => (
                <li className="list-disc" key={idx}>{text}</li>
              ))}
            </ul>
          )}
        </div>
        <Button text="Reserve Now" />
      </div>
    </div>
  );
};

export default ProductCard;
