// src/components/Projects.js
import React from 'react';
import myImage from '/src/assets/padyak.webp';
import Pasabuy from '/src/assets/Pasabuy.webp';
import UAP from '/src/assets/UAP.webp';

const Projects = () => {
  return (
    <div>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Projects</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
        <img src={myImage} alt="Example" className='rounded-xl' />
          <div>
            <p className="text-white text-base font-medium leading-normal">Kato-ok Application</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A mobile delivery application for Gumaca, Quezon</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
        <img src={Pasabuy} alt="Example" className='rounded-xl' />
          <div>
            <p className="text-white text-base font-medium leading-normal">Chat Application</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A simple chat application for delivery business.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3">
        <img src={UAP} alt="Example" className='rounded-xl' />
          <div>
            <p className="text-white text-base font-medium leading-normal">UAP Quezon Chapter Information System</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A management system built for the United Architecture of the Philippines Quezon Chapter for better management of files, records and statement of account. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
