import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../app-routes/AppRoutes";
import { LoginRoute } from "../login-route/LoginRoute";
import { GlobalWrapper } from "../wrappers/global-wrapper/GlobalWrapper";
import { GlobalLoader } from "../loader/GlobalLoader";
import { Header } from "../header/Header";

export const mockIsAuthenticated = true;

export const AppLayout = () => {
  const isAuthenticated = mockIsAuthenticated;
  return (
    <GlobalWrapper>
      <GlobalLoader />
      {isAuthenticated ? (
        <>
          <Header />
          <AppRoutes />
        </>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<LoginRoute isAuthenticated={isAuthenticated} />}
          />
        </Routes>
      )}
    </GlobalWrapper>
  );
};
