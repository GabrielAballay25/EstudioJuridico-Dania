import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WSP_URL = "https://wa.me/549XXXXXXXXXX";

const Contacto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="contacto-seccion" ref={ref}>

      <motion.div
        className="contacto-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >

        <div className="contacto-texto-lado">
          <motion.div
            className="contacto-linea-acento"
            initial={{ width: 0 }}
            animate={inView ? { width: '60px' } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          />
          <motion.h2
            className="contacto-titulo"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            Contactanos
          </motion.h2>

          <motion.p
            className="contacto-descripcion"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          >
            Para consultas, entrevistas o coordinación de defensa legal,
            comunicate directamente con Dania Villanueva a través de WhatsApp.
            Atendemos urgencias penales y ofrecemos entrevistas iniciales confidenciales.
          </motion.p>

          <motion.a
            href={WSP_URL}
            className="contacto-wsp-btn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp size={22} />
            <span>Escribinos por WhatsApp</span>
          </motion.a>
        </div>

        <motion.div
          className="contacto-foto-lado"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
        >
          <img
            src="/images/DVContacto.jpg"
            alt="Dania Villanueva - Abogada Penalista"
            className="contacto-foto"
          />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contacto;