import SidebarComponent from "@/components/layout/Sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarComponent />
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
