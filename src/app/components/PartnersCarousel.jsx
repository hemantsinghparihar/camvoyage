'use client';

import React from 'react';
import PartnersCard from './PartnersCard';
import Slider from 'react-slick';

const PartnersCarousel = () => {
  const cardData = [
    {
      cardImage: '/partner2.svg',
      name: 'FINEXS Voyage',
    },
    {
      cardImage: '/unitedPartner.svg',
      name: 'United Express',
    },
    {
      cardImage: '/partner2.svg',
      name: 'FINEXS Voyage',
    },
    {
      cardImage: '/unitedPartner.svg',
      name: 'United Express',
    },
  ];


  const settings = {
    infinite: true, 
    speed: 3000, 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 0, 
    cssEase: 'linear', 
    arrows: false,
    dots: false, // Remove navigation dots
    variableWidth: true, 
  };

  return (
    <div className="px-4 my-6 py-4">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="mx-2"> {/* Add spacing between cards */}
            <PartnersCard card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;










// 'use client';

// import React from 'react';
// import PartnersCard from './PartnersCard';
// import Slider from 'react-slick';

// const PartnersCarousel = () => {
//   const cardData = [
//     {
//       cardImage: '/partner2.svg',
//       name: 'FINEXS Voyage',
//     },
//     {
//       cardImage: '/unitedPartner.svg',
//       name: 'United Express',
//     },
//     {
//       cardImage: '/partner2.svg',
//       name: 'FINEXS Voyage',
//     },
//     {
//       cardImage: '/unitedPartner.svg',
//       name: 'United Express',
//     },
//   ];

//   // Slick settings for free flow and auto-scroll
//   const settings = {
//     infinite: true, 
//     speed: 3000, 
//     slidesToShow: 2, // Number of slides visible at once
//     slidesToScroll: 1, // Scroll one slide at a time
//     autoplay: true, // Enable auto-scroll
//     autoplaySpeed: 0, // No delay for continuous scrolling
//     cssEase: 'linear', // Smooth scrolling
//     arrows: false, // Disable navigation arrows
//     dots: false, // Remove navigation dots
//     variableWidth: true, // Free-flowing widths
//   };

//   return (
//     <div className="px-4 my-6 py-4">
//       <Slider {...settings}>
//         {cardData.map((card, index) => (
//           <PartnersCard key={index} card={card} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default PartnersCarousel;







// 'use client'
// import React from 'react'
// import PartnersCard from './PartnersCard'
// import Slider from "react-slick";


// const PartnersCarousel = () => {
//     const cardData=[
//         {
//             cardImage:'/partner2.svg',
//             name:'FINEXS Voyage'
//         },
//         {
//             cardImage:'/unitedPartner.svg',
//             name:'United Express'
//         },
//         {
//             cardImage:'/unitedPartner.svg',
//             name:'United Express'
//         },
       
//     ]
//   return (
//     <div className=' px-4 my-6 py-4 flex gap-4'>
//         {
//             cardData.map((card,index)=>(
//                 <PartnersCard key={index} card={card}/>
//             ))
//         }
        

      
//     </div>
//   )
// }

// export default PartnersCarousel
