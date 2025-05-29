import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";
import { useloginPageController } from "./login-page-controller";
import { LoginFormData, loginSchema } from "./login-page-schema";

export const LoginPage = () => {
  const { loginDispatch, loginMutate, isPending, isError, errorMessage } =
    useloginPageController();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await loginMutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="min-h-[calc(100dvh-136px)] flex flex-col items-center justify-center bg-white px-4">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Bem vindo humano, faça login para aproveitar as features da Amiguxos.
        </h1>
        <p className="text-gray-600">
          Ainda não é cadastrado?{" "}
          <a
            href=""
            className="text-rose-500 font-semibold hover:underline transition"
          >
            Crie uma conta
          </a>
        </p>
      </div>
      <div className="flex w-[600px] h-[340px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Imagem do animal */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2023/08/19/Cute-cat-white-background-Graphics-77249079-1-1-580x387.png"
            alt="Animal fofo"
            className="object-contain max-h-[220px]"
            draggable={false}
          />
        </div>
        {/* Formulário */}
        <div className="w-1/2 flex flex-col justify-center px-8 py-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  disabled={isPending}
                  {...register("email")}
                  className={`pl-10 pr-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition ${
                    errors.email
                      ? "border-rose-400"
                      : "border-gray-300 focus:border-rose-400"
                  }`}
                  placeholder="Digite seu email"
                />
              </div>
              <div className="h-5 mt-1">
                {errors.email && (
                  <span className="text-xs text-rose-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            {/* Senha */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  disabled={isPending}
                  {...register("password")}
                  className={`pl-10 pr-3 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 transition ${
                    errors.password
                      ? "border-rose-400"
                      : "border-gray-300 focus:border-rose-400"
                  }`}
                  placeholder="Digite sua senha"
                />
              </div>
              <div className="h-5 mt-1">
                {errors.password && (
                  <span className="text-xs text-rose-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            {/* Botão Entrar */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2 mt-2 rounded-lg bg-rose-500 text-white font-bold hover:bg-rose-600 transition flex items-center justify-center disabled:opacity-60"
            >
              Entrar
            </button>
          </form>
          <div className="mt-4 text-right">
            <a
              href=""
              className="text-sm text-gray-500 hover:text-rose-500 transition"
            >
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
