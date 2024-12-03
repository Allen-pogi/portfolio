import React from "react";

const Skills = () => {
    return(
<div>
<h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Skills</h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">JavaScript</p>
              </div>


              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">React</p>
              </div>
             
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Git</p>
              </div>

              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Firebase</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Flutter</p>
              </div>

              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#283139] pl-4 pr-4">
                <p className="text-white text-sm font-medium leading-normal">Dart</p>
              </div>
            </div>
</div>
    );
}

export default Skills;