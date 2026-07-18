import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ShieldCheck, Lock, Clock } from 'lucide-react';

const WSP_URL = "https://wa.me/5493512532803";

const FEATURES = [
  { Icon: ShieldCheck, label: "Urgencias penales" },
  { Icon: Lock,        label: "Entrevistas confidenciales" },
  { Icon: Clock,       label: "Respuesta inmediata" },
];

const Contacto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" className="contacto-seccion" ref={ref}>

      <motion.div
        className="contacto-split-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >

        {/* ── Columna izquierda: texto ── */}
        <div className="contacto-split-left">

          <motion.span
            className="contacto-split-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Contacto
          </motion.span>

          <motion.h2
            className="contacto-split-title"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dania Villanueva
          </motion.h2>

          <motion.p
            className="contacto-split-desc"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Para consultas, entrevistas o coordinación de defensa legal,
            comunicate directamente a través de WhatsApp. Atendemos urgencias
            penales y ofrecemos entrevistas iniciales confidenciales.
          </motion.p>

          <motion.ul
            className="contacto-split-features"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {FEATURES.map(({ Icon, label }) => (
              <li key={label} className="contacto-split-feature">
                <Icon size={16} strokeWidth={2} className="contacto-split-feature-icon" />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.a
            href={WSP_URL}
            className="contacto-wsp-btn"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp size={20} />
            <span>Contactanos</span>
          </motion.a>

        </div>

        {/* ── Columna derecha: foto ── */}
        <motion.div
          className="contacto-split-right"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <img
            src="/images/Dania2.png"
            alt="Dania Villanueva - Abogada Penalista"
            className="contacto-split-photo"
          />
          <p className="contacto-split-role">Abogada Penalista</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contacto;
