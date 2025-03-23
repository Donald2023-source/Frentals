import { CheckCircle } from "lucide-react";
import React from "react";

interface Props {
    id: string | null
}

const SucessContainer = ({ id }: { id: string }) => {
  console.log(id);

  return (
    <div>
      <div className="w-full h-full">
        <div className="h-full mx-auto text-center flex flex-col items-center justify-center gap-3 md:w-[40%]">
          <CheckCircle className="text-green-400 my-6" size={80} />
          <p>Your action has been completed successfully. </p>
          <p className="font-medium leading-8">
            Thank you for your submission. We&apos;ve received your information
            and will process it shortly. You should receive a confirmation email
            within the next few minutes.
          </p>
          <button className="py-3 px-10 rounded border text-accent hover:scale-105 hoverEffect cursor-pointer bg-[#3E803E]">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default SucessContainer;
