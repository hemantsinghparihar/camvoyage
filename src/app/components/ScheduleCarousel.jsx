'use client';
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ScheduleCarousel = () => {
  // Custom arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-1/2 -translate-x-[60px] bottom-[-100px] z-10 bg-white rounded-[10px] p-2 shadow-lg hover:bg-gray-200 h-[50px] w-[67px] flex justify-center "
    >
      <span className=""> <Image src={'/leftArrow.svg'} width={30} height={30} alt="left" /></span>
      
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-1/2 translate-x-[60px] bottom-[-100px] z-10 bg-white p-2 shadow-lg hover:bg-gray-200 h-[50px] w-[67px] rounded-[10px] flex justify-center"
    >
      <span> <Image src={'/rightArrow.svg'} width={30} height={30} alt="left" /></span>
      
    </button>
  );

  // Slick slider settings
  const settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of visible cards
    slidesToScroll: 1, // Number of cards to scroll
    arrows: true, // Show next/prev arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 pt-10 pb-12 relative ">
      <Slider {...settings} className=" ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
};

export default ScheduleCarousel;









// 'use client'
// import React from "react";
// import Slider from "react-slick";
// import Card from "./Card";

// const ScheduleCarousel = () => {
//   // Slick slider settings
//   const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite scrolling
//     speed: 500, // Animation speed
//     slidesToShow: 3, // Number of visible cards
//     slidesToScroll: 1, // Number of cards to scroll
//     arrows: true, // Show next/prev arrows
//     responsive: [
//       {
//         breakpoint: 1024, // Adjust for tablet screens
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768, // Adjust for mobile screens
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-[1400px]  mx-auto px-4 py-8">
//       <Slider {...settings} className=" ">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </Slider>
//     </div>
//   );
// };

// export default ScheduleCarousel;








// import React from 'react'
// import Card from './Card'

// const ScheduleCarousel = () => {
//   return (
//     <div className='border flex gap-2'>
        
//         <Card/>
//         <Card/>
//         <Card/>
      
//     </div>
//   )
// }

// export default ScheduleCarousel
