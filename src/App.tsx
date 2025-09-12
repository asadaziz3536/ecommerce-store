import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import DashboardLayout from "./layouts/DashboardLayout";
import Orders from "./pages/Dashboard/Orders";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import EnterOtp from "./pages/Auth/EnterOtp";
import CheckOut from "./pages/Cart";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="ProductDetail/:id" element={<ProductDetail />} />

      <Route path="cart" element={<Cart/>}   />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enter-otp" element={<EnterOtp />} />
    </Routes>
  );
};

export default App;
