/* eslint-disable react/prop-types */

import { useState } from "react";
import RestroAccordianList from "./RestroAccordianList";

const RestroAccordian = ({ restroMenuListState }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordian = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      {restroMenuListState?.map((ele, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={ele?.id}
            className=" shadow-lg bg-slate-100 p-3 border-b-2 border-slate-300">
            <div
              onClick={() => handleAccordian(index)}
              className="flex justify-between cursor-pointer">
              <span className="text-lg font-bold">{ele?.title}</span>
              <span>{isOpen ? "🔼" : "🔽"}</span>
            </div>
            {isOpen && <RestroAccordianList itemCards={ele?.itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default RestroAccordian;
