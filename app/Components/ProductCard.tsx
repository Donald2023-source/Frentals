"use client";
import { urlFor } from "@/sanity/lib/image";
import { ProductData, StoreState } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import FormatedPrice from "./FormatedPrice";
import Button from "./Button";
import Link from "next/link";

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

  const toggleDescription = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div
        key={item?._id}
        className={twMerge(
          "border shadow rounded-lg pb-4 flex-grow md:h-full w-64 md:w-72"
        )}
      >
        <Link href={`/products/${item?.slug?.current}`}>
          <Image
            className="md:h-52 w-64 h-44 md:w-72 rounded-lg object-cover"
            priority
            height={300}
            width={300}
            src={urlFor(item?.image).url()}
            alt={item?.title}
          />
        </Link>
        <div className="flex flex-col gap-2 px-3">
          <h4 className="font-semibold text-lg border-b text-center py-1">
            {item?.title}
          </h4>
          <div className="flex items-center border-b justify-between py-1 md:px-3">
            <p className="text-semibold text-gray-500">Rent Price</p>
            <span className="text-sm text-green-500">
              <FormatedPrice
                className="text-base text-black"
                amount={item?.price}
              />{" "}
              per day
            </span>
          </div>
          <div className="flex flex-col flex-grow">
            {descriptionList?.length > 0 && (
              <ul
                className={`text-sm text-gray-600 px-5 ${
                  isVisible ? "line-clamp-none" : "line-clamp-2"
                }`}
              >
                {descriptionList.map((text, idx) => (
                  <li className="list-disc" key={idx}>
                    {text}
                  </li>
                ))}
              </ul>
            )}
            <span
              onClick={toggleDescription}
              className="text-[#3E803E] cursor-pointer text-xs"
            >
              {isVisible ? "Hide" : "See More"}
            </span>
          </div>
          <div className="mt-auto">
            <Button
              item={item}
              className="flex items-center justify-center"
              text="Reserve Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
