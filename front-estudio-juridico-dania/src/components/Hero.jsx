import { motion } from "framer-motion";
import AboutMe from './AboutMe';
import '../App.css';
import NewsAndNotes from './NewsAndNotes';
import AboutFeatures from './AboutFeatures';
import FallosJuridicos from './FallosJuridicos';
import Contacto from './Contacto';
import { Scroll, Section } from "lucide-react";
import FSAPViewer from "./FSAPViewer_v2";
import PageViewer from "./PageViewer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Hero = () => {
  return (
    <section id="hero-start" className="hero-wrapper">
      <div className="hero-container">

        <div className="hero-intro">
          <div className="hero-overlay" />

          <div className="hero-intro-content">

            {/* Nombre — fade in up */}
            <motion.h1
              className="hero-intro-name"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            >
              Dania Villanueva
            </motion.h1>

            {/* Línea decorativa — line expand */}
            <motion.hr
              className="hero-intro-divider"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "220px", opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
            />

            {/* Subtítulo — fade in up */}
            <motion.p
              className="hero-intro-role"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.1 }}
            >
              ABOGADA PENALISTA
            </motion.p>

          </div>
        </div>

        <motion.div
          className="hero-content"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <AboutMe />
          <AboutFeatures />
          <NewsAndNotes />
          <FSAPViewer />
          <FallosJuridicos />
          
          
          <Contacto />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;