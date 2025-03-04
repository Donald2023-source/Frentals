import React from "react";
import { MdOutlineDirectionsBus } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Myselect = () => {
  return (
    <div>
      <div className="bg-white p-10 h-full rounded-2xl">
        <div className="flex flex-col gap-7">
          <h2 className="text-lg font-bold w-[60%] flex items-center text-center justify-center mx-auto">
            Need an Equipment on Rent? Start Today!
          </h2>
          <Select>
            <div className="flex items-center border py-1 rounded-lg">
              <SelectTrigger className="w-full h-[50px] border-gray-300 rounded-lg flex items-center justify-between px-4 shadow-none border-none focus:outline-none">
                <span className="flex items-center gap-4">
                  <MdOutlineDirectionsBus className="text-3xl" />
                  <div className="border-l-2 h-6 border-gray-300"></div>
                  <SelectValue className="pl-2" placeholder="Select a fruit" />
                </span>
              </SelectTrigger>
            </div>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Myselect;
