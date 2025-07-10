import { MenuHeader } from "./menuheader/MenuHeader";
import { TopHeader } from "./top-header/TopHeader";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isAuthRoute = ["/", "/cadastro", "/esqueceusenha", "/redefinirsenha"].includes(location.pathname);

  return (
    <div className="flex flex-col mb-0">
      {/* 👇 Agora passamos o isLoggedIn direto com base na rota */}
      <TopHeader isLoggedIn={!isAuthRoute ? true : false} />
      {!isAuthRoute && <MenuHeader />}
    </div>
  );
};
