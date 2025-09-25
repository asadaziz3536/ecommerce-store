import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/AppSidebar";
import Header from "@/components/common/Dashboard/Header";

const DashboardLayout = () => {
  return (
    <>
    <Header />
    <SidebarProvider className="grid">
      <div className="flex md:gap-5">
        <div className="w-max-[256px]">
          <AppSidebar   />
        </div>
        <main className="flex-1 pt-[60px] px-4">
          <SidebarTrigger />

          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  </>
  
  );
};

export default DashboardLayout;
