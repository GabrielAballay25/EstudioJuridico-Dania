import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
     <footer className="custom-footer">
      <div className="footer-content">
        {/* Sección de enlaces (con efecto hover) */}
        <Container>
        <Row>
          <Col md={4} className="footer-section">
          <h5 className='footer-subtitle'>Nuestras redes</h5>
          <ul className="footer-list">
            <li className="text-center">
              <a
                href="https://www.instagram.com/estudiojuridicocordobaok"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram"
              > Instagram 
                <FaInstagram size={40} style={{ color: '#6F66C4' }} />
              </a>
              <br /> 
              <a
                href="https://www.linkedin.com/in/gastón-córdoba-766ba334b/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Linkedin"
              > Linkedin 
                <FaLinkedin size={40} style={{ color: '#6F66C4' }} />
              </a>
            </li>
          </ul>
          </Col>  
          <Col md={4} className="footer-section">
          <h5 className='footer-subtitle'>Inicio</h5>
          <ul className="footer-list">
            <li><a href="#nosotros" className="footer-link">Quienes somos</a></li>
            <li><a href="#Servicios" className="footer-link">Servicios legales</a></li>
            <li><a href="#Contact" className="footer-link">Contacto</a></li>
          </ul>
          </Col>  

        {/* Sección de contacto (solo los datos tendrán efecto hover) */}
          <Col md={4} className="footer-section">
          <h5 className="footer-subtitle">Contacto</h5>
          <ul className="footer-list">
            <li><a href= "https://www.google.com.ar/maps/place/Ovidio+Lagos+470/@-31.4143038,-64.1749532,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a37dc28d37d7:0xf84a170282cb2366!8m2!3d-31.4143038!4d-64.1723783!16s%2Fg%2F11vj0fmz6y?hl=es&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" className="footer-link" target='_blank' rel='noopener noreferrer'>📍[Ovidio Lagos 470 PA Of. D B° General Paz ]</a></li>
            
            <li><span className="footer-link">✉️cba.gaston42@gmail.com</span></li>
          </ul>
          </Col>
        </Row>  
        <Row className="mt-4">
          <Col className="text-center border-top pt-3">
            <p className="small">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </Col>
        </Row>    
        </Container>
      </div>
    </footer>
  );
};

export default Footer;