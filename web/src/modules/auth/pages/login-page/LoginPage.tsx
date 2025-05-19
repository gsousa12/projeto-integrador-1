import { useloginPageController } from "./login-page-controller";

export const LoginPage = () => {
  const { loginDispatch, isPending, isError, errorMessage } =
    useloginPageController();

  const mockMail = "teste@email.com";
  const mockPassword = "123456";

  return (
    <div className="relative flex flex-col justify-center items-center w-full  bg-gray-400 md:m-8 md:ml-16 p-8 md:p-16">
      <form className="flex flex-col gap-6" onSubmit={loginDispatch}>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Email
          </label>
          <div className="flex items-center border border-gray-200 rounded-lg bg-white focus-within:ring-2 focus-within:ring-rose-400 transition">
            <input
              id="email"
              type="email"
              className="flex-1 px-3 py-2 bg-transparent outline-none text-gray-800"
              placeholder="Digite seu email"
              autoComplete="email"
              value={mockMail}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Senha
          </label>
          <div className="flex items-center border border-gray-200: rounded-lg bg-white focus-within:ring-2 focus-within:ring-rose-400 transition">
            <input
              id="password"
              type="password"
              className="flex-1 px-3 py-2 bg-transparent outline-none text-gray-800"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={mockPassword}
              onChange={() => {}}
              required
            />
          </div>
          {isError && <span className="text-rose-700">{errorMessage}</span>}
        </div>
        <button type="submit" className="text-white">
          {isPending ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};
