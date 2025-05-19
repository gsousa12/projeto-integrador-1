import { AppRoutes } from "../app-routes/AppRoutes";
import { LoginRoute } from "../login-route/LoginRoute";
import { GlobalWrapper } from "../wrappers/global-wrapper/GlobalWrapper";

export const mockIsAuthenticated = false;

export const AppLayout = () => {
  const isAuthenticated = mockIsAuthenticated;
  return (
    <GlobalWrapper>
      {isAuthenticated ? (
        <>
          <AppRoutes />
        </>
      ) : (
        <LoginRoute isAuthenticated={isAuthenticated} />
      )}
    </GlobalWrapper>
  );
};
