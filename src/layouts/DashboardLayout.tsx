import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">

        <div className="col-span-3">
            Sidebar
        </div>
        <main className="col-span-9">
          <Outlet   />
        </main>
        
    </div>
  )
}

export default DashboardLayout