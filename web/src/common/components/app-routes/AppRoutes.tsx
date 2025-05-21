import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../not-found-page/NotFoundPage";
import { ProtectedRoute } from "../protected-route/ProtectedRoute";
import { HomePage } from "../../../modules/home/pages/HomePage";

export const AppRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  );
};
