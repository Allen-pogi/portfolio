import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import MSK from "/src/assets/MSK.webp";
import TSI from "/src/assets/TSI.webp";
import Freelance from "/src/assets/Freelance.webp";
import Cafe from "/src/assets/cafe.webp";

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const ExperienceCarousel = () => {
  const experiences = [
    {
      image: TSI,
      title: "Trifecta Solutions Inc.",
      role: "Software Engineer Intern",
      duration: "April 2024 - July 2024 • 4 mos",
    },
    {
      image: Freelance,
      title: "Freelance",
      role: "Freelance Developer",
      duration: "August 2024 - Dec 2024",
    },
    {
      image: Cafe,
      title: "Internet Cafe",
      role: "Technical Support / Maintenance",
      duration: "April 2022 - September 2024 • 2 yrs",
    },
    {
      image: MSK,
      title: "Gumaca Multi-Purpose Cooperative",
      role: "Encoder",
      duration: "Septemer 2018 - December 2018 • 3 mos",
    },

  ];

  return (
    <div className='slider-container'>
   <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Keep autoplay going even after user interaction
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation, ]} // Add Autoplay here
      >
        {experiences.map((experience, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center  rounded-lg ">
              <img
                src={experience.image}
                alt={experience.title}
                className="rounded-lg w-32 h-32 lg:w-56 lg:h-56 transition-all duration-500"
              />
              <div className="text-center mt-4">
                <p className="text-xl text-white font-bold">{experience.title}</p>
                <p className="text-[#9cacba] text-sm">{experience.role}</p>
                <p className="text-[#9cacba] text-xs">{experience.duration}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default ExperienceCarousel;
