// src/components/Projects.js
import React from 'react';
import myImage from '/src/assets/padyak.webp';
import Pasabuy from '/src/assets/Pasabuy.webp';
import UAP from '/src/assets/UAP.webp';

import cpside from '/src/assets/cp-side.webp';
import cpcenter from '/src/assets/cp-center.webp';
import tabletcenter from '/src/assets/tablet-center.webp';
import tableteventside from '/src/assets/tablet-event-side.webp';
import laptopcenter from '/src/assets/laptop-center.webp';
import laptopsidelogin from '/src/assets/laptop-side-login.webp';

import logincenter from '/src/assets/login-center.webp';
import usercenter from '/src/assets/user-center.webp';
import chatcenter from '/src/assets/chat-center.webp';
import loginside from '/src/assets/login-side.webp';
import usersude from '/src/assets/user-side.webp';
import chatside from '/src/assets/chat-side.webp';


import user from '/src/assets/customer.webp';
import biker from '/src/assets/biker.webp';
import seller from '/src/assets/seller.webp';

const Projects = () => {
  return (    
    
    <div className='px-4'>
      <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2 pt-4  ">Projects</h3>

        <p className="text-white text-base font-medium leading-normal">UAP Quezon Chapter Information System</p>
        <p className="text-[#9cacba] text-sm font-normal leading-normal">A management system built for the United Architecture of the Philippines Quezon Chapter for better management of files, records and statement of account. </p>
        

          {/* uap photos */}
  <div className="flex flex-col lg:flex-row  lg:px-0 gap-8 pb-3 mt-24">
    {/* First Image Group */}
    <div className="flex  lg:flex-row gap-4 justify-center">
      <img src={cpside} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[24rem]" />
      <img src={cpcenter} alt="Example" className="rounded-xl h-[8rem]  md:h-[16rem] lg:h-[24rem]" />
    </div>
    
    {/* Second Image Group */}
    <div className="flex justify-center lg:flex-row gap-4">
      <img src={tableteventside} alt="Example" className="rounded-xl h-[8rem]  md:h-[16rem] lg:h-[20rem]" />
      <img src={tabletcenter} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[20rem]" />
    </div>
    
    {/* Third Image Group */}
    <div className="flex  justify-center lg:flex-row gap-4">
      <img src={laptopsidelogin} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[16rem]" />
      <img src={laptopcenter} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[16rem]" />
    </div>
  </div>



        <div className='mt-16'>
            <p className="text-white text-base font-medium leading-normal">KATO-OK Delivery Application</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A simple chat application for delivery business.</p>
          </div>

           {/* Kato-ok Photos */}
           <div className="flex gap-16 pb-3 lg:px-64 py-8">
      <div className=''>
  
      <img src={user} alt="Example" className='rounded-xl  md:w-[24rem]' />
      <h1 className='text-white'>
        Customer App
      </h1>
      </div>

      <div className=''>
     
      <img src={seller} alt="Example" className='rounded-xl md:w-[24rem]' />
      <h1 className='text-white'>
        Seller App
      </h1>
      </div>
     
      <div className=''>
 
    
      <img src={biker} alt="Example" className='rounded-xl md:w-[24rem]' />
      <h1 className='text-white'>
        Biker App
      </h1>
      </div>
      
        
      
        </div>

        <div className='mt-16'>
            <p className="text-white text-base font-medium leading-normal">Pasabuy Chat Application</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A simple chat application for delivery business.</p>
          </div>

          {/* Pasabuy */}
          <div className="flex gap-16 md:gap-36 md:px-4 lg:gap-72 pb-3 lg:px-24 py-8 ">
      <div className='flex justify-center'>
  
      <img src={loginside} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      <img src={logincenter} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      </div>

      <div className='flex justify-center'>
     
      <img src={usersude} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem] ' />
      <img src={usercenter} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      </div>
     
      <div className='flex justify-center'>
 
    
      <img src={chatside} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      <img src={chatcenter} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      </div>
      
        
      
        </div>
    
        </div>
      
  );
};

export default Projects;
