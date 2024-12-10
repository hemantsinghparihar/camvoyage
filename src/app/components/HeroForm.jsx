'use client';
import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const HeroForm = () => {
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
      toast.error(error.message); // Show each error message as a toast notification
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit,onError)} className="w-[625px] py-6 rounded-lg">
      {/* First Row */}
      <div className="flex justify-between gap-4 mb-4">
        {/* From */}
        <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] relative">
          <p className="font-[400] text-[20px]">From:</p>
          <input
            type="text"
            placeholder="Yaounde"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('from', { required: 'From location is required' })}
          />
          
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>

        {/* To */}
        <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px]">
          <p className="font-[400] text-[20px]">To:</p>
          <input
            type="text"
            placeholder="City"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('to', { required: 'Destination is required' })}
          />
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>
      </div>
      {/* {errors.from && (
            <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
          )} */}

      {/* Second Row */}
      <div className="flex justify-between gap-4 mb-4 min-h-[70px]">
        {/* Departure Date */}
        <div className="flex-1 rounded-[20px] max-w-[300px] bg-[#ffffff84] px-4 flex items-center text-[20px]">
          <input
            type="date"
            className="w-full p-2 border border-none outline-none bg-transparent rounded-[20px] focus:outline-none"
            {...register('departureDate', { required: 'Departure date is required' })}
          />
        </div>

        {/* Class */}
        <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px]">
          <p className="font-[400] text-[20px]">Class:</p>
          <input
            type="text"
            placeholder="Regular"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('class', { required: 'Class type is required' })}
          />
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex min-h-[70px] justify-between gap-4 mb-4">
        {/* Trip Type */}
        <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px]">
          <p className="font-[400] text-[20px]">Trip Type:</p>
          <input
            type="text"
            placeholder="Round Trip"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('tripType', { required: 'Trip type is required' })}
          />
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>

        {/* Return Date */}
        <div className="flex-1 rounded-[20px] max-w-[300px] bg-[#ffffff84] px-4 flex items-center text-[20px]">
          <input
            type="date"
            className="w-full p-2 border border-none outline-none bg-transparent rounded-[20px] focus:outline-none"
            {...register('returnDate')}
          />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="flex min-h-[70px] justify-between gap-4 mb-4">
        {/* Number of Seats */}
        <div className="flex-1 flex items-center bg-[#ffffff84] px-2 rounded-[20px]">
          <p className="font-[400] text-[20px] w-full max-w-[160px]">Number of seats:</p>
          <input
            type="number"
            placeholder="1"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('seats', { required: 'Number of seats is required' })}
          />
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>
      </div>

      {/* Fifth Row */}
      <div className="flex justify-between gap-4 mb-4 min-h-[70px]">
        {/* Preferred Time */}
        <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px]">
          <input
            type="text"
            placeholder="Preferred time"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('preferredTime')}
          />
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>

        {/* Available Agencies */}
        <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px]">
          <input
            type="text"
            placeholder="Available agencies"
            className="w-full p-2 bg-transparent rounded focus:outline-none placeholder-gray-700"
            {...register('agencies')}
          />
          <span className="w-[40px] h-[40px] flex items-center">
            <Image src={'/downArrow.svg'} width={30} height={30} alt="Arrow" />
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-4 w-full py-4 bg-[#007BFF] text-white font-bold rounded-[20px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Book Your Trip
      </button>
    </form>
  );
};

export default HeroForm;







// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { useForm } from 'react-hook-form'

// const HeroForm = () => {
//   const {register,handleSubmit, formState: { errors }} = useForm();

//   const onSubmit = (data) => {
//     console.log('✌️data --->', data);
    
//   }

//   return (
//     <form action="" onSubmit={handleSubmit(onSubmit)}>
//           <div className="w-[625px]  py-6 rounded-lg  ">

//     {/* First Row */}

//     <div className="flex justify-between gap-4 mb-4 ">
//       {/* From */}
      
//         <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] relative ">
//             <p className='font-[400] text-[20px]'>From:</p>
            
//               <input type="text" placeholder='Yaounde' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' {...register('from',{ required: true })} />
//               {errors.exampleRequired && <span>This field is required</span>}
//             {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//             <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
            
//             {/* <div className='absolute w-full min-h-[140px] bg-white bottom-[-140px] left-[0px] flex flex-col'>

//             </div> */}
          
//         </div>
        

//         {/* To */}
//         <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] ">
//             <p className='font-[400] text-[20px]'>To:</p>
            
//               <input type="text" placeholder='City' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
//             {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//             <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
          
//         </div>

//     </div>





//     {/* Second Row */}
//     <div className="flex justify-between gap-4 mb-4 min-h-[70px]">
//       {/* Departure Date */}
//       <div className="flex-1 rounded-[20px] max-w-[300px] bg-[#ffffff84] px-4 flex items-center text-[20px]">
        
//         <input
//           type="date"
//           className="w-full p-2 border border-none outline-none bg-transparent rounded-[20px]   focus:outline-none"
//         />
//       </div>

//       {/* Class */}
//       <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] ">
//             <p className='font-[400] text-[20px]'>Class:</p>
            
//               <input type="text" placeholder='Regular' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
//             {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//             <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
          
//         </div>


//     </div>

//     {/* Third Row */}

//     <div className="flex min-h-[70px] justify-between gap-4 mb-4">
//       {/* Trip Type */}

//       <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] ">
//             <p className='font-[400] text-[20px]'>Class:</p>
            
//               <input type="text" placeholder='Regular' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
//             {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//             <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
          
//         </div>

//       {/* Return Date */}
//       <div className="flex-1 rounded-[20px] max-w-[300px] bg-[#ffffff84] px-4 flex items-center text-[20px]">
        
//         <input
//           type="date" 
//           className="w-full p-2 border border-none outline-none bg-transparent rounded-[20px]   focus:outline-none"
//         />
//       </div>
//     </div>

//       {/* Fourth Row */}
//       <div className="flex min-h-[70px] justify-between gap-4 mb-4">
//         {/* Number of Seats */}
//         {/* <div className="flex-1 flex items-center  bg-[#ffffff84] px-2 rounded-[20px]">
        
//         <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
//             <option className='font-light text-xl'>1</option>
//           </select>
//         </div> */}
//         <div className=" flex-1 flex items-center  bg-[#ffffff84] px-2 rounded-[20px] ">
//             <p className='font-[400] text-[20px] w-full max-w-[160px]'>Number of seats:</p>
//             <input type="text" placeholder='1' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700  ' />
//           {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//           <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
        
//         </div>

//       </div>

    

//       {/* Fifth Row */}
//       <div className="flex justify-between gap-4 mb-4 min-h-[70px]">
//           {/* Preferred Time */}

//           <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] ">
          
            
//               <input type="text" placeholder='Preferred time' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
//             {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//             <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
          
//         </div>

//         {/* Available Agencies */}
//         <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff84] px-4 rounded-[20px] ">
          
            
//             <input type="text" placeholder='Available agencies' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
//           {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
//           <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
      
//         </div>
//       </div>

//       {/* Button */}
//       <button className="mt-4 w-full py-4 bg-[#007BFF] text-white font-bold rounded-[20px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
//         Book Your Trip
//       </button>
//     </div>
//     </form>
//   )
// }

// export default HeroForm
