import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Clock, Scale } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const YEAR = new Date().getFullYear();
const COPYRIGHT = String.fromCharCode(169);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer className="footer-wrapper">

      <div className="footer-top" ref={ref}>
        <Container>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Row> 

              <Col md={4} className="footer-brand-col">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0 }}
                  className="footer-brand"
                >
              
                  <div>
                    <p className="footer-brand-name">Dania Villanueva</p>
                    <p className="footer-tagline">Justicia con compromiso y vocacion</p>
                  </div>
                </motion.div>
              </Col>

              <Col md={4} className="footer-nav-col">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                >
                  <p className="footer-col-title">Navegacion</p>
                  <ul className="footer-nav-list">
                    <li><a href="#inicio" className="footer-nav-link">Inicio</a></li>
                    <li><a href="#nosotros" className="footer-nav-link">Quienes somos</a></li>
                    <li><a href="#Servicios" className="footer-nav-link">Servicios legales</a></li>
                    <li><a href="#Contact" className="footer-nav-link">Contacto</a></li>
                  </ul>
                </motion.div>
              </Col>

              <Col md={4} className="footer-info-col">
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.30 }}
                >
                  <p className="footer-col-title">Redes</p>
                  <div className="footer-socials">
                    <a
                      href="#"
                      className="footer-social-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size={18} />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="#"
                      className="footer-social-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={18} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                  <p className="footer-col-title" style={{ marginTop: '24px' }}>Horario</p>
                  <div className="footer-schedule">
                    <Clock size={15} strokeWidth={1.5} className="footer-clock-icon" />
                    <div>
                      <p className="footer-schedule-text">Lunes a Viernes</p>
                      <p className="footer-schedule-time">9:00 a 18:00 hs</p>
                    </div>
                  </div>
                </motion.div>
              </Col>

            </Row>
          </motion.div>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-inner">
            <div className="footer-bottom-divider" />
            <div className="footer-bottom-content">
              <p className="footer-copy">
                {COPYRIGHT} {YEAR} Dania Villanueva. Todos los derechos reservados.
              </p>
              <div className="footer-bottom-badge">
                <Scale size={14} strokeWidth={1.5} />
                <span>Estudio Juridico Penal</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </footer>
  );
};

export default Footer;