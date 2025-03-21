import Container from "@/app/Components/Container";
import Barner from "@/app/Components/Barner";
import HotProducts from "@/app/Components/HotProducts";
import CategoryElipse from "@/app/Components/CategoryElipse";
import { getProducts } from "@/lib/getData";
import { ProductData } from "@/types";
import ProductCard from "@/app/Components/ProductCard";

const Page = async() => {
 
  const products: ProductData = await getProducts();

  return (
    <Container>
      <div className="mx-1">
        <Barner />

        <div className="py-3">
          <CategoryElipse />
        </div>

       <div className="flex flex-col py-2">
       <h2 className="text-2xl py-3 font-semibold">Products</h2>
       <div className="flex overflow-auto max-w-full gap-5 ">
            {products?.length > 0 ? (
            products.map((product: ProductData) => (
              <ProductCard key={product._id} item={product} />
            ))
            ) : (
            <p>Loading products...</p>
            )}
        </div>
       </div>
        
        <div className="flex flex-col gap-5 py-5">
          <div>
            <h2 className="text-2xl py-3 font-semibold">Hot Products</h2>
            <HotProducts />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
