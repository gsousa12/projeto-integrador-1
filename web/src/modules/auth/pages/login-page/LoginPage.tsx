import { useloginPageController } from "./login-page-controller";
import { useEffect, useState } from "react";
import { PawPrint, Mail, Lock } from "lucide-react";
import { InputWithIcon } from "@/common/components/input-with-icon/InputWithIcon";
import { AlertPopUp } from "@/common/components/popups/alert-popup/AlertPopup";

export const LoginPage = () => {
  const { loginDispatch, isPending, isError, errorMessage } =
    useloginPageController();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const disableLoginButton = isPending || email === "" || password === "";
  const [alertOpen, setAlertOpen] = useState(true);

  useEffect(() => {
    if (isError) {
      setAlertOpen(true);
    }
  }, [isError, setAlertOpen]);

  console.log(isError);
  console.log(alertOpen);

  return (
    <div className="min-h-screen flex bg-white">
      {/* Lado esquerdo*/}
      <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 bg-white md:rounded-l-3xl md:shadow-lg md:m-8 md:ml-16 p-8 md:p-16">
        <div className="w-full max-w-md mx-auto flex flex-col gap-8">
          {/* Logo */}
          <div className="flex text-center">
            <PawPrint className="w-8 h-8 text-rose-500" />
            <span className="text-xl font-bold text-rose-500 ml-2 self-center">
              Amiguxos Crateús
            </span>
          </div>
          {/* Mensagem */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">
              Bem-vindo de volta!
            </h2>
            <p className="text-lg text-gray-600 leading-tight mt-3">
              Faça login para ver os amiguinhos disponíveis para adoção!!!
            </p>
          </div>
          {/* Formulário */}
          <form className="flex flex-col gap-6" onSubmit={loginDispatch}>
            {/* Email */}
            <InputWithIcon
              id="email"
              type="email"
              icon={Mail}
              placeholder="Digite seu email"
              autoComplete="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              disabled={isPending}
              required
            />
            {/* Senha */}
            <InputWithIcon
              id="password"
              type="password"
              icon={Lock}
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              disabled={isPending}
              required
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            {/* Outros */}
            <div className="flex justify-between items-center text-sm mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-rose-500 hover:underlin"
              >
                Esqueci minha senha
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-rose-500 hover:underline"
              >
                Ainda não tem conta? Crie uma
              </a>
            </div>
            {/* Botão de login */}
            <button
              type="submit"
              className={
                disableLoginButton
                  ? "w-full py-2 mt-2 bg-rose-300 hover:cursor-not-allowed text-white font-semibold rounded-lg transition"
                  : "w-full py-2 mt-2 bg-rose-500 hover:bg-rose-600 hover:cursor-pointer text-white font-semibold rounded-lg transition"
              }
              disabled={disableLoginButton}
            >
              {isPending ? "Carregando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
      {isError && (
        <AlertPopUp
          open={alertOpen}
          title="Oops!"
          description={errorMessage}
          onClose={() => setAlertOpen(!alertOpen)}
        />
      )}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <div className="absolute inset-0 bg-rose-500 rounded-r-3xl m-8" />
      </div>
    </div>
  );
};
