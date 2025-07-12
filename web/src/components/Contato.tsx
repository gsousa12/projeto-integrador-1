import './Contato.css';
import { Link } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';

function Contato() {
  return (
    <div className="contato-container">
      <div className="tabs">
        <Link to="/doações" className="tab">Pix</Link>
        <span className="tab active">Contato</span>
      </div>
      <div className="contato-card">
        <h2>Contato para doação</h2>
        <p>Fale conosco para tirar dúvidas ou confirmar sua doação</p>
        <a href="https://wa.me/5588988564567" target="_blank" rel="noreferrer" className="whatsapp-btn">
          Falar no WhatsApp para doação
        </a>
        <div className="contato-info">
          <div className="item">
            <label>WhatsApp</label>
            <div className="info-box">
              <span>(88) 98856-4567</span>
              <FaRegCopy />
            </div>
          </div>
          <div className="item">
            <label>Email</label>
            <div className="info-box">
              <span>bichocuidad@example.com</span>
              <FaRegCopy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
