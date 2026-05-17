import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Shield, HeartHandshake } from "lucide-react";
import "../App.css";

// Textos de las cards
const cards = [
  {
    icon: <Scale size={75} />,
    text: "Defensa penal con enfoque técnico y estratégico, orientada a la protección efectiva de los derechos constitucionales.",
  },
  {
    icon: <Shield size={75} />,
    text: "Acompaño en la ejecución penal, garantizando el control de la legalidad de la pena y el acceso a derechos y beneficios, con especial atención a la dignidad humana.",
  },
  {
    icon: <HeartHandshake size={75} />,
    text: "Trabajo en el acceso a la justicia de infancias y mujeres en el ámbito penal, especialmente en casos de violencia de género y delitos contra la integridad sexual.",
  },
];

// Datos de los counters
const countersData = [
  { target: 6, suffix: "+", label: "Años de experiencia" },

];

// Hook para animar un número desde 0 hasta target
function useCounter(target, isActive) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const duration = 1800; // ms
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, target]);

  return count;
}

// Componente individual de counter
const Counter = ({ target, suffix, label, isActive }) => {
  const count = useCounter(target, isActive);
  return (
    <div className="counter-card">
      <div className="counter-num">
        {count}
        <span className="counter-suffix">{suffix}</span>
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

// Variantes para el stagger de las cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutFeatures = () => {
  // Ref para detectar cuando los counters entran en pantalla
  const countersRef = useRef(null);
  const countersInView = useInView(countersRef, { once: true, margin: "-80px" });

  // Ref para detectar cuando las cards entran en pantalla
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* CARDS con stagger fade + hover lift */}
      <motion.div
        className="features-container"
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flip-card"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                {card.icon}
              </div>
              <div className="flip-card-back">
                <p>{card.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* COUNTERS animados */}
      <div className="counters-row" ref={countersRef}>
        {countersData.map((c, i) => (
          <Counter
            key={i}
            target={c.target}
            suffix={c.suffix}
            label={c.label}
            isActive={countersInView}
          />
        ))}
      </div>
    </>
  );
};

export default AboutFeatures;