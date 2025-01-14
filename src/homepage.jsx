import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import ThreeDScene from "./3d/3d";
import "./index.css";
import { motion } from "framer-motion";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="overflow-y-visible"
      style={{
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
        minHeight: "100vh",
        position: "relative", // Ensure relative positioning for background elements
      }}
    >
      {/* Background container for background elements */}
      <div className="background-container">
      <img 
  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" 
  alt="Moon"
  className="moon-img  md:h-[70vh] md:w-[70vh]   z-3 right-5  sticky top-0"
/>

        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>

      <div className="flex h-full w-full grow px-8 md:px-16 flex-col relative">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row items-center p-4">
            <div
              className="flex w-full flex-col lg:flex-row gap-4 items-center"
              data-aos="fade-up"
            >
              <div className="md:w-[16em] md:h-[16em] lg:w-[24em] lg:h-[24em] h-[8em] w-[8em] mt-10" data-aos="fade-up" data-aos-delay="400">
                <ThreeDScene />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                  Allen Paul A. Rebolla
                </p>
                <p className="text-[#9cacba] text-base font-normal leading-normal text-center">
                  Web Developer
                </p>
              </div>
            </div>
            <motion.div
              className="flex w-full max-w-[720px] gap-3 @[480px]:w-auto mt-5"
           
              initial={{ x: '100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 20 }}
            >
              <p className="text-white text-justify">
                My name is Allen Paul Rebolla, a front-end developer based in Gumaca, Quezon, Philippines. I have worked on a wide range of front-end projects, from delivery applications to web management system, with a focus on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.
              </p>
            </motion.div>
          </div>

          {/* Projects Section */}
          <div data-aos="fade-up" data-aos-delay="400" className="mt-10">
            <Projects />
          </div>

          {/* Experience Section */}
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 mt-24" data-aos="fade-up" data-aos-delay="600">
            Experience
          </h3>
          <div data-aos="fade-up" data-aos-delay="800" className="mt-5">
            <Experience />
          </div>

          {/* Skills Section */}
          <div data-aos="fade-up" data-aos-delay="1000" className="mt-2">
            <Skills />
          </div>
        </div>

        <div className=" text-center py-4 mt-16">
          <p className="text-[#9cacba] text-sm">
            This portfolio was created in 8 hours, including asset collection. Due to time constraints, it doesn't include intricate designs.
          </p>
          <p className="text-white text-sm mt-2">
            Built using React and Tailwind CSS.
          </p>
          <p className="text-[#9cacba] text-xs mt-2">
            © {new Date().getFullYear()} Allen. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
