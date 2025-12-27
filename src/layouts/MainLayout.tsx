import Footer from "@/components/common/layout/Footer";
import Navbar from "@/components/common/layout/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
