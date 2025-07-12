import './TelaPet.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const TelaPet = () => {
  const pet = {
    nome: 'Pereirinha',
    especie: 'Gato',
    sexo: 'Macho',
    imagem: 'https://images.unsplash.com/photo-1603316000411-52caa2fba01c',
    sobre: 'Sou um gatinho muito carinhoso e brincalhão! Adoro crianças e me dou super bem com outros animais. Estou procurando uma família que me dê muito amor e carinho. Sou muito dócil e gosto de fazer companhia. Que tal me dar uma chance? 👩‍🐾💕',
    caracteristicas: ['2 anos de idade', 'Pequeno porte', 'Raça Ocicat', 'Vacinado', 'Castrado'],
    localizacao: 'Crateús - CE',
    dataAdicao: '14/01/2025',
    diasSemDono: 30,
  };

  return (
    <div className="tela-pet-container">
      <main className="pet-detalhes">
        <div className="pet-imagem">
          <span className="badge-dias">{pet.diasSemDono} dias sem dono</span>
          <img src={pet.imagem} alt={pet.nome} />
        </div>

        <div className="pet-info">
          <div className="pet-nome">
            <h1>{pet.nome}</h1>
            <div className="tags">
              <span className="tag amarelo">{pet.especie}</span>
              <span className="tag azul">{pet.sexo}</span>
            </div>
          </div>

          <div className="sobre-mim">
            <h2>Sobre mim</h2>
            <div className="descricao">{pet.sobre}</div>
          </div>

          <div className="pet-boxes">
            <div className="box caracteristicas">
              <h3>Características</h3>
              <div className="tags-lista">
                {pet.caracteristicas.map((item, index) => (
                  <span key={index} className={`tag ${item === 'Vacinado' || item === 'Castrado' ? 'verde' : ''}`}>{item}</span>
                ))}
              </div>
            </div>

            <div className="box adocao">
              <h3>Adoção</h3>
              <p><FaMapMarkerAlt /> {pet.localizacao}</p>
              <p><FaCalendarAlt /> Adicionado em {pet.dataAdicao}</p>
              <p><FaClock /> Há {pet.diasSemDono} dias à procura de uma família</p>
            </div>
          </div>

          <div className="acoes-finais">
            <button className="ligar"><FaPhoneAlt /> Ligar Agora</button>
            <button className="whatsapp"><FaWhatsapp /> Whatsapp</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TelaPet;