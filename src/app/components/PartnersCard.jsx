'use client';

import React from 'react';
import Image from 'next/image';

const PartnersCard = ({ card }) => {
  return (
    <div className="min-w-[372px] min-h-[103px] rounded-[20px]   flex items-center justify-center   mx-2 " 
    style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}
    >
      {/* Apply a slight shadow */}
      <div className="flex justify-between gap-6 items-center  px-4 ">
        <div>
          <Image
            src={card.cardImage}
            alt={card.name}
            width={0} // Let the image size adjust dynamically
            height={0}
            sizes="(max-width: 372px) 100vw, 372px" // Responsive sizing
            className="h-auto w-auto" // Keep original aspect ratio
          />
        </div>
        <div>
          <h4 className="text-[20px] font-bold leading-[32px]">{card.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default PartnersCard;







// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const PartnersCard = ({ card }) => {
//   return (
//     <div className="min-w-[372px] min-h-[103px] rounded-[20px] border flex items-center justify-center">
//       <div className="max-w-[300px] flex justify-between gap-6">
//         <div>
//           <Image
//             src={card.cardImage}
//             width={126}
//             height={33}
//             alt={card.name}
//           />
//         </div>
//         <div>
//           <h4 className="text-[20px] font-bold leading-[32px]">{card.name}</h4>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnersCard;











// 'use client'
// import React from 'react'
// import unitedPartner from "../../../public/unitedPartner.svg"
// import Image from 'next/image'
// import partner2 from "../../../public/partner2.svg"

// const PartnersCard = ({card}) => {
    
//   return (

// //    <>
// //          {
// //         cardData.map((card, index) => (
// //             <div key={index} className='max-w-[372px] min-h-[103px] rounded-[20px] border border-black flex items-center justify-center'>
// //                 <div className='max-w-[300px] flex justify-between gap-6'>
// //                     <div>
// //                         <Image src={card.cardImage} width={126} height={33} alt={card.name} />
// //                     </div>
// //                     <div>
// //                         <h4 className='text-[20px] font-bold leading-[32px]'>
// //                             {card.name}
// //                         </h4>
// //                     </div>
// //                 </div>
// //             </div>
// //         ))
// //     }
   
// //    </>
//     <div className=' min-w-[372px] min-h-[103px] rounded-[20px] border  flex items-center justify-center'>
//         <div className=' max-w-[300px] flex justify-between  gap-6'>
//             <div className=''>
//                 <Image src={unitedPartner} width={126} height={33} alt='united partners'/>

//             </div>
//             <div>
//                 <h4 className='text-[20px] font-bold leading-[32px]'>
//                     United Express
//                 </h4>
                
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default PartnersCard


