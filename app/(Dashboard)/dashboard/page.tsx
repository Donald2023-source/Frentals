import React from "react";
import Container from "@/app/Components/Container";
import Barner from "@/app/Components/Barner";
import HotProducts from "@/app/Components/HotProducts";
import CategoryElipse from "@/app/Components/CategoryElipse";
const page = () => {
  return (
    <Container>
      <div className="mx-1">
        <Barner />

        <div className="py-3">
          <CategoryElipse />
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

export default page;
