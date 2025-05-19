import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../../modules/auth/pages/login-page/LoginPage";

interface LoginRouteProps {
  isAuthenticated: boolean;
}

export const LoginRoute = ({ isAuthenticated }: LoginRouteProps) => {
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    );
  }
};
