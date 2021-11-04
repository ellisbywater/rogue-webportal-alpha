import { useState } from "react";
import MenuProvider from "@/context/MenuProvider";
import { useRouter } from "next/router";
import Header from "../shared/header";
import Sidebar from "../dashboard/sidebar";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  return (
    <MenuProvider>
      <Header>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
      </Header>
      <div className="bg-gray-900">
        <Sidebar>{children}</Sidebar>
      </div>
    </MenuProvider>
  );
}
