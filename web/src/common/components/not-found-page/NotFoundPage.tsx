import { useNavigate } from "react-router-dom";
import { mockIsAuthenticated } from "../app-layout/AppLayout";

export const NotFoundPage = () => {
  const isAuthenticated = mockIsAuthenticated;
  const navigate = useNavigate();

  const handleBack = () => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <h1 className="text-4xl font-bold mb-2 text-rose-700">404</h1>
      <p className="mb-6 text-gray-600">Página não encontrada.</p>
      <button
        className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
        onClick={handleBack}
      >
        Voltar
      </button>
    </div>
  );
};
