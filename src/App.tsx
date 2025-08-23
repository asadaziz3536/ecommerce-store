import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import Orders from "./pages/Dashboard/Orders";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products"  element={<Products  />}   />
        <Route path="ProductDetail"  element={<ProductDetail />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout  />} >
         <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
