import React from 'react'

const HeroForm = () => {
  return (
    <div className="w-[625px]  p-6 rounded-lg shadow-lg">
    {/* First Row */}
    <div className="flex justify-between gap-4 mb-4">
      {/* From */}
      <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px]">
        <p>From:</p>
        <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
          <option>Yaounde</option>
        </select>
      </div>

      {/* To */}
      <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px]">
        <p>To:</p>
        
      <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
          <option>City</option>
        </select>
      </div>

    </div>

    {/* Second Row */}
    <div className="flex justify-between gap-4 mb-4">
      {/* Departure Date */}
      <div className="flex-1 rounded-[20px] max-w-[300px] bg-[#ffffff84] px-2 flex items-center">
        
        <input
          type="date"
          className="w-full p-2 border border-none outline-none bg-transparent rounded-[20px]   focus:outline-none"
        />
      </div>

      {/* Class */}
      <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px]">
      <p>Trip Type:</p>
        
      <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
          <option>Regular</option>
        </select>
      </div>

    
    </div>

    {/* Third Row */}

    <div className="flex justify-between gap-4 mb-4">
      {/* Trip Type */}

      <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px]">
      <p>To:</p>
        
      <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
          <option>One Way</option>
        </select>
      </div>

      {/* Return Date */}
      <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px] ">
        
        <input
          type="date"
          disabled
          className="w-full p-2  rounded bg-transparent cursor-not-allowed focus:outline-none"
        />
      </div>
    </div>

      {/* Fourth Row */}
      <div className="flex justify-between gap-4 mb-4">
        {/* Number of Seats */}
        <div className="flex-1 flex items-center  bg-[#ffffff84] px-2 rounded-[20px]">
         
        <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
            <option>1</option>
          </select>
        </div>
      </div>

      {/* Fifth Row */}
      <div className="flex justify-between gap-4 mb-4">
        {/* Preferred Time */}

        <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px]">
                                   
        <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
            <option>Preferred time</option>
        </select>
      </div>
        {/* Available Agencies */}
        <div className="flex-1 flex items-center max-w-[300px] bg-[#ffffff84] px-2 rounded-[20px]">
      
        
        <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
            <option>Available agencies</option>
          </select>
      </div>
      </div>

      {/* Button */}
      <button className="mt-4 w-full py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Book Your Trip
      </button>
    </div>
  )
}

export default HeroForm
