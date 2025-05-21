import { Navigate, Outlet } from "react-router-dom";
import { mockIsAuthenticated } from "../app-layout/AppLayout";

export const ProtectedRoute = () => {
  const isAuthenticated = mockIsAuthenticated;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
