'use client';
import React, { useState } from 'react';

const TimeInterval = () => {
  const [selectedTime, setSelectedTime] = useState('');

  const timeOptions = [
    { label: '.', description: 'All times', value: '.' },
    { label: 'Morning', description: '1 AM - 12 PM', value: 'Morning' },
    { label: 'Afternoon', description: '1 PM - 5 PM', value: 'Afternoon' },
    { label: 'Night', description: '6 PM - 12 AM', value: 'Night' },
  ];

  const handleSelection = (value) => {
    setSelectedTime(value);
  };

  return (
    <div className="grid grid-cols-4 gap-[20px] max-w-[844px] mx-auto py-2">
      {timeOptions.map((option) => (
        <div key={option.value} className="text-[20px] font-light">
          <h3 className="text-[24px] font-normal leading-[32px] mb-[7px]">
            {option.label}
          </h3>
          <label
            className={`flex items-center gap-3 rounded-[20px] border px-4 py-3 cursor-pointer transition-all ${
              selectedTime === option.value
                ? 'border-yellow-500 text-yellow-500'
                : 'border-gray-300 text-gray-700'
            }`}
            onClick={() => handleSelection(option.value)}
          >
            <div
                className={`w-[20px] h-[20px] flex items-center justify-center rounded-full border transition-all ${
                  selectedTime === option.value
                    ? 'border-yellow-500 bg-white'
                    : 'border-gray-300'
                }`}
            >
              {selectedTime === option.value && (
                <div className="w-[10px] h-[10px] bg-yellow-500 rounded-full"></div>
              )}
            </div>
            <span>{option.description}</span>
            <input
              type="radio"
              name="time"
              value={option.value}
              className="hidden"
              checked={selectedTime === option.value}
              onChange={() => handleSelection(option.value)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default TimeInterval;







// 'use client'
// import React,{useState} from 'react'


// const TimeInterval = () => {
//     const [selectedTime, setSelectedTime] = useState('');
//     const isActive = (value) => selectedTime === value;
//       const timeOptions = [
//     { label: '.', description: 'All times', value: 'All' },
//     { label: 'Morning', description: '1 AM - 12 PM', value: 'Morning' },
//     { label: 'Afternoon', description: '1 PM - 5 PM', value: 'Afternoon' },
//     { label: 'Night', description: '6 PM - 12 AM', value: 'Night' },
//   ];
//   return (
//     <div className="grid grid-cols-4 gap-[20px] max-w-[844px] mx-auto py-2">
//       {/* All */}
//       {/* <div className="text-[20px] font-light">
//         <h3 className="text-[24px] font-normal  leading-[32px] mb-[7px]">.</h3>
//         <label
//           className={`flex items-center gap-2 rounded-[20px] border py-1 px-4 min-h-[52px] ${
//             isActive('All') ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'
//           }`}
//         >
//           <input
//             type="radio"
//             name="time"
//             value="All"
//             checked={isActive('All')}
//             onChange={() => setSelectedTime('All')}
//             className="radio-btn"
//           />
//           <span>All</span>
//         </label>
//       </div> */}

//       {
//         timeOptions?.map((option)=>(
//           <>
//           <div className="text-[20px] font-light">
//             <h3 className="text-[24px] font-normal leading-[32px] mb-[7px]">{option.label}</h3>
//             <label
//               className={`flex items-center gap-2 rounded-[20px] border py-1 px-4 min-h-[52px] ${
//                 isActive('Morning') ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'
//               }`}
//             >
              
//               <input
//                 type="radio"
//                 name="time"
//                 value="Morning"
//                 checked={isActive('Morning')}
//                 onChange={() => setSelectedTime('Morning')}
//                 className=""
//               />
//               <span>1 AM - 12 PM</span>
//             </label>
//           </div>
          
//           </>
//         ))
//       }

//       {/* <div className="text-[20px] font-light">
//         <h3 className="text-[24px] font-normal leading-[32px] mb-[7px]">Morning</h3>
//         <label
//           className={`flex items-center gap-2 rounded-[20px] border py-1 px-4 min-h-[52px] ${
//             isActive('Morning') ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'
//           }`}
//         >
//           <input
//             type="radio"
//             name="time"
//             value="Morning"
//             checked={isActive('Morning')}
//             onChange={() => setSelectedTime('Morning')}
//             className=""
//           />
//           <span>1 AM - 12 PM</span>
//         </label>
//       </div>

 
//       <div className="text-[20px] font-light">
//         <h3 className="text-[24px] font-normal  leading-[32px] mb-[7px]">Afternoon</h3>
//         <label
//           className={`flex items-center gap-2 rounded-[20px] border py-1 px-4 min-h-[52px] ${
//             isActive('Afternoon') ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'
//           }`}
//         >
//           <input
//             type="radio"
//             name="time"
//             value="Afternoon"
//             checked={isActive('Afternoon')}
//             onChange={() => setSelectedTime('Afternoon')}
//             className=""
//           />
//           <span>1 PM - 5 PM</span>
//         </label>
//       </div>

   
//       <div className="text-[20px] font-light">
//         <h3 className="text-[24px] font-normal  leading-[32px] mb-[7px]">Night</h3>
//         <label
//           className={`flex items-center gap-2 rounded-[20px] border py-1 px-4 min-h-[52px] ${
//             isActive('Night') ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'
//           }`}
//         >
//           <input
//             type="radio"
//             name="time"
//             value="Night"
//             checked={isActive('Night')}
//             onChange={() => setSelectedTime('Night')}
//             className={` ${isActive('Night') ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'
//               }`}
//           />
//           <span>6 PM - 12 AM</span>
//         </label>
//       </div> */}
//     </div>



// //     <div className="grid grid-cols-4 gap-4 max-w-[844px]  mx-auto  py-2">

// //     <div className="  text-[20px] font-light">
// //       <h3 className=" text-[24px] font-normal"> .</h3>
// //       <label className='flex  items-center gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
// //       <input
// //         type="radio"
// //         name="time"
// //         value="All"
       
// //         // checked={selectedOption === "All"}
// //         // onChange={() => setSelectedOption("All")}
// //       />
// //       <span className=''>All</span>
// //     </label>

// //     </div>
    

// //     <div className="  text-[20px] font-light">
// //       <h3 className=" text-[24px] font-normal">Morning</h3>
// //       <label className='flex  items-center  gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
// //       <input
// //         type="radio"
// //         name="time"
// //         value="All"
// //         // checked={selectedOption === "All"}
// //         // onChange={() => setSelectedOption("All")}
// //       />
// //       <span className=''>1 AM - 12 PM </span>
// //     </label>

// //     </div>

// //     <div className="  text-[20px] font-light">
// //       <h3 className=" text-[24px] font-normal">Afternoon</h3>
// //       <label className='flex  items-center gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
// //       <input
// //         type="radio"
// //         name="time"
// //         value="All"
// //         // checked={selectedOption === "All"}
// //         // onChange={() => setSelectedOption("All")}
// //       />
// //       <span className=''>1 PM - 5 PM </span>
// //     </label>

// //     </div>

// //     <div className="  text-[20px] font-light">
// //       <h3 className=" text-[24px] font-normal">Night</h3>
// //       <label className='flex  items-center gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
// //       <input
// //         type="radio"
// //         name="time"
// //         value="All"
// //         // checked={selectedOption === "All"}
// //         // onChange={() => setSelectedOption("All")}
// //       />
// //       <span className=''>6 PM - 12 AM </span>
// //     </label>

// //     </div>

// //   </div>
//   )
// }

// export default TimeInterval
