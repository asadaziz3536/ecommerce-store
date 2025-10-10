import React, { useEffect } from "react";

import { Navigate, Route, Router, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import Success from "./pages/Success";
import CancelOrder from "./pages/CancelOrder";
import DashboardHome from "./pages/Dashboard/Home";
import { PrivateRoutes } from "./components/common/PrivateRoutes";
import Profile from "./pages/Dashboard/Profile";
import Users from "./pages/Dashboard/Users";
import UserDetail from "./pages/Dashboard/UserDetail";
import AddUser from "./components/common/AddUser";
import { ToastContainer } from "react-toastify";

const App = () => {
 
  return (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="ProductDetail/:id" element={<ProductDetail />} />
        <Route path="categories" element={<Categories />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="users/add" element={<AddUser />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enter-otp" element={<EnterOtp />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<CancelOrder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnHover />


  
    </>
  );
};

export default App;
