import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="md:px-26 px-2">{children}</div>;
};

export default Container;
