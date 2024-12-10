'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


// Initialize toast notifications


const TicketSelectionOption = () => {
  const [selectedOption, setSelectedOption] = useState('active'); // Track the selected option
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission
  };

  const onError = () => {
    Object.values(errors).forEach((error) => {
      toast.error(error.message); 
    });
  };

  return (
    <>
      {/* Radio Buttons */}
      <div className="max-w-[490px] flex justify-between mx-auto gap-[55px] mb-[34px]">
        {/* Active Ticket */}
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="radio"
            name="ticket"
            value="active"
            checked={selectedOption === 'active'}
            onChange={() => setSelectedOption('active')}
            className="w-4 h-4" // Adjust size for radio button
          />
          <span
            className={`text-[20px] font-medium ${
              selectedOption === 'active' ? 'text-black' : 'text-[#AAABAB]'
            }`}
          >
            Retrieve active ticket
          </span>
        </label>

        {/* Past Tickets */}
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="radio"
            name="ticket"
            value="past"
            checked={selectedOption === 'past'}
            onChange={() => setSelectedOption('past')}
            className="w-4 h-4" // Adjust size for radio button
          />
          <span
            className={`text-[20px] ${
              selectedOption === 'past' ? 'text-black' : 'text-[#AAABAB]'
            }`}
          >
            Retrieve past tickets
          </span>
        </label>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="w-full flex flex-col gap-[34px] px-8 text-center mx-auto">
          {/* Ticket Reference Input */}
          <div className="bg-white rounded-[20px] flex min-h-[70px] px-2">
            <input
              type="text"
              placeholder="Enter ticket reference number"
              className="rounded-[20px] min-w-[90%] outline-none px-2 placeholder-black placeholder:font-[300]"
              {...register('ticketReference', {
                required: 'Ticket reference number is required',
              })}
            />
            <div className="min-w-[10%] flex justify-center items-center">
              <Image src={'/info.svg'} width={24} height={24} alt="info" />
            </div>
          </div>
          {errors.ticketReference && (
            <span className="text-red-500 text-sm">{errors.ticketReference.message}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-[20px] bg-[#007BFF] w-full py-4 text-white font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Proceed
          </button>
        </div>
      </form>
    </>
  );
};

export default TicketSelectionOption;









// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { useForm } from 'react-hook-form';

// const TicketSelectionOption = () => {
//   const [selectedOption, setSelectedOption] = useState('active'); // Track the selected option

//   return (
//    <>
//        <div className="max-w-[490px] flex justify-between mx-auto gap-[55px] mb-[34px]">
//       {/* Active Ticket */}
//       <label className="cursor-pointer flex items-center gap-2">
//         <input
//           type="radio"
//           name="ticket"
//           value="active"
//           checked={selectedOption === 'active'}
//           onChange={() => setSelectedOption('active')}
//           className="w-4 h-4" // Adjust size for radio button
//         />
//         <span
//           className={`text-[20px] font-medium ${
//             selectedOption === 'active' ? 'text-black':'text-[#AAABAB]'
//           }`}
//         >
//           Retrieve active ticket
//         </span>
//       </label>

//       {/* Past Tickets */}
//       <label className="cursor-pointer flex items-center gap-2">
//         <input
//           type="radio"
//           name="ticket"
//           value="past"
//           checked={selectedOption === 'past'}
//           onChange={() => setSelectedOption('past')}
//           className="w-4 h-4" // Adjust size for radio button
//         />
//         <span
//           className={`text-[20px] ${
//             selectedOption === 'past' ? 'text-black':'text-[#AAABAB]' 
//           }`}
//         >
//           Retrieve past tickets
//         </span>
//       </label>
//     </div>
//     <form action="">
//           <div className="w-full flex flex-col gap-[34px] px-8 text-center  mx-auto ">
//         <div className=" bg-white rounded-[20px] flex min-h-[70px] px-2
//         ">
//             <input type="text" placeholder="Enter ticket reference number" className="rounded-[20px]  min-w-[90%] outline-none px-2 placeholder-black  placeholder:font-[300]"  />

//             <div className=" min-w-[10%] flex justify-center items-center">
//               <Image src={'/info.svg'} width={24} height={24} alt="info"  />
//             </div>
//         </div>

//         <button className="rounded-[20px] bg-[#007BFF]  w-full py-4  text-white font-bold  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//           Proceed                      
//         </button>                
        

//       </div>

//       </form>
//    </>
//   );
// };

// export default TicketSelectionOption;





// 'use client'
// import React,{useState} from 'react'

// const TicketSelectionOption = () => {
//     const [selectesOption,setSelectedOptions]=useState('active')

//   return (
//     <div className="max-w-[490px] flex justify-between mx-auto gap-6">
//         <label htmlFor="ticket" >
//         <input type="radio" name="ticket"  />
//         <span className={`text-[20px] font-medium `} > Retrieve active ticket</span>
//         </label>

//         <label htmlFor="ticket">
//         <input type="radio" name="ticket" />
//         <span className="text-[20px]  "> Retrieve past tickets</span>
//         </label>
//     </div>
//   )
// }

// export default TicketSelectionOption
