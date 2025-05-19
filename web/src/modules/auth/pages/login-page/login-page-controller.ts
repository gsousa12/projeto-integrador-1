import { loginMutation } from "@api/mutations/auth/loginMutation";
import { useState } from "react";

export const useloginPageController = () => {
  const { mutate: loginMutate, isPending, isError, error } = loginMutation();
  const [email, _] = useState("teste@email.com");
  const [password, __] = useState("123456");

  const loginDispatch = async (event: React.FormEvent) => {
    event.preventDefault();
    loginMutate({ email, password });
  };

  return {
    loginDispatch,
    isPending,
    isError,
    errorMessage: (error as any)?.message,
  };
};
