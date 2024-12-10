'use client';

import { useState } from 'react';
import Image from 'next/image';

const LangDropDown = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const options = [
      { value: 'english',img:'', label: 'ENG' },
      { value: 'option1',img:'', label: 'Option 1' },
      { value: 'option2',img:'', label: 'Option 2' },
      { value: 'option3',img:'', label: 'Option 3' },
    ];
  
    return (
      <div className="relative  w-[134px] h-[59px]  flex    justify-center items-center ">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-full p-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none "
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className=''>
                <div className='flex '>
                    <span className='w-[30px]'>
                        <Image src={'/Lang.svg'} width={25} height={25} alt='country' />
                    </span>
                    <span>
                        {option.label}
                    </span>
                </div>
              
              
            </option>
          ))}
        </select>
  
        {/* Downward Arrow */}
        <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
  )
}

export default LangDropDown




{/* <div className="logo2 border border-black  w-[134px] h-[59px] bg-white flex    justify-center items-center px-4">
                           <div className='lang-options flex gap-2 border border-black flex-center items-center '>
                                <div className='rounded-full '>
                                    <Image className=' ' src={'/Language.svg'} width={25} height={25} alt='lang' />
                                </div>
                                
                                <h2 className="lang font-[900] text-[20px]">
                                    Hin
                                </h2>
                           </div>

                    </div> */}