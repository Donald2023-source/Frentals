import React from "react";
import SucessContainer from "@/app/Components/SucessContainer";

type ParamsType = Promise<{ session_id: string }>;

const page = async ({ searchParams }: { searchParams: ParamsType }) => {
  const resolvedParams = await searchParams; // Resolve the Promise
  const id = resolvedParams.session_id; // Extract the string value

  return (
    <div>
      <SucessContainer id={id} />
    </div>
  );
};

export default page;
