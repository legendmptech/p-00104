// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Our Gallery", href: "/our-gallery" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "About Us", href: "/about-us" },
    // { name: "Innovation", href: "/innovation" },
    // { name: "Office & Labs", href: "/office-labs" },
  ];

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 left-0 z-40">
        <div className="h-18 lg:px-20 text-black mx-auto flex justify-between items-center px-3 sm:px-4 py-3">
          <h1 className="text-2xl font-bold">
            <Link href="/" className="text-heading-6 flex items-center">
              <Image alt={"logo"} src={"/images/logo/logo.jpeg"} width={60} height={60}/> Ayothi Consultancy
            </Link>
          </h1>
          <div className="lg:hidden">
            <button
              onClick={toggleSidebar}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-800 hover:bg-primary hover:text-white p-3 transition-all duration-300"
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`bg-white text-black z-40 fixed top-0 left-0 h-full w-2/3 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <Image
            className=""
            src={"/images/logo/logo.jpeg"}
            alt="Logo"
            width={120}
            height={120}
          />
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none flex items-start"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="gap-2 px-4 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleSidebar}
              className="block text-lg font-medium text-gray-800 hover:bg-primary hover:text-white p-3 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
