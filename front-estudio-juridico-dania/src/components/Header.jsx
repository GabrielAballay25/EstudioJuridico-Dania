import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const fadeInUp = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const scrollToSection = (id) => {
  if (id === "hero-start") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const navItems = [
  { label: "Inicio", target: "hero-start" },
  { label: "Acerca de mi", target: "about-me" },
  { label: "Noticias y Notas", target: "news-notes" },
  { label: "Casos Resueltos", target: "fallos-juridicos" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg sticky-top ${scrolled ? "navbar-scrolled" : ""}`}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">

        <motion.img
          src="images/logoDaniaVillanueva.png"
          alt="Dania Villanueva Abogada"
          width="75"
          height="75"
          className="d-inline-block align-text-top navbar-logo"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="nav-item"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
              >
                <button
                  type="button"
                  className="btn btn-underline-hover"
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="btn-outline-custom"
            type="button"
            onClick={() => scrollToSection('contacto')}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          >
            Contactanos
          </motion.button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Header;