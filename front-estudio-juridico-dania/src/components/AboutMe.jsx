import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../App.css";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="about-me" className="about-container" ref={sectionRef}>

      {/* IMAGEN — slide desde la izquierda */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src="/images/Dania1.png"
          alt="Dania Villanueva - Abogada"
        />
      </motion.div>

      {/* CONTENIDO — slide desde la derecha */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Dra. Dania Villanueva
        </motion.h2>

        {/* Línea divisora — line expand */}
        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={inView ? { width: "100px" } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        />

        {/* Párrafo 1 — reveal on scroll */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          Especialista comprometida con la defensa
          de los derechos de mis clientes, brindando asesoramiento
          jurídico integral con responsabilidad, ética y profesionalismo.
        </motion.p>

        {/* Párrafo 2 — reveal on scroll con delay mayor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
        >
          Mi ejercicio profesional en el ámbito penal se estructura en tres ejes centrales: <br />
          <strong><em>defensas penales</em></strong>,{" "}
          <strong><em>ejecución penal</em></strong> y{" "}
          <strong><em>acompañamiento a víctimas</em></strong>,
          abordados desde una perspectiva jurídica rigurosa y con
          especial atención a los derechos humanos.
        </motion.p>

      </motion.div>
    </section>
  );
};

export default AboutMe;