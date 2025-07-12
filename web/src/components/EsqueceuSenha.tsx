import { useState } from "react";
import "./EsqueceuSenha.css";

export default function EsqueceuSenha() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("E-mail inválido");
      return;
    }
    setError("");
    alert("Instruções de redefinição de senha foram enviadas para seu email.");
  };

  return (
    <div className="forgot-container">
      <main className="main-forgot">
        <h2>Esqueceu a senha?</h2>
        <p>Enviaremos um email com as instruções para a sua<br />redefinição de senha</p>

        <form className="forgot-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "input-error" : ""}
            required
          />
          {error && <span className="error-msg">{error}</span>}

          <button type="submit">Enviar email</button>
        </form>
      </main>
    </div>
  );
}

