import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../App.css";

const newsData = [
  {
    id: 1,
    title: "VULNERACIÓN DE LA INTIMIDAD Y VIOLENCIA DE GÉNERO EN EL ÁMBITO PRIVADO",
    description:
      "Un grave caso que involucra la vulneración de la intimidad y la integridad sexual, enmarcado en un contexto de violencia de género mediante el uso de medios tecnológicos.",
    image: "https://srt-assets.tadevel-cdn.com/68d1ba898f65e1c499f94a87/720.webp",
    link: "https://www.cba24n.com.ar/cordoba/grabo-con-una-camara-oculta-en-el-bano-de-mujeres--lo-acusan-de-violencia-de-genero-y-abuso-sexual_a68d1a9e78f65e1c499f886c7"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const NewsAndNotes = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="news-notes" className="news-section" ref={sectionRef}>

      <div className="animated-header-wrapper">
        <div className="timeline-circle-container">
          <motion.div
            className="timeline-circle"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="title-content">
          <motion.h2
            className="news-title"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Noticias & Notas Destacadas
          </motion.h2>
        </div>

        <div className="timeline-line-container">
          <motion.div
            className="timeline-line"
            initial={{ height: 0 }}
            animate={inView ? { height: 'calc(100% + 15px)' } : { height: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          />
        </div>

        <div className="subtitle-content">
          <motion.div
            className="subtitle-panel"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.3 }}
          >
            <p>El objetivo es acercar información que permitan comprender mejor los debates y desafíos del sistema judicial.</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="news-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {newsData.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="news-content">
              <h3>{item.title}</h3>
            </div>

            <div className="news-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="read-more">Leer nota completa →</span>
            </div>
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
};

export default NewsAndNotes;