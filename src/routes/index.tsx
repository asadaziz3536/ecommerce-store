import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PrivateRoutes } from "../components/common/PrivateRoutes";
import PublicRoutes from "../components/common/PublicRoutes";
const Home = lazy(() => import("../pages/Home"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const Orders = lazy(() => import("../pages/Dashboard/Orders"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Login = lazy(() => import("../pages/Auth/Login"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
const ForgotPassword = lazy(() => import("../pages/Auth/ForgotPassword"));
const EnterOtp = lazy(() => import("../pages/Auth/EnterOtp"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Categories = lazy(() => import("../pages/Categories"));
const Success = lazy(() => import("../pages/Success"));
const CancelOrder = lazy(() => import("../pages/CancelOrder"));
const DashboardHome = lazy(() => import("../pages/Dashboard/Home"));
const Profile = lazy(() => import("../pages/Dashboard/Profile"));
const UserDetail = lazy(() => import("../pages/Dashboard/UserDetail"));
const AddUser = lazy(() => import("../components/common/AddUser"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<></>}>
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
    </Suspense>
  );
};

export default AppRoutes;
