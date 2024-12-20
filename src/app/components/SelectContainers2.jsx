'use client';
import { useState } from "react";
import Image from "next/image";

const SelectContainers2 = () => {
  const [activeOption, setActiveOption] = useState("All");

  const options = ["All", "FINEXS Voyage", "United Express", "Amour Mezam", "General Express"];

  return (
    <div className="select-card-container flex max-w-[1202px] gap-[30px] justify-between px-2 mx-auto rounded-[10px] min-h-[71px]">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => setActiveOption(option)}
          className={`text-[20px] font-normal mx-auto rounded-[20px] py-[10px] px-[40px] cursor-pointer min-h-full flex items-center justify-center ${
            activeOption === option
              ? "bg-[#FFC107] text-black"
              : "border border-black text-gray-600"
          }`}
        >
          <span className="flex justify-center items-center gap-2 min-w-[80px]">
            {option}
            {activeOption === option && (
              <Image src="/tick.svg" alt="tick" width={20} height={20} />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SelectContainers2;










// 'use client'
// import { useState } from "react";

// const SelectContainers2 = () => {

//     const [activeOption, setActiveOption] = useState("All");

//     const options = ["All", "FINEXS Voyage", "United Express", "Amour Mezam","General Express"];

//   return (
//     <div className="select-card-container flex max-w-[1202px] gap-6 justify-between  px-2 mx-auto  rounded-[10px] min-h-[71px] ">
//     {options.map((option) => (
//       <div
//         key={option}
//         onClick={() => setActiveOption(option)}
//         className={`text-[20px]
//            font-normal 
//            mx-auto
//             rounded-[20px] 
//             py-[10px] px-[40px] cursor-pointer
//             min-h-full 
//             flex items-center
//            ${
//           activeOption === option
//             ? "bg-[#FFC107] text-black"
//             : "border border-black text-gray-600"
//         }`}
//       >
//         {option === "All" ? (
//           <span className=" flex justify-between min-w-[80px] ">
//             {option} <span>/</span>
//           </span>
//         ) : (
//           option
//         )}
//       </div>
//     ))}
//   </div>
//   )
// }

// export default SelectContainers2
