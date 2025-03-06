import type { Metadata } from "next";
import "./globals.css";
import "@/css/styles.css"
import React from "react";

export const metadata: Metadata = {
  title: "Ayothi Consultancy",
  description: "Civil Consultancy Service",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-black`}
        style={{ backgroundColor: "#F3F4F6" }}
      >
        {children}
      </body>
    </html>
  );
}