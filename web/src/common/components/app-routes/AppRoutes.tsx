import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/NotFoundPage";
import { ProtectedRoute } from "../protected-route/ProtectedRoute";
import { HomePage } from "../../../modules/home/pages/HomePage";
import { LoginPage } from "@/modules/auth/pages/login-page/LoginPage";

export const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  );
};
