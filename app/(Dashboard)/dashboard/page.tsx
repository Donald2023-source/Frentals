import Container from "@/app/Components/Container";
import Barner from "@/app/Components/Barner";
import HotProducts from "@/app/Components/HotProducts";
import CategoryElipse from "@/app/Components/CategoryElipse";
import ProductList from "@/app/Components/ProductList";


const Page = () => {
  return (
    <Container>
      <div className=" w-full">
        <Barner />
        <CategoryElipse />

        <div className="flex flex-col py-2">
          <h2 className="text-[20px] py-3 font-semibold">Products</h2>
          <ProductList />
        </div>

        <div className="flex flex-col gap-5 py-5">
          <div>
            <h2 className="text-[20px] py-3 font-semibold">Hot Products</h2>
            <HotProducts />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
