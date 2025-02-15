import HomeBgImage from "@/components/HomePageComponents/HomeBgImg";
import OurClientsSlider from "@/components/HomePageComponents/OurClientsSlider";
import OurServices from "@/components/HomePageComponents/OurServices";
import ProjectsInMap from "@/components/HomePageComponents/ProjectsInMap";
import RemarkableProjects from "@/components/HomePageComponents/RemarkableProjects";
import VisionMission from "@/components/HomePageComponents/VisionMission";
import WhatWeDO from "@/components/HomePageComponents/WhatWeDo";
import React from "react";
import CountUp from "@/components/HomePageComponents/CountUp";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <HomeBgImage />
      <div className="w-full relative">
        {/* Layer 2: Scrollable Content */}
        <div className="w-full">
          <section className="h-screen flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl sm:text-7xl font-bold bg-black w-full p-3">
              Ayothi <span>Consultancy</span>
            </h1>
            <p className="text-center max-w-3xl text-xl sm:text-2xl mt-6">
              A Premier Civil Consultancy firm committed to transforming visions
              into reality. With a legacy of excellence and a passion for
              innovation, we stand as a trusted partner in shaping the
              infrastructure of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row mt-5 gap-5">
            <CountUp targetValue={40} label={"Projects"}/>
            <CountUp targetValue={20} label={"Clients"}/>
            </div>
          </section>
          <section className="w-full bg-white">
            <ProjectsInMap />
          </section>
          {/* Section 2: White Background */}
          <section className="w-full bg-white">
            <OurServices />
          </section>
          <WhatWeDO />
          <RemarkableProjects />
          {/* Section 3: Mission */}
          <VisionMission />
          {/* Section 4: Our Clients */}
          <OurClientsSlider />
        </div>
      </div>
    </div>
  );
};

export default page;
