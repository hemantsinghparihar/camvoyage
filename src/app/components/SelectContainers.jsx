'use client';
import { useState } from "react";
import Image from "next/image";

const SelectContainers = () => {
  const [activeOption, setActiveOption] = useState("All");

  const options = ["All", "Regular", "V.I.P", "V.V.I.P"];

  return (
    <div className="select-card-container flex max-w-[692px] gap-[30px] justify-between px-2 mx-auto rounded-[10px] min-h-[71px]">
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
          <span className="flex  justify-center items-center gap-3 min-w-[80px]">
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

export default SelectContainers;







// 'use client'
// import { useState } from "react";
// import Image from "next/image";

// const SelectContainers = () => {

//     const [activeOption, setActiveOption] = useState("All");

//   const options = ["All", "Regular", "V.I.P", "V.V.I.P"];

//   return (
//     <div className="select-card-container flex max-w-[692px] gap-6 justify-between  px-2 mx-auto  rounded-[10px] min-h-[71px] ">
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
//             ${
//           activeOption === option
//             ? "bg-[#FFC107] text-black"
//             : "border border-black text-gray-600"
//         }`}
//       >
//         {option === "All" ? (
//           <span className=" flex justify-between min-w-[80px] ">
//             {option} <span><Image src={'/tick.svg'} width={30} height={30} /></span>
//           </span>
//         ) : (
//           option
//         )}
//       </div>
//     ))}
//   </div>
//   )
// }

// export default SelectContainers



{/* <div className="select-card-container flex max-w-[692px] gap-6 justify-between py-4 px-2 mx-auto">

<div className=" text-[20px] font-normal  mx-auto rounded-[20px] py-[10px] px-[40px] bg-[#FFC107] flex gap-3">
    <span>All</span>
    <span>/</span>
</div>

<div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
  Regular
</div>

<div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
  V.I.P
</div>

<div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
  V.V.I.P
</div>                     
 
</div> */}