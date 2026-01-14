import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Orders from "../pages/Dashboard/Orders";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import EnterOtp from "../pages/Auth/EnterOtp";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import Categories from "../pages/Categories";
import Success from "../pages/Success";
import CancelOrder from "../pages/CancelOrder";
import DashboardHome from "../pages/Dashboard/Home";
import { PrivateRoutes } from "../components/common/PrivateRoutes";
import Profile from "../pages/Dashboard/Profile";
import UserDetail from "../pages/Dashboard/UserDetail";
import AddUser from "../components/common/AddUser";
import PublicRoutes from "../components/common/PublicRoutes";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="ProductDetail/:id" element={<ProductDetail />} />
        <Route path="categories" element={<Categories />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="users/add" element={<AddUser />} />
        </Route>
      </Route>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/enter-otp" element={<EnterOtp />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<CancelOrder />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
