"use client";
import React from "react";

export default function HomeBgImg() {
  return (
    <div>
      {/* Layer 1: Fixed Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center top-0 left-0"
        style={{
          backgroundImage: `url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqlsgszjU6vCRn3N-rSlBrpRiWpJhreN6TPp2RiHK_hpBDheTTloNJNVsirSNqFa5lMNS3QoCpKmiFfsQVuTSmDvMXZZXnlRcSROKv6VcRJVVTpY6ejr8uGontDflRJwv_WiuceGiL_8ObKcoaq86HFFhBQB1ZZ4Uosq6smQ42E5aW_UWlZJzFWWYRbEam/s16000/bg-construction.png')`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      </div>
    </div>
  );
}
