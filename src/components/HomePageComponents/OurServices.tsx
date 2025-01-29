import React from "react";
import {
  FaMapMarkedAlt,
  FaLayerGroup,
  FaFileAlt,
  FaProjectDiagram,
  FaTools,
  FaCogs,
  FaCalculator,
  FaHome,
} from "react-icons/fa";

const OurServices = () => {
  const services = [
    { name: "Surveying", icon: <FaMapMarkedAlt className="text-2xl" /> },
    {
      name: "Geotechnical Investigation",
      icon: <FaLayerGroup className="text-2xl" />,
    },
    { name: "DPR Preparation", icon: <FaFileAlt className="text-2xl" /> },
    {
      name: "Civil & Structural Engineering",
      icon: <FaProjectDiagram className="text-2xl" />,
    },
    {
      name: "Project Management Consultancy",
      icon: <FaTools className="text-2xl" />,
    },
    {
      name: "Prebid Engineering Services",
      icon: <FaCogs className="text-2xl" />,
    },
    {
      name: "Estimation & Costing",
      icon: <FaCalculator className="text-2xl" />,
    },
    { name: "Property Valuation", icon: <FaHome className="text-2xl" /> },
  ];

  return (
    <section className="relative bg-gradient-to-b from-indigo-900 to-primary text-white py-20">
      <div
        className="absolute inset-0 bg-opacity-25 bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: "url('/image/bg-construction.jpg')" }}
      />
      <div className="flex flex-col w-full items-center mx-auto text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-12">
          <span className="text-white clip-text">Our Services</span>
        </h2>
        <div className="w-2/3 sm:max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-center bg-white rounded-xl py-5 px-3 shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-secondary text-white rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
