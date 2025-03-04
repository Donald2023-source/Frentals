import React from "react";
import { FooterItems } from "../Constants";
import { div } from "framer-motion/client";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] p-10">
      <footer className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between">
        <fieldset>
          <input
            className="p-3 w-64 rounded-lg outline-none bg-white/80"
            type="text"
          />
        </fieldset>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-32 gap-10 py-3">
          {FooterItems.map((item) => (
            <div className="">
              <h2 className="text-white font-bold text-lg">{item.title}</h2>
              <div>
                {item.listItem.map((list) => (
                  <h2 className="text-base py-2 font-semibold text-white/80">
                    {list}
                  </h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className="text-white/60 py-10 flex items-center justify-between">
        <h2>@2024 Copyright</h2>
        <p>Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
