"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function OurClientsSlider() {
  // Type the ref to ensure it's pointing to an HTMLDivElement
  const sliderRef = useRef<HTMLDivElement>(null);

  // Array of client image paths
  const clientImages = [
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png",
    "/images/bg-construction.png", // Add more client images here
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return; // Early return if slider is null

    let scrollSpeed = 1; // Adjust this to control the speed of the train-like movement

    const moveSlider = () => {
      // Scroll the slider to the left by 1px
      slider.scrollLeft += scrollSpeed;

      // If the scroll position reaches the end, reset it to create a continuous loop
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    };

    const interval = setInterval(moveSlider, 10); // Move the slider every 10ms for smooth motion

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Valuable Clients
        </h2>
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-2 whitespace-nowrap overflow-x-auto no-scrollbar"
          >
            {clientImages.concat(clientImages).map((image, index) => (
              <div key={index} className="w-[200px] h-[200px] flex-shrink-0">
                <Image
                  src={image}
                  alt={`Client ${index + 1}`}
                  width={200} // Width set to 200px
                  height={200} // Height set to 200px
                  className="object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
