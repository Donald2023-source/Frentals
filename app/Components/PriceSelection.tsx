import { useState, useEffect, useRef } from "react";
import FormatedPrice from "./FormatedPrice"; // Formats currency
import { ProductData } from "@/types";
import { ArrowDown } from "lucide-react";

const priceOptions = [
  { label: "per day", multiplier: 1 },
  { label: "per week", multiplier: 7 },
  { label: "per month", multiplier: 29 },
];

interface Props {
  item: ProductData;
  onPriceChange: (price: number) => void;
}

const PriceSelection = ({ item, onPriceChange }: Props) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(item?.price);
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onPriceChange(selectedAmount);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="relative">
      <h2
        onClick={() => setIsVisible(true)}
        className="mt-4 text-sm flex items-center gap-1 text-green-800 hover:underline cursor-pointer"
      >
         Duration <ArrowDown size={16} className="inline" />{" "}
      </h2>

      {isVisible && (
        <div
          ref={popupRef}
          className="absolute top-10 left-0 bg-white shadow-lg p-4 rounded-lg w-48 border border-gray-200 z-50"
        >
          {priceOptions.map((option) => {
            const amount = item?.price * item?.quantity * option.multiplier;
            return (
              <label
                key={option.label}
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
              >
                <input
                  type="radio"
                  name={`priceSelection-${item._id}`}
                  checked={selectedAmount === amount}
                  onChange={() => {
                    setSelectedAmount(amount);
                    onPriceChange(amount);
                    setIsVisible(false); 
                  }}
                  className="w-4 h-4"
                />
                <h2 className="text-sm text-green-900 font-medium">
                  <FormatedPrice className="font-normal text-black text-base" amount={amount} /> {option.label}
                </h2>
              </label>
            );
          })}
          <button
            onClick={() => setIsVisible(false)}
            className="mt-4 text-sm cursor-pointer text-green-800 hover:underline"
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceSelection;
