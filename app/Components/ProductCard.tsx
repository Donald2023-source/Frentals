"use client";
import { urlFor } from "@/sanity/lib/image";
import { ProductData } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import FormatedPrice from "./FormatedPrice";
import Button from "./Button";

interface Props {
  item: ProductData;
  className?: string;
}

const ProductCard = ({ item }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const descriptionList = item?.description?.flatMap(
    (block: { children: { text: string }[] }) =>
      block.children.map((child) => child.text)
  );

  console.log(descriptionList);

  return (
    <div > 
      <div className={twMerge("border shadow rounded-lg w-72")}>
        <Image
          className="h-52 w-72 rounded-lg object-cover"
          priority
          height={300}
          width={300}
          src={urlFor(item?.image).url()}
          alt={item?.title}
        />
        <div className="flex flex-col gap-2 px-3">
          <h4 className="font-semibold text-lg border-b text-center py-1">
            {item?.title}
          </h4>
          <div className="flex items-center border-b justify-between px-3 py-1">
            <p className="text-semibold text-gray-500">Rent Price</p>
            <span className="text-sm text-green-500">
              <FormatedPrice
                className="text-base text-black"
                amount={item?.price}
              />{" "}
              per day
            </span>
          </div>
          <div className="flex flex-col">
            {/* Render the description as a list */}
            {descriptionList?.length > 0 && (
              <ul
                className={`text-sm text-gray-600 px-5 ${isVisible ? "line-clamp-none" : "line-clamp-2"}`}
              >
                {descriptionList.map((text, idx) => (
                  <li className="list-disc" key={idx}>
                    {text}{" "}
                  </li>
                ))}
              </ul>
            )}
            <span
              onClick={() => setIsVisible(!isVisible)}
              className="text-[#3E803E] cursor-pointer text-xs"
            >
              {isVisible ? "Hide" : "See More"}
            </span>
          </div>
          <Button text="Reserve Now" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
