import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface AuthWrapperProps {
  children: ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();

  useEffect(() => {
  const protectedRoutes = [
    "/telainicial",
    "/telapet",
    "/cadastrarpet",
    "/meuspets",
    "/doações",
    "/contato"
  ];

  if (protectedRoutes.includes(location.pathname)) {
    console.log("Simulando login para rota:", location.pathname); // 👈 teste
    setIsLoggedIn(true);
  }
}, [location.pathname, setIsLoggedIn]);

  return <>{children}</>;
};
