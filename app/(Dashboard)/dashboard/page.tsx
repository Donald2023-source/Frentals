
import Container from "@/app/Components/Container";
import Barner from "@/app/Components/Barner";
import HotProducts from "@/app/Components/HotProducts";
import CategoryElipse from "@/app/Components/CategoryElipse";
import ProductList from "@/app/Components/ProductList";
import GeometricCyclist from "@/app/Components/Bike";

const Page = () => {

  
  return (
    <Container>
      <div className=" w-full">
        <Barner
          title="Welcome To Frentals"
          text="Best farm rental service. We give you exceiptional services at affordable prices"
          Svg={<GeometricCyclist />}
        />
        <CategoryElipse className="py-7" />

        <div className="flex flex-col md:pl-0 pl-2 py-2">
          <h2 className="text-[20px] py-3 font-semibold">Products</h2>
          <ProductList />
        </div>

        <div className="flex flex-col md:pl-0 pl-2 gap-5 py-5">
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
