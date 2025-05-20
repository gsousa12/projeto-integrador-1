import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../../modules/auth/pages/login-page/LoginPage";

interface LoginRouteProps {
  isAuthenticated: boolean;
}

export const LoginRoute = ({ isAuthenticated }: LoginRouteProps) => {
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  return <LoginPage />;
};
