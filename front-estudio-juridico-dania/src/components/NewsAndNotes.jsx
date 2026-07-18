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
  },
  {
    id: 2,
    title: "¿JUSTICIA O MORDAZA?: EL PELIGRO TRAS EL PROYECTO DE LEY QUE BUSCA CASTIGAR LAS FALSAS DENUNCIAS EN ARGENTINA",
    description:
      "Una entrevista a Dania Villanueva, especialista en género, sobre el proyecto de ley presentado por la senadora Carolina Losada para agravar las penas por falsas denuncias en delitos contra la integridad sexual y violencia de género.",
    image: "https://i.ytimg.com/vi/y9E4agZGkiU/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDyd2w47PfefSlldnJ1lOUV4pr3iQ",
    link: "https://www.youtube.com/watch?v=y9E4agZGkiU"
  },
  {
    id: 3,
    title: "FEMICIDIO DE CATALINA GUTIÉRREZ: LAS CLAVES DE LA PRISIÓN PERPETUA PARA NÉSTOR SOTO Y EL DEBATE SOBRE LOS LÍMITES ÉTICOS EN LA JUSTICIA",
    description:
      "Un análisis técnico y ético sobre la condena a prisión perpetua de Néstor Soto por el femicidio de Catalina Gutiérrez en Córdoba. El objetivo principal es explicar los fundamentos jurídicos del fallo, incluyendo los agravantes de femicidio y criminis causa, y debatir sobre los límites éticos de la defensa penal y el rol de los medios de comunicación",
    image: "https://i.ytimg.com/vi/PVOFwtk4YD0/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgSygyMA8=&rs=AOn4CLCW_3Q5Tp0QLDbkrahjh_tgsChtjw",
    link: "https://www.youtube.com/watch?v=PVOFwtk4YD0"
  },
  {
    id: 4,
    title: "19 AÑOS DE PRISIÓN PARA CLAUDIO CONTARDI: BUSCANDO VISIBILIZAR LAS AGRESIONES SUFRIDAS POR PARTE DEL PADRE DE SUS DOS HIJOS",
    description:
      "Un análisis técnico y ético sobre la condena a prisión perpetua de Néstor Soto por el femicidio de Catalina Gutiérrez en Córdoba. El objetivo principal es explicar los fundamentos jurídicos del fallo, incluyendo los agravantes de femicidio y criminis causa, y debatir sobre los límites éticos de la defensa penal y el rol de los medios de comunicación",
    image: "https://i.ytimg.com/vi/2xCbB9xhgIM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCsUe4JCrupiVPubnQlwRriTSnVxg",
    link: "https://www.youtube.com/watch?v=2xCbB9xhgIM"
  },
  {
    id: 5,
    title: "SENTENCIA A PRISIÓN PERPETUA DE DIEGO CONCHA POR EL ABUSO SEXUAL SEGUIDO DE MUERTE (SUICIDIO) DE LUANA LUDUEÑA",
    description:
      "El objetivo principal es debatir las implicancias jurídicas de este fallo, el cual consolida un precedente en Córdoba al considerar el suicidio de la víctima como una consecuencia directa del abuso sufrido",
    image: "https://i.ytimg.com/vi/Ba4wSVVXDzM/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgVigiMA8=&rs=AOn4CLCKmDkQeONvU9d_zOShcXSF6nBDFw",
    link: "https://www.youtube.com/watch?v=Ba4wSVVXDzM"
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