import './Doacoes.css';
import { Link } from 'react-router-dom';

function Doacoes() {
  return (
    <div className="doacoes-container">
      <h1 className="titulo">Faça uma Doação</h1>
      <p className="subtitulo">
        Sua contribuição ajuda a Associação Bicho Cuidado Crateús a continuar seu trabalho de proteção animal
      </p>

      <div className="tabs">
        <span className="tab active">Pix</span>
        <Link to="/contato" className="tab">Contato</Link>
      </div>

      <div className="doacoes-conteudo">
        <div className="pix-card">
          <h3>Doação via Pix</h3>
          <p>Use a chave Pix ou escaneie o QR Code para fazer sua doação</p>
          <label><strong>Chave Pix (E-mail)</strong></label>
          <input type="text" value="associacao@bichocuida.example.br" readOnly />
          <img src="https://cdn.pix.qrcode.image.png" alt="QR Code do Pix" className="qr-code"/>
          <p>Escaneie com o app do seu banco ou copie a chave acima</p>
        </div>

        <div className="ajuda-card">
          <h3>Como sua doação ajuda</h3>
          <ul>
            <li>🍽️ Alimentação dos animais resgatados</li>
            <li>🩺 Cuidados veterinários</li>
            <li>🏠 Infraestrutura (casinhas, medicamentos, etc.)</li>
            <li>❤️ Novos resgates e tratamentos</li>
          </ul>
        </div>
      </div>

      <div className="localizacao-e-fotos">
        <div className="localizacao">
          <h3>Nossa Localização</h3>
          <p>Venha nos visitar e conhecer nosso trabalho</p>
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p><strong>Endereço:</strong> Rua das Flores, 123, Centro, Crateús - CE</p>
          <p><strong>Horário de funcionamento:</strong> Segunda à Sexta: 13h às 17h</p>
        </div>

        <div className="fotos">
          <h3>Nossa Associação</h3>
          <p>Conheça nosso trabalho através de fotos</p>
          <div className="galeria">
            <img src="https://placekitten.com/100/100" alt="Animal 1" />
            <img src="https://placekitten.com/101/100" alt="Animal 2" />
            <img src="https://placekitten.com/102/100" alt="Animal 3" />
            <img src="https://placekitten.com/103/100" alt="Animal 4" />
            <img src="https://placekitten.com/104/100" alt="Animal 5" />
            <img src="https://placekitten.com/105/100" alt="Animal 6" />
          </div>
          <p className="observacao">Clique nas fotos para visualizar em tamanho maior</p>
        </div>
      </div>
    </div>
  );
}

export default Doacoes;
