'use client'
import { useState } from "react";

const SelectContainers2 = () => {

    const [activeOption, setActiveOption] = useState("All");

    const options = ["All", "FINEXS Voyage", "United Express", "Amour Mezam","General Express"];

  return (
    <div className="select-card-container flex max-w-[1202px] gap-6 justify-between py-4 px-2 mx-auto  rounded-[10px] ">
    {options.map((option) => (
      <div
        key={option}
        onClick={() => setActiveOption(option)}
        className={`text-[20px] font-normal mx-auto rounded-[20px] py-[10px] px-[40px] cursor-pointer ${
          activeOption === option
            ? "bg-[#FFC107] text-black"
            : "border border-black text-gray-600"
        }`}
      >
        {option === "All" ? (
          <span>
            {option} <span>/</span>
          </span>
        ) : (
          option
        )}
      </div>
    ))}
  </div>
  )
}

export default SelectContainers2
