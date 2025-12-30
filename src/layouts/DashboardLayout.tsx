import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/layout/AppSidebar";
import Header from "@/components/common/Dashboard/Header";

const DashboardLayout = () => {
  return (
    <>
      <SidebarProvider className="grid">
        <Header />
        <div className="flex md:gap-5">
          <div className="w-max-[256px]">
            <AppSidebar />
          </div>
          <main className="flex-1 pt-[80px] md:pt-[60px] px-4">
            <SidebarTrigger className="hidden md:block" />

            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
