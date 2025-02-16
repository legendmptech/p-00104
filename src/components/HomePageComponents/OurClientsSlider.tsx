"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function OurClientsSlider() {
  // Type the ref to ensure it's pointing to an HTMLDivElement
  const sliderRef = useRef<HTMLDivElement>(null);

  // Array of client image paths
  const clientImages = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijvX7vK4RJz8oxv99ZEes_aY9LH-Uz6M5ZXWbR_b_fSBvEdUnSpP33wsUPvOiOLB9L5fwrXsrNylkvdZw8UIi0YijbxnKah3LpDFYlonT0FZYs8CCPIXe5_nNymMaYZTpqB6m6VtBOobenaPXPEhoHi6IEfGa8L6q5QpxBzGbuSqEbqLpSG27YDMscUmDN/w610-h640/CLIENT_IIT%20Madras.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE8u-TuGFKM18t8d7FY4m2Wh5Db5zv1TgA5wi9BsRUG3kQUJazxUYdABU6kymPuzA21VdZ2PdmLjruSfJmQ-MxXs55yN4hyj0il2K6jWW-3IWbd6Nc2oWMfUxdb1uYR1I7QB8eFJ9GIL4FRqr13SWaaIGzQ3QOunZuS4CpSAqXqwgCJdkMPa1jH9rSzGda/w640-h360/CLIENT_Shell.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnltMxElmUhYIqPzV58fxoVvIkxf57NOkCf82Ulf5hYrnnGIC_MviEKnbJP0MvNrkWoknmcX9-n-EgvC-pUO5KmUcoXnOhJqhnNJ8zhGcAkOsn75mJFWBP1scf4h2lw6hPeF9GVrVHGUwyuGML4tVclHm4S8rkLb9eS9VlwSaDwz8-rCASQ8Y4XtR2B3Ec/w584-h640/CLIENT_Tamil%20Nadu.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYxQjcBBd5CINXkrEuTIUDwdf_UqZZq-G4XLP4oW02BxgRuAuXNf_ZBRAdWsxKCU-0E33J0bxV0XfqTtopbG7FgMd4oXuQYOk3iYUvc-yjdHwjBbUkHPdGRzb3-12W-Pnvy5I0vKstRjKp96eLIvuxARnJm0dZkIZGbYtJ17m_Tm90GeeCPYLrrvK_fkGe/w640-h626/CLIENT_aditya%20birla.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDKwMXWfAvXWFYLgyFPO9u3nQJTsWgLbdf1neuLDiuQNk9k2KD2WQLzeHJLj8leZKH0309OhDL4igBvjtc403rkT1GazTMKYMqRbNd8klpPEYanUuW0MmR21VptAQs5HjBIKVFb8UiSCfbjL1vLhG_fKsZcoUSub9cstqD98X-92QMKoPT4yTtT5_hyphenhyphenhd3/w640-h422/CLIENT_CMDA.jpg",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtlYB1d18ZxAj6kVZN2X6970i1dfr_jBi4fWKKlKlBCpidnkUNMFQG-DBz7M2IHn3MeUdY0lR8NFxCUSVwl-dOqhqn2fpwlIjSW-skh9Zr6-tmZPuEE1jAgECf96OTTTw6hQWyafQ2-oRnuLBwpM_vrSe3AULfW3Onz0Le5A5159AzRwest-KlCi12VAI4/w640-h422/CLIENT_NHAI.jpg"
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return; // Early return if slider is null

    const scrollSpeed = 1; // Adjust this to control the speed of the train-like movement

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
            className="bg-white flex gap-2 whitespace-nowrap overflow-x-auto no-scrollbar"
          >
            {clientImages.concat(clientImages).map((image, index) => (
              <div key={index} className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] flex-shrink-0 bg-white">
                <Image
                  src={image}
                  alt={`Client ${index + 1}`}
                  width={200} // Width set to 200px
                  height={200} // Height set to 200px
                  className="object-cover rounded-lg w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
