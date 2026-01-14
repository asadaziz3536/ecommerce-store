import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }
  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoutes;
