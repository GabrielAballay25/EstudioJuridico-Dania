import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const fadeInUp = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const Header = () => (
    <motion.nav
        className="navbar navbar-expand-lg"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="container">

            <motion.img 
                src="images/LogoDV.png"   
                alt="Dania Villaneva Abogada" 
                width="75" 
                height="75" 
                className="d-inline-block align-text-top"
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

                    {["Inicio", "Acerca de mi", "Noticias y Notas", "Fallos juridicos"].map((item, index) => (
                        <motion.li
                            key={index}
                            className="nav-item"
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                        >
                            <button type="button" className="btn btn-underline-hover">{item}</button>
                        </motion.li>
                    ))}

                </ul>

                <motion.button
                    className="btn-outline-custom"
                    type="submit"
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

export default Header;