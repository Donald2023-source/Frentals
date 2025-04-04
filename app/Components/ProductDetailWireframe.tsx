// @/app/Components/ProductDetailWireframe.tsx
import { ProductData } from "@/types";

interface ProductDetailWireframeProps {
  item: Partial<ProductData>;
}

export default function ProductDetailWireframe({ item }: ProductDetailWireframeProps) {
  return (
    <div className="border animate-pulse">
      <div className="flex lg:flex-row w-full flex-col px-1 items-center gap-10">
        {/* Product Image Skeleton (70%) */}
        <div className="lg:w-[70%] w-full">
          <div className="w-full md:h-[28rem] h-72 bg-gray-300 rounded-lg" />
        </div>

        {/* Product Details Skeleton (30%) */}
        <div className="flex flex-col px-10 gap-8 w-full lg:w-[30%]">
          {/* Title skeleton */}
          <div className="h-8 bg-gray-300 rounded w-3/4" />

          {/* Description list skeleton */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-300 rounded w-5/6" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
          </div>

          {/* Price section skeleton */}
          <div className="flex gap-10">
            <div className="h-6 bg-gray-300 rounded w-20" />
            <div className="h-6 bg-gray-300 rounded w-20" />
            <div className="h-6 bg-gray-300 rounded w-20" />
          </div>

          {/* Product Actions skeleton */}
          <div className="h-12 bg-gray-300 rounded w-full" />
        </div>
      </div>
    </div>
  );
}