import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import dogImage from "../assets/Cachorro Caramelo.png";
import "./Cadastro.css";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="cadastro-container">
      <main className="main-content">
        <h2>
          Bem vindo humano, faça seu cadastro para adotar
          <br /> um amiguinho
        </h2>
        <p className="subtext">
          Já é cadastrado? <a href="/">Faça Login</a>
        </p>

        <div className="cadastro-box">
          <img src={dogImage} alt="Cachorro" className="dog-img" />

          <form className="cadastro-form" onSubmit={handleSubmit}>
            <label>Nome</label>
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <label>Endereço</label>
            <div className="input-wrapper">
              <FaMapMarkerAlt className="input-icon" />
              <input
                type="text"
                name="endereco"
                placeholder="Digite seu endereço"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>

            <label>Email</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <label>Senha</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>

            <label>Confirme sua Senha</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="confirmarSenha"
                placeholder="Confirme sua senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
