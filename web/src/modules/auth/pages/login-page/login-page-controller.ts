import { getAxiosErrorMessage } from "@/common/api/utils/functions";
import { useAuthStore } from "@/common/store/authStore";
import { loginMutation } from "@api/mutations/auth/loginMutation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useloginPageController = () => {
  const {
    mutateAsync: loginMutate,
    isPending,
    isError,
    error,
    isSuccess,
  } = loginMutation();
  const [email, _] = useState("teste@email.com");
  const [password, __] = useState("123456");
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const loginDispatch = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await loginMutate({ email, password });
      if (isSuccess) {
        setAuthenticated(true);
        const user = {
          userId: 1,
          name: "mockName",
          email: "mockEmail",
          isActive: true,
          iat: 1,
          exp: 1,
        };
        setUser(user);
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setAuthenticated(false);
      setUser(null);
    }
  };

  return {
    loginDispatch,
    isPending,
    isError,
    errorMessage: getAxiosErrorMessage(error),
  };
};
