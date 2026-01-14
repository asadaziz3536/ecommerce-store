import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

export const PrivateRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
