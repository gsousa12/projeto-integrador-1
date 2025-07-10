import { useState, useEffect } from "react";
import "./TelaInicial.css";
import { FaMapMarkerAlt } from "react-icons/fa";

type Pet = {
  id: number;
  nome: string;
  idade: string;
  descricao: string;
  genero: string;
  raca: string;
  cidade: string;
  estado: string;
  imagem: string;
  destaque?: string;
};

export default function TelaInicial() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const mockPets: Pet[] = Array(12).fill(null).map((_, index) => ({
      id: index,
      nome: "Bob",
      idade: "2 anos",
      descricao:
        "Cachorrinha muito carinhosa e brincalhona. Adora crianças e outros animais.",
      genero: "Macho",
      raca: "Labrador",
      cidade: "Crateús",
      estado: "CE",
      imagem:
        "https://images.unsplash.com/photo-1601758173923-1960ae20e1a8?fit=crop&w=600&q=80", // exemplo de imagem
      destaque: index === 0 ? "2 anos sem dono" : undefined,
    }));

    setPets(mockPets);
  }, []);

  return (
    <div className="tela-inicial">
      <h2>Adote um amiguinho</h2>
      <div className="grid-pets">
        {pets.map((pet) => (
          <div key={pet.id} className="card-pet">
            {pet.destaque && <span className="badge-destaque">{pet.destaque}</span>}
            <img src={pet.imagem} alt={pet.nome} className="pet-img" />
            <h3>{pet.nome}</h3>
            <div className="badges">
              <span className="badge verde">Cachorro</span>
              <span className="badge azul">{pet.genero}</span>
            </div>
            <p className="descricao">{pet.descricao}</p>
            <p className="info">
              {pet.raca} • {pet.idade}
            </p>
            <p className="local">
              <FaMapMarkerAlt /> {pet.cidade} - {pet.estado}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
