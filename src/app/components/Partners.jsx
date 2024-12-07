import React from 'react'
import PartnersCard from './PartnersCard'
import PartnersCarousel from './PartnersCarousel'

const Partners = () => {
  return (
    <div>
     <div className='max-w-[864px] text-center mx-auto'>
      <h1 className='text-[40px] font-semibold text-[#007BFF]'>Our Partners</h1>
      <p className='text-[20px] font-light text-[#333333] leading-[32px]'>At &nbsp;
        <span className='font-medium'><span className='text-[#007BFF] '>Cam</span><span className='text-[#FFC107]'>Voyage</span></span> ,
         we are proud to collaborate with a variety of trusted bus agencies to provide you with the best travel options available. Our partners are committed to delivering safe, reliable, and comfortable journeys across various routes.
         </p>
     </div>

      <PartnersCarousel/>
      <PartnersCarousel/>

    </div>
  )
}

export default Partners
