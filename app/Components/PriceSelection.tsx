import { useState } from "react";
import FormatedPrice from "./FormatedPrice"; // Assuming this formats currency
import { ProductData } from "@/types";

interface Props {
  item: ProductData;
}

const priceOptions = [
  { label: "per day", multiplier: 1 },
  { label: "per week", multiplier: 7 },
  { label: "per month", multiplier: 29 },
];

const PriceSelection = ({ item }: Props) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="">
      

    {
        isVisible ? (
            priceOptions.map((option) => {
                const amount = item?.price * item?.quantity * option.multiplier;
                return (
                    <div>
                  <label
                    key={option.label}
                    className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                  >
                    <input
                      type="radio"
                      name="priceSelection"
                      checked={selectedAmount === amount}
                      onChange={() => setSelectedAmount(amount)}
                      className="w-4 h-4"
                    />
                    <h2 className="text-sm font-medium">
                      <FormatedPrice amount={amount} /> {option.label}
                    </h2>
                    
                  </label>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="mt-4 text-sm text-green-800 hover:underline"
                  >
                    Hide
                  </button>
                  </div>
                );
              })
        ) : (<h2 onClick={() => setIsVisible(!isVisible)} className="mt-4 text-sm text-green-800 hover:underline cursor-pointer">Select Duration</h2>)
    }
    </div>
  );
};

export default PriceSelection;
