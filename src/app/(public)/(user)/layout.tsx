import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default layout;
