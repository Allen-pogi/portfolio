import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import Skills from "./skills/skills";
import pfp from "/src/assets/pfp.webp";
import ThreeDScene from "./3d/3d";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="main-container w-full md:px-32 bg-[#111518] overflow-y-hidden"
      style={{
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
        minHeight: "100vh",
      }}
    >
      <div className="layout-container flex h-full w-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="flex flex-col flex-1">
            <div className="flex flex-col md:flex-row items-center p-4">
              <div
                className="flex w-full flex-col md:flex-row gap-4 items-center"
                data-aos="fade-up"
              >
              <div className=" w-[24em] h-[24em]  mt-10" data-aos="fade-up" data-aos-delay="400">
              <ThreeDScene />
            </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                    Allen Paul A. Rebolla
                  </p>
                  <p className="text-[#9cacba] text-base font-normal leading-normal text-center">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div
                className="flex w-full max-w-[720px] gap-3 @[480px]:w-auto mt-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-white">
                  My name is Allen Paul Rebolla, a front-end developer based in Gumaca, Quezon,
                  Philippines. I have worked on a wide range of front-end projects, from delivery
                  applications to web management system, with a focus on creating clean,
                  well-crafted interfaces that not only look great but also provide a seamless user
                  experience.
                </p>
              </div>
            </div>

            {/* Add ThreeDScene Below Profile */}
          
            

            {/* Projects Section */}
            <div data-aos="fade-up" data-aos-delay="400" className="mt-10">
              <Projects />
            </div>

            {/* Experience Section */}
            <h3
              className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 mt-10"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Experience
            </h3>
            <div data-aos="fade-up" data-aos-delay="800" className="mt-5">
              <Experience />
            </div>

            {/* Skills Section */}
            <div data-aos="fade-up" data-aos-delay="1000" className="mt-10">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
