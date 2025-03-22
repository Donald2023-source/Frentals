import React from "react";
import { twMerge } from "tailwind-merge";


interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("md:px-20 py-2 px-2", className)}>{children}</div>
  );
};

export default Container;
