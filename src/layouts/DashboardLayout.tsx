import { Outlet } from "react-router-dom"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/common/AppSidebar"

const DashboardLayout = () => {
  return (
    <SidebarProvider>
    <div className="grid grid-cols-12">

        <div className="col-span-3">
           <AppSidebar variant="inset" />
        </div>
        <main className="col-span-9">
          <SidebarTrigger  />
       <Outlet />
        </main>
        
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout