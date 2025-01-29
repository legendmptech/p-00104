import HomeBgImage from "@/components/HomePageComponents/HomeBgImg";
import OurClientsSlider from "@/components/HomePageComponents/OurClientsSlider";
import OurServices from "@/components/HomePageComponents/OurServices";
import RemarkableProjects from "@/components/HomePageComponents/RemarkableProjects";
import VisionMission from "@/components/HomePageComponents/VisionMission";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <HomeBgImage />
      <div className="w-full relative">
        {/* Layer 2: Scrollable Content */}
        <div className="w-full">
          <section className="h-screen flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl sm:text-7xl font-bold">
              Ayothi <span>Consultancy</span>
            </h1>
            <p className="text-center max-w-3xl text-xl sm:text-2xl mt-4">
              A Premier Civil Consultancy firm committed to transforming visions
              into reality. With a legacy of excellence and a passion for
              innovation, we stand as a trusted partner in shaping the
              infrastructure of tomorrow.
            </p>
          </section>
          {/* Section 2: White Background */}
          <section className="w-full bg-white">
            <OurServices />
          </section>
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
