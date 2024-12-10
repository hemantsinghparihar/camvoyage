'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [langOpen, setLangOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(''); // Track the active link

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    };

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName); // Set the active link when clicked
    };

    return (
        <div className="w-full">
            <div className="in-nav pt-[40px] px-[40px] flex justify-between items-center max-w-[1434px] mx-auto">
                <div className="logo">
                    <Image src={'/Logo2.svg'} width={135} height={86} alt="logo" className="rounded-[10px]" />
                </div>
                <div className="nav-links py-2 flex items-center">
                    <nav className="flex items-center justify-between min-w-[745px] max-h-[38px]">
                        <button
                            onClick={() => {
                                handleScroll('bookTrip');
                                handleLinkClick('bookTrip');
                            }}
                            className={`text-white text-[20px] font-[900] ${activeLink === 'bookTrip' ? 'border-b-[6px] border-[#007bff]' : ''}`}
                        >
                            Book Your Trip
                        </button>

                        <button
                            onClick={() => {
                                handleScroll('ticketManagement');
                                handleLinkClick('ticketManagement');
                            }}
                            className={`text-white text-[20px] font-[900] ${activeLink === 'ticketManagement' ? 'border-b-[6px] border-[#007bff]' : ''}`}
                        >
                            Ticket Management
                        </button>

                        <button
                            onClick={() => {
                                handleScroll('support');
                                handleLinkClick('support');
                            }}
                            className={`text-white text-[20px] font-[900] ${activeLink === 'support' ? 'border-b-[6px] border-[#007bff]' : ''}`}
                        >
                            Support
                        </button>
                    </nav>
                </div>
                <div className="relative">
                    <div
                        onClick={() => {
                            setLangOpen(!langOpen);
                        }}
                        className="logo2 w-[134px] h-[59px] bg-white flex rounded-[10px]"
                    >
                        <Image src={'/trip.png'} width={102} height={52} alt="trip" className="" />
                        <span className="flex items-center">
                            <Image src={'/downArrow.svg'} width={40} height={40} alt="arrow" />
                        </span>
                    </div>

                    {langOpen && (
                        <div className="border border-black absolute bg-white min-w-[134px] min-h-[500px] bottom-[-500px] z-50">
                            {/* Additional language dropdown options */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;








// 'use client'
// import React, {useState} from 'react'
// import Link from 'next/link'
// // import logo from "/public/joined.png"
// import Image from 'next/image'
// // import trip from "/public/trip.png"
// import LangDropDown from './LangDropDown'

// const Navbar = () => {
//     const [langOpen,setLangOpen] =useState(false);

//     const handleScroll = (id) => {
//         const section = document.getElementById(id);
//         if (section) {
//           section.scrollIntoView({ behavior: 'smooth' });
//         }
//       };
//   return (
//     <div className='  w-full    '>
//         <div className='in-nav pt-[40px] px-[40px] flex justify-between items-center  max-w-[1434px]  mx-auto '>
//             <div className="logo  ">
//                 <Image src={'/Logo2.svg'} width={135} height={86} alt='logo' className='rounded-[10px]'/>


//             </div>
//             <div className="nav-links  py-2 flex items-center">
//                 <nav className=' flex items-center justify-between min-w-[745px] max-h-[38px]'>

//                 <button
//                     onClick={() => handleScroll('bookTrip')}
//                     className="text-white text-[20px] font-[900] border-b-[6px] border-[#007bff]"
//                     >
//                     Book Your Trip
//                 </button>
                    
//                 <button
//                     onClick={() => handleScroll('ticketManagement')}
//                     className="text-white text-[20px] font-[900]"
//                     >
//                     Ticket Management
//                 </button>

//                 <button
//                 onClick={() => handleScroll('support')}
//                 className="text-white text-[20px] font-[900]"
//                 >
//                 Support
//                 </button>



//                     {/* <Link className='  text-white text-[20px] font-[900]' href="#support" scroll={false}>
//                         <div >
//                             Support
//                         </div>
//                     </Link> */}


//                 </nav>
//             </div>
//            <div className=' relative'>
//                 <div 
//                 onClick={()=>{setLangOpen(!langOpen)}}
//                 className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
//                         <span className=' flex items-center'><Image src={'/downArrow.svg'} width={40 } height={40} alt='arrow' /> </span>

//                 </div>

//                 {
//                     langOpen &&(
//                         <div className= 'border border-black absolute bg-white min-w-[134px] min-h-[500px] bottom-[-500px] z-50'> 

//                     {/* <div className="logo2 border border-black  w-[134px] h-[59px] bg-white flex    justify-center items-center px-4">
//                            <div className='lang-options flex gap-2 border border-black flex-center items-center '>
//                                 <div className='rounded-full '>
//                                     <Image className=' ' src={'/Language.svg'} width={25} height={25} alt='lang' />
//                                 </div>
                                
//                                 <h2 className="lang font-[900] text-[20px]">
//                                     Hin
//                                 </h2>
//                            </div>

//                     </div> */}

//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>
//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>
//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>

//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>
//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>

//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>

//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>

//                     <div className="logo2  w-[134px] h-[59px] bg-white flex rounded-[10px]  ">
//                         <Image src={'/trip.png'} width={102} height={52} alt='trip' className='' />
                       

//                     </div>

                    

                  

//                 </div>
//                     )
//                 }
//            </div>

//            <div>
//             {/* <LangDropDown  /> */}
//             </div>

            

//         </div>
     
//     </div>
//   )
// }

// export default Navbar
