"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const ProjectsInMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null); // Store map instance

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      import("leaflet").then((leaflet) => {
        const map = leaflet.map("tamilnadu-map", {
          center: [10.8505, 78.7047],
          zoom: 6,
        });

        // Add OpenStreetMap tiles
        leaflet
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          })
          .addTo(map);

        // Define project cities with coordinates
        const projectCities: { name: string; coords: LatLngExpression }[] = [
          { name: "Chennai", coords: [13.0827, 80.2707] },
          { name: "Coimbatore", coords: [11.0168, 76.9558] },
          { name: "Madurai", coords: [9.9252, 78.1198] },
          { name: "Trichy", coords: [10.7905, 78.7047] },
          { name: "Salem", coords: [11.6643, 78.146] },
        ];

        // Add blue circle markers for each city
        projectCities.forEach((city) => {
          leaflet
            .circleMarker(city.coords, {
              color: "blue",
              radius: 5,
              fillColor: "#007bff",
              fillOpacity: 0.8,
            })
            .addTo(map)
            .bindPopup(`<b>${city.name}</b>`);
        });

        // Store map instance in ref
        mapRef.current = map;
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <section className="w-full py-8 bg-gray-100 px-5 z-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Our Presence in Tamil Nadu
        </h2>
        <p className="text-xl text-black text-center mb-6">
          Highlighted cities indicate where we have successfully completed
          projects.
        </p>
        <div
          id="tamilnadu-map"
          className="w-full sm:w-2/3 h-[300px] sm:h-[400px] rounded-lg shadow-lg mx-auto"
        ></div>
      </div>
    </section>
  );
};

export default ProjectsInMap;
