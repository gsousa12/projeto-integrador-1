import { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import catImage from "../assets/cat.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); 
  const { setIsLoggedIn } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== "123") {
      setError("Senha Incorreta");
    } else {
      setError("");
      setIsLoggedIn(true);
      alert("Login efetuado!");
      navigate("/telainicial");
    }
  };

  return (
    <div className="w-full flex justify-center px-4 md:px-0 py-8">
      <main className="w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-center text-lg md:text-2xl font-semibold mb-2 max-w-3xl">
          Bem vindo humano, faça login para aproveitar as features da Amiguxos
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          ainda não é cadastrado?{" "}
          <Link to="/cadastro" className="text-pink-600 hover:underline">
            Crie uma conta
          </Link>
        </p>

        <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-md p-4 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <img
            src={catImage}
            alt="Gato"
            className="w-40 md:w-64 h-auto object-contain"
          />

          <form className="w-full md:w-1/2 space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-pink-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Senha</label>
              <div
                className={`relative flex items-center ${
                  error ? "border border-red-500 rounded" : ""
                }`}
              >
                <FaLock className="absolute left-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded focus:outline-pink-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {error && <span className="text-red-600 text-sm">{error}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700 transition"
            >
              Entrar
            </button>

            <div className="text-right">
              <Link
                to="/esqueceusenha"
                className="text-sm text-pink-600 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
