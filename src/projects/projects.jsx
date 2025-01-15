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
import allside from '/src/assets/all-side.webp';

import logincenter from '/src/assets/login-center.webp';
import usercenter from '/src/assets/user-center.webp';
import chatcenter from '/src/assets/chat-center.webp';
import loginside from '/src/assets/login-side.webp';
import usersude from '/src/assets/user-side.webp';
import chatside from '/src/assets/chat-side.webp';


import user from '/src/assets/customer.webp';
import biker from '/src/assets/biker.webp';
import seller from '/src/assets/seller.webp';
import Skills from '../skills/skills';


const Projects = () => {
  return (    
    
    <div className='px-4'>

      
      <h3 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 mb-8  ">Projects</h3>


      <div className='mt-16'>
            <p className="text-white text-base font-medium leading-normal">KATO-OK Delivery Application</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A delivery application for Gumaca, Quezon.</p>
          </div>

           {/* Kato-ok Photos */}
           <div className="flex gap-16 lg:gap-36 pb-3 lg:px-64 py-8 ">
      <div className='flex flex-col items-center'>
  
      <img src={user} alt="Example" className='rounded-xl  md:w-[20rem]' />
      <h1 className='text-white text-xs lg:text-base lg:mr-36'>
        Customer App
      </h1>
      </div>

      <div className='flex flex-col items-center'>
     
      <img src={seller} alt="Example" className='rounded-xl md:w-[20rem]' />
      <h1 className='text-white text-xs lg:text-base lg:mr-20' >
        Seller App
      </h1>
      </div>
     
      <div className='flex flex-col items-center'>
 
    
      <img src={biker} alt="Example" className='rounded-xl md:w-[20rem]' />
      <h1 className='text-white text-xs lg:text-base lg:mr-20'>
        Biker App
      </h1>
      </div>
      
        
      
        </div>


        <p className="text-white text-base font-medium leading-normal mt-16">UAP Quezon Chapter Information System</p>
   
        <p className="text-[#9cacba] text-sm font-normal leading-normal text-justify ">A management system built for the United Architecture of the Philippines Quezon Chapter for better management of files, records and statement of account. </p>

        <div className='flex mt-2'>
        <p className='text-white text-sm font-normal leading-normal text-justify mr-2'>
          Visit the website at: 
        </p>
        <a href="https://www.uapquezon.site/" target="_blank" rel="noopener noreferrer">
        <p className='text-[#9cacba] underline'>"https://www.uapquezon.site/"</p>
        </a>
        </div>
      

          {/* uap photos */}
  <div className="flex flex-col lg:flex-row justify-center lg:px-0 gap-12 pb-3 mt-24">
    {/* First Image Group */}
    <div className="flex  lg:flex-row gap-4 ">
      <img src={allside} alt="Example" className="rounded-xl h-[12rem] md:h-[24rem] lg:h-[32rem]" />
      {/* <img src={cpcenter} alt="Example" className="rounded-xl h-[8rem]  md:h-[16rem] lg:h-[24rem]" /> */}
    </div>
    
    {/* Second Image Group */}
    {/* <div className="flex justify-center lg:flex-row gap-4">
      <img src={tableteventside} alt="Example" className="rounded-xl h-[8rem]  md:h-[16rem] lg:h-[20rem]" />
      <img src={tabletcenter} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[20rem]" />
    </div> */}
    
    {/* Third Image Group */}
    {/* <div className="flex  justify-center lg:flex-row gap-4">
      <img src={laptopsidelogin} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[16rem]" />
      <img src={laptopcenter} alt="Example" className="rounded-xl h-[8rem] md:h-[16rem] lg:h-[16rem]" />
    </div> */}
  </div>



   

        <div className='mt-16'>
            <p className="text-white text-base font-medium leading-normal">Pasabuy Chat Application</p>
            <p className="text-[#9cacba] text-sm font-normal leading-normal">A simple chat application for delivery business.</p>
          </div>

          {/* Pasabuy */}
          <div className="flex gap-16 md:gap-36 md:px-4 lg:gap-72 pb-3 lg:px-24 py-8 justify-center">
      <div className='flex justify-center'>
  
      <img src={loginside} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      {/* <img src={logincenter} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' /> */}
      </div>

      <div className='flex justify-center'>
     
      <img src={usersude} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem] ' />
      {/* <img src={usercenter} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' /> */}
      </div>
     
      <div className='flex justify-center'>
 
    
      <img src={chatside} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' />
      {/* <img src={chatcenter} alt="Example" className='rounded-xl md:h-[16rem] lg:h-[24rem]' /> */}
      </div>
      
        
      
        </div>

     
    
        </div>
      
  );
};

export default Projects;
