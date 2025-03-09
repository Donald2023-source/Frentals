import { getCategory } from "@/lib/getData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Category } from "@/types";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

const page = async () => {
  const Category: Category[] = await getCategory();
  console.log(Category);

  return (
    <div>
      <div>
        <h2 className="font-semibold text-center text-2xl py-5">
          Browse Machinery Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-10">
          {Category.map((item) => (
            <div key={item._id} className="relative group">
              <Image
                priority
                height={500}
                width={300}
                src={urlFor(item?.image).url()}
                alt={item?.title}
                className="h-52 rounded-xl hoverEffect hover:scale-105"
              />
              <div className="absolute top-0 rounded-xl cursor-pointer hoverEffect hover:scale-105 h-full w-full bg-black/70" />

              <div className="absolute group-hover:scale-105 hoverEffect flex flex-col items-center x-10 top-1/2 left-0 right-0">
                <p className="font-semibold text-center text-white text-lg">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
