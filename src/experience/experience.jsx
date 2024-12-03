import React from "react";

import TSI from '/src/assets/TSI.webp';

import Freelance from '/src/assets/Freelance.webp';
const Experience = () =>{
    return(
        <div>
               <div className="flex items-center gap-4  px-4 min-h-[72px] py-2">
               <img src={TSI} alt="Example" className='rounded-xl size-48' />
              <div className="flex flex-col justify-center">
              <p className="text-white text-base font-black leading-normal line-clamp-1">Trifecta Solutions Inc.</p>
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Software Engineer Intern</p>
                <p className="text-[#9cacba] text-sm font-normal leading-normal line-clamp-2">April 2024 - July 2024 • 4 mos</p>
              </div>
            </div>
            <div className="flex items-center gap-4  px-4 min-h-[72px] py-2">
            <img src={Freelance} alt="Example" className='rounded-xl size-48' />
              <div className="flex flex-col justify-center">
                <p className="text-white text-base font-medium leading-normal line-clamp-1">Freelance</p>
                <p className="text-[#9cacba] text-sm font-normal leading-normal line-clamp-2">August 2024 - Present</p>
              </div>
            </div>
        
        </div>
    )
}

export default Experience;