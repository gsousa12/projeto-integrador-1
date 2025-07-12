// TopHeader.tsx
import { PawPrint } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// 👇 Adicione essa interface para aceitar a prop
interface TopHeaderProps {
  isLoggedIn: boolean;
}

// 👇 Recebe a prop no componente
export const TopHeader = ({ isLoggedIn }: TopHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="w-full bg-white border-b shadow-sm">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between max-w-7xl mx-auto px-6 py-4 gap-3 sm:gap-0 relative">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <PawPrint className="text-rose-500 w-7 h-7 transition-transform duration-200 hover:rotate-12" />
            <h1 className="text-xl font-bold text-rose-600 sm:hidden">Amiguxos</h1>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            {!isLoggedIn ? (
              <>
                <Link to="/" className="text-rose-600 font-medium text-sm hover:underline px-3 py-1">Entrar</Link>
                <Link to="/cadastro" className="bg-rose-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-rose-600">Cadastrar</Link>
              </>
            ) : (
              <>
                <Link to="/meuspets" className="text-sm text-gray-700 hover:underline">Meu Pets</Link>
                <Link to="/doações" className="text-sm text-gray-700 hover:underline">Doações</Link>
                <Link to="/telainicial" className="text-sm text-rose-600 hover:underline">Adote</Link>
                <button onClick={handleLogout} className="text-sm border border-rose-500 text-rose-500 px-2 py-1 rounded hover:bg-rose-50">Sair</button>
              </>
            )}
          </div>
        </div>

        <div className="hidden sm:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-bold text-rose-600 text-center">Amiguxos</h1>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="text-rose-600 font-medium hover:underline transition duration-200">Entrar</Link>
              <Link to="/cadastro" className="bg-rose-500 text-white px-4 py-2 rounded-md font-medium hover:bg-rose-600 transition-all duration-200">Cadastrar</Link>
            </>
          ) : (
            <>
              <Link to="/meuspets" className="text-sm text-gray-700 hover:underline">Meu Pets</Link>
              <Link to="/doações" className="text-sm text-gray-700 hover:underline">Doações</Link>
              <Link to="/telainicial" className="text-sm text-rose-600 hover:underline">Adote</Link>
              <button onClick={handleLogout} className="text-sm border border-rose-500 text-rose-500 px-4 py-1 rounded hover:bg-rose-50">Sair</button>
            </>
          )}
        </div>
      </header>
    </div>
  );
};
