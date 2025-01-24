import type { Metadata } from "next";
import "./globals.css";
import "@/css/style.css"
import React from "react";

export const metadata: Metadata = {
  title: "Ayothi Consultancy",
  description: "civil consultancy service",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
// import type { Metadata } from "next";
// import { Cormorant_Garamond } from "next/font/google";
// import "./globals.css";
// import React from "react";

// const garamond = Cormorant_Garamond({
//   variable: "--font-cormorant-garamond",
//   weight: "300",
// });

// export const metadata: Metadata = {
//   title: "Ayothi Consultancy",
//   description: "civil consultancy service",
// };

// export default function RootLayout({
//   children,
// }: {
//   readonly children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${garamond.variable} antialiased`}>{children}</body>
//     </html>
//   );
// }
