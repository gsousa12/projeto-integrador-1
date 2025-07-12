import './MeusPets.css';
import { useNavigate } from 'react-router-dom';

const pets = [
  {
    id: 1,
    nome: 'Luna',
    raca: 'Labrador',
    idade: '2 anos',
    especie: 'Cachorro',
    sexo: 'Fêmea',
    status: 'Disponível',
    imagem: 'https://images.unsplash.com/photo-1583511655847-1083d37c3b99',
    descricao: 'Carinhosa, muito curiosa e brincalhona. Adora crianças e outros animais.',
    cidade: 'Crateús - CE',
    dataAdicao: '14/01/2025',
  },
  {
    id: 2,
    nome: 'Pereirinha',
    raca: 'Ocicat',
    idade: '2 anos',
    especie: 'Gato',
    sexo: 'Macho',
    status: 'Disponível',
    imagem: 'https://images.unsplash.com/photo-1603316000411-52caa2fba01c',
    descricao: 'Gatinho muito alegre e brincalhão. Adora passear e receber carinho.',
    cidade: 'Crateús - CE',
    dataAdicao: '14/01/2025',
  },
  {
    id: 3,
    nome: 'Tonhão',
    raca: 'Fraldão',
    idade: '2 anos',
    especie: 'Gato',
    sexo: 'Macho',
    status: 'Adotado',
    imagem: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
    descricao: 'Gosta muito de dormir e brincar nos tempos livres (quase todos).',
    cidade: 'Crateús - CE',
    dataAdicao: '14/01/2025',
  },
  {
    id: 4,
    nome: 'Raimundinha',
    raca: 'Frajdá',
    idade: '2 anos',
    especie: 'Gato',
    sexo: 'Fêmea',
    status: 'Adotado',
    imagem: 'https://images.unsplash.com/photo-1609334767191-bc3c1b8d9fa5',
    descricao: 'Carinhosa, muito curiosa e brincalhona. Adora crianças e outros animais.',
    cidade: 'Crateús - CE',
    dataAdicao: '14/01/2025',
  },
];

const MeusPets = () => {
  const navigate = useNavigate();
  return (
    <div className="meus-pets-container">
      <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '5px' }}>Meus Pets</h1>
      <p>Gerencie seus pets cadastrados para adoção</p>
      <div className="resumo-boxes">
        <div className="box-info">
          <span>Total de Pets</span>
          <strong>3</strong>
        </div>
        <div className="box-info verde">
          <span>Disponíveis</span>
          <strong>2</strong>
        </div>
        <div className="box-info azul">
          <span>Adotados</span>
          <strong>2</strong>
        </div>
      </div>

      <div className="filtros">
        <button className="filtro ativo">Todos</button>
        <button className="filtro">Disponível</button>
        <button className="filtro">Adotados</button>
        <button className="btn-add" onClick={() => navigate('/cadastrarpet')}>
            + Adicionar Pet
        </button>

      </div>

      <div className="grid-pets">
        {pets.map(pet => (
          <div key={pet.id} className="card-pet">
            <div className="card-img">
              <span className={`badge ${pet.status === 'Adotado' ? 'azul' : 'verde'}`}>{pet.status}</span>
              <img src={pet.imagem} alt={pet.nome} />
            </div>
            <div className="card-info">
              <h3>{pet.nome}</h3>
              <div className="tags">
                <span className="tag rosa">{pet.especie}</span>
                <span className="tag rosa">{pet.sexo}</span>
              </div>
              <p className="descricao">{pet.descricao}</p>
              <p className="info-extra">📍 {pet.cidade}</p>
              <p className="info-extra">📅 Adicionado em {pet.dataAdicao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeusPets;