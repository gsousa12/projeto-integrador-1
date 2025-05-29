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

  return (
    <div>
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
    </div>
  );
};
