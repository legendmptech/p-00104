import type { Metadata } from "next";
import "@/app/globals.css";
import "@/css/style.css";
import React from "react";
import AdminHeader from "@/components/Admin/AdminHeader";
import AdminClientLayout from "@/components/Layouts/AdminClientLayout";
import AuthProvider from "@/components/Providers/AuthProvider";

export const metadata: Metadata = {
  title: "Ayothi Consultancy",
  description: "civil consultancy service",
};

export default function AdminLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminClientLayout>{children}</AdminClientLayout>
    </AuthProvider>
  );
}
