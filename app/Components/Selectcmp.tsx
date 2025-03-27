import React, { useState } from "react";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { Category } from "../Constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}
const Selectcmp = ({className }: Props) => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (value: string) => {
    setSelectValue(value);
    // console.log(value);
  };

  return (
    <div>
      <div className={twMerge("bg-white p-10 h-full rounded-2xl", className)}>
        <div className="flex flex-col gap-7">
          <h2 className="text-lg font-bold w-[60%] flex items-center text-center justify-center mx-auto">
            Need an Equipment on Rent? Start Today!
          </h2>
          <Select value={selectValue} onValueChange={handleChange}>
            <div className="flex items-center border py-1 rounded-lg">
              <SelectTrigger className="w-full h-[50px] border-gray-300 rounded-lg flex items-center justify-between px-4 shadow-none border-none focus:outline-none">
                <span className="flex items-center gap-4">
                  <MdOutlineDirectionsBus className="text-3xl" />
                  <div className="border-l-2 h-6 border-gray-300"></div>
                  <SelectValue className="pl-2" placeholder="Select Category" />
                </span>
              </SelectTrigger>
            </div>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {Category.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Selectcmp;
