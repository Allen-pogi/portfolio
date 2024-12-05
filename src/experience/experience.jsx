import React from "react";

import TSI from '/src/assets/TSI.webp';
import Freelance from '/src/assets/Freelance.webp';
import Cafe from '/src/assets/cafe.webp';

const Experience = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4">
        {/* First Item */}
        <div className="flex items-center gap-4 min-h-[72px] py-2">
          <img src={Cafe} alt="Example" className="rounded-xl size-24 md:size-36 lg:size-48" />
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-black leading-normal line-clamp-1">Internet Cafe.</p>
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Technical Support / Maintenance</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal line-clamp-2">April 2022 - September 2024 • 2 yrs</p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex items-center gap-4 min-h-[72px] py-2">
          <img src={TSI} alt="Example" className="rounded-xl size-24 md:size-36 lg:size-48" />
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-black leading-normal line-clamp-1">Trifecta Solutions Inc.</p>
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Software Engineer Intern</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal line-clamp-2">April 2024 - July 2024 • 4 mos</p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex items-center gap-4 min-h-[72px] py-2">
          <img src={Freelance} alt="Example" className="rounded-xl size-24 md:size-36 lg:size-48" />
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">Freelance</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal line-clamp-2">August 2024 - Dec 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
