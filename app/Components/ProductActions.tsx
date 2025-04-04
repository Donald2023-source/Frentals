'use client';

import Button from "@/app/Components/Button";
import { ProductData } from "@/types";

const ProductActions = ({ product }: { product: ProductData }) => {
  return <Button className="font-semibold text-lg py-5" text="Reserve Now!" item={product} />;
};

export default ProductActions;
