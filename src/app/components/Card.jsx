import React from 'react'
import Image from 'next/image'
// import partner2 from "/partner2.svg"
// import minibus from "/minibus.svg"
// import Line from "/Line.svg"

const Card = () => {
  return (
    
          <div className="max-w-[425px]  bg-white mx-2  rounded-xl p-[15px]  flex flex-col gap-[9.2px]">
           
            <div className="flex items-center gap-[19px] max-w-[242px]">
                <Image src={'/partner2.svg'} width={68} height={68} alt='logo'/>
              
              <h2 className=" font-normal text-[24px] leading-[32px] text-[#007BFF]">Finexs Voyage</h2>
            </div>
      
       
                <div className='max-w-[395px] bg-[#E7F3FF] rounded-[10px] flex flex-col gap-2 p-4'>

                    <div className="text-center text-black flex flex-col gap-2">
                        <div className="font-medium flex justify-between">
                            <span className="text-[16px] leading-[32px] font-bold">Yaounde</span> 
                            <span className="mx-2">
                                <Image src={'/minibus.svg'} width={19} height={8} alt='minibus'/>
                            </span> 
                            <span className="font-bold text-[16px] leading-[32px]">Douala</span>
                        </div>

                        <div className='flex justify-between  items-center'>
                            <span className="text-[16px] font-bold"> <Image src={'/location.svg'} width={24}  height={24} alt='location' /></span> 
                            <span className="mx-2">
                            <Image src={'/Line.svg'} width={266} height={2}  alt='line'/>
                            </span> 
                            <span className="font-bold text-[16px]"> <Image src={'/location.svg'} width={24}  height={24} alt='location' /></span>
                            
                        </div>

                        <div className='flex justify-between'>
                            <p className='text-[16px] leading-[32px] font-normal'>
                                Nsam
                            </p>
                            <p className='text-[16px] leading-[32px] font-normal'>
                                Akwa
                            </p>
                        </div>
                        <div className="dash border border-dashed border-black"></div>
                    </div>
            
                 
            
                    {/* Details */}
                    <div className=" text-[16px]">
                    <div className="flex justify-between">
                        <span className=' font-medium text-black text-[16px] leading-[32px]'>Departure Time:</span>
                        <span className="font-light  ">5:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className=' font-medium text-black leading-[32px]'>Duration:</span>
                        <span className="font-light">5h 30m</span>
                    </div>
                    <div className="flex justify-between">
                        <span className=' font-medium text-black leading-[32px]'>Arrival Time:</span>
                        <span className="font-light">10:30 AM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className=' font-medium text-black leading-[32px]'>Class:</span>
                        <span className="font-light">V.V.I.P</span>
                    </div>
                    <div className="flex justify-between">
                        <span className=' font-medium text-black leading-[32px]'>Amenities:</span>
                        <span className="font-light">Wi-Fi, Refreshments</span>
                    </div>
                    <div className="flex justify-between">
                        <span className=' font-medium text-black leading-[32px]'>Available seats:</span>
                        <span className="font-light">7/30</span>
                    </div>
                    <div className="flex justify-between ">
                        <span className=' font-medium text-black leading-[32px]'>Price per ticket:</span>
                        <span className='font-bold text-[16px]'>  15,000 XAF</span>
                    </div>
                    </div>
            
                    {/* Button */}
                    <div className='text-center '> 
                        <button className="w-full bg-[#007BFF] text-white font-medium rounded-[20px] hover:bg-blue-500 max-w-[300px] h-[71px] text-[20px] leading-[32px]">
                        Book Now
                        </button>
                    </div>

                </div>

          </div>
        
      
  )
}

export default Card
