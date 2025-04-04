import { ProductData } from "@/types";

interface ProductCardWireframeProps {
  item: Partial<ProductData>;
}

export default function ProductCardWireframe({ item }: ProductCardWireframeProps) {
  return (
    <div className="border shadow rounded-lg pb-4 flex-grow md:h-full w-64 md:w-72 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300" />

      {/* Content skeleton */}
      <div className="p-4 space-y-4">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4" />
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-4 bg-gray-300 rounded w-2/3" />
        </div>

        {/* Price skeleton */}
        <div className="h-6 bg-gray-300 rounded w-1/3" />

        {/* Button skeleton */}
        <div className="h-10 bg-gray-300 rounded w-full" />
      </div>
    </div>
  );
}