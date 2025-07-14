import React, { useState } from "react";
import "./CadastrarPet.css";
import { FaCamera } from "react-icons/fa";

export default function CadastrarPet() {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [sexo, setSexo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("especie", especie);
    formData.append("sexo", sexo);
    formData.append("descricao", descricao);
    if (imagem) formData.append("imagem", imagem);
    console.log("Pet cadastrado!", { nome, especie, sexo, descricao, imagem });
  };

  return (
    <div className="cadastro-container">
      <h1>Cadastrar Pet</h1>
      <p>Cadastre um pet para encontrar um lar</p>

      <div className="cadastro-content">
        <div className="upload-area">
          <label htmlFor="imagem" className="upload-label">
            <FaCamera size={70} />
            <input
              type="file"
              id="imagem"
              accept="image/*"
              onChange={handleImageUpload}
              hidden
            />
          </label>
        </div>

        <form className="form-pet" onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite o nome do pet"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>Espécie</label>
          <div className="btn-group">
            <button
              type="button"
              className={especie === "Gato" ? "ativo" : ""}
              onClick={() => setEspecie("Gato")}
            >
              Gato
            </button>
            <button
              type="button"
              className={especie === "Cachorro" ? "ativo" : ""}
              onClick={() => setEspecie("Cachorro")}
            >
              Cachorro
            </button>
          </div>

          <label>Sexo</label>
          <div className="btn-group">
            <button
              type="button"
              className={sexo === "Macho" ? "ativo" : ""}
              onClick={() => setSexo("Macho")}
            >
              Macho
            </button>
            <button
              type="button"
              className={sexo === "Fêmea" ? "ativo" : ""}
              onClick={() => setSexo("Fêmea")}
            >
              Fêmea
            </button>
          </div>

          <label>Descrição</label>
          <textarea
            placeholder="Descreva comportamento, idade e características do pet"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button type="submit" className="btn-cadastrar">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
