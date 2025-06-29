"use client";
import React from "react";

export default function HomeBgImg() {
  return (
    <div>
      {/* Layer 1: Fixed Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center top-0 left-0"
        style={{
          backgroundImage: `url('https://blogger.googleusercontent.com/img/a/AVvXsEjkIoFInwtOAxHF0aUobSuvpC3qHfJ4mVuIGEtHjMd17WAd_x9BSCR3L6orE2U6l6qHb181LvZHCGyJ2nNuEYg7eYsYmW3un90Q-cdnmFZmSZ5QtrZ-EMTcdV_etYEEBq-kRlteXhld6IFdxhRnO3uQv1VrsDfAeMaTF9EZhOnaroJUjHP0zonroUPW4VSv')`,
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      </div>
    </div>
  );
}
