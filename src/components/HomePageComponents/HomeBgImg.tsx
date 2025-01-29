"use client";
import React from "react";

export default function HomeBgImg() {
  return (
    <div>
      {/* Layer 1: Fixed Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/bg-construction.png')`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      </div>
    </div>
  );
}
