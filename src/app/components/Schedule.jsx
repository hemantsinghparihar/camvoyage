import React from 'react'
import ScheduleCarousel from './ScheduleCarousel'

const Schedule = () => {
  return (
    <div className='flex flex-col gap-4 mt-[60px]'>
        <h1 className='text-center text-[36px] font-bold text-[#FFC107] leading-[32px]'>Available Schedules</h1>
        <h2 className='text-[36px] font-bold text-[#FFC107] ml-[44px]'>
            Today: <span className='font-normal'>02/12/2024</span>
        </h2>

        <ScheduleCarousel />
      
    </div>
  )
}

export default Schedule
