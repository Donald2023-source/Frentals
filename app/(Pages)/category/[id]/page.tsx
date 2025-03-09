import { client } from "@/sanity/lib/client";
import { ProductData } from "@/types";

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const query = `*[_type == "product" && category._ref == $id] {
    _id,
    name,
    price,
    image
  }`;

  const products: ProductData[] = await client.fetch(query, { id });

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">Products in Selected Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
