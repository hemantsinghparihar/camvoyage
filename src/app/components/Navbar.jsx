import React from 'react'
import Link from 'next/link'
import logo from "/joined.png"
import Image from 'next/image'
import trip from "/trip.png"

const Navbar = () => {
  return (
    <div className='  w-full  py-1'>
        <div className='in-nav  flex justify-between items-center  max-w-[1434px] max-h-[95px] mx-auto'>
            <div className="logo">
                <Image src={logo} width={135} height={36} alt='logo'/>


            </div>
            <div className="nav-links  py-2 flex items-center">
                <nav className=' flex items-center justify-between min-w-[745px] max-h-[38px]'>

                    <Link className=' text-white text-[20px] font-semibold' href={'/'}>
                        <div >
                            Book Your Trip
                        </div>
                    </Link>
                    
                    <Link className='  text-white text-[20px] font-semibold' href={'/'}>
                        <div >
                            Book Your Trip
                        </div>
                    </Link>

                    <Link className='  text-white text-[20px] font-semibold' href={'/'}>
                        <div >
                            Book Your Trip
                        </div>
                    </Link>


                </nav>
            </div>
            <div className="logo2">
                <Image src={trip} width={105} height={59} alt='trip'/>

            </div>
            

        </div>
     
    </div>
  )
}

export default Navbar
