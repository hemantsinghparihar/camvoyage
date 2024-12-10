'use client'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <section id='support' className="contact px-2 pb-[80px] ">
        <div className="py-4  ">

        <div className="head flex  items-center justify-center gap-4 ">
            <span className=""><Image src={'/LineL.svg'} width={600} height={2} alt="left line" /></span>
            <h2 className="md:text-[40px] text-[25px] sm:text-[20px] min-w-[197px]">Contact Us</h2>
            <span 
            
            className=" "
            >
            <Image src={'/LineR.svg'} width={600} height={2} alt="right line" /></span>
        </div>




        <div className="contact-content max-w-[90%]  px-6 flex  py-4 ">
            
            <div className="left w-[40%]  flex flex-col items-center gap-[28px]   ">
            <Image src={'/Logo2.svg'} width={351} height={205} alt="logo" />

            <div className=' flex flex-col gap-2 min-w-[230px]'>
                <div className="socials flex justify-center gap-2 py-2 px-2 max-w-[80px] rounded-[10px] bg-[#FCECBC]">
                    <Image src={'/whats.svg'} width={24} height={24} alt="whatsapp" />
                    <Image src={'/call.svg'} width={24} height={24} alt="phone" />

                </div>
                <h5 className="text-[20px] text-black font-medium mt-[17px]">+237 650 11 85 88</h5>
            </div>


            </div>
        
            <div className="right  flex flex-col gap-4 items-center pt-[7rem]  ">
            <div className="min-w-[625px] px-2 flex flex-col gap-4">
                <div className="row flex w-full gap-2">
                <div className="First flex-1"> 
                    <h4 className="text-[20px] font-medium text-[#333333]">First name</h4>
                    <input type="text" className="w-full border border-black px-2 py-2 rounded-[20px] min-h-[70px]" placeholder="Enter here"/>
                </div>
                <div className="First flex-1"> 
                    <h4 className="text-[20px] font-medium text-[#333333]">Last name</h4>
                    <input type="text" className="w-full border border-black px-2 py-2 rounded-[20px] min-h-[70px]" placeholder="Enter here"/>
                </div>
                
                </div>
                <div className="First flex-1"> 
                    <h4 className="text-[20px] font-medium text-[#333333]">Phone number</h4>
                    <input type="text" className="w-full border border-black px-2 py-2 rounded-[20px] min-h-[70px]" placeholder="Enter "/>
                </div>

                <button className="rounded-[20px] bg-[#007BFF]  mt-4 w-full py-4  text-white font-bold  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Proceed                      
                </button> 
            </div>
            </div>

        </div>


        </div>
  </section>
  )
}

export default Contact
