"use client";

import Button from "@/app/Components/Button";
import { ProductData } from "@/types";
import { twMerge } from "tailwind-merge";

interface Props {
  product: ProductData;
  className?: string;
}
const ProductActions = ({ product, className }: Props) => {
  return (
    <Button
      className={twMerge("font-semibold text-lg py-3", className)}
      text="Reserve Now!"
      item={product}
    />
  );
};

export default ProductActions;
