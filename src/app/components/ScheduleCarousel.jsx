'use client'
import React from "react";
import Slider from "react-slick";
import Card from "./Card";

const ScheduleCarousel = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of visible cards
    slidesToScroll: 1, // Number of cards to scroll
    arrows: true, // Show next/prev arrows
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
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      <Slider {...settings}>
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
