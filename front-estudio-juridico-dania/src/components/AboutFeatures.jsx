import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Shield, HeartHandshake } from "lucide-react";
import "../App.css";

const cards = [
  {
    Icon: Scale,
    title: "Defensa técnica",
    text: "Defensa penal con enfoque técnico y estratégico, orientada a la protección efectiva de los derechos constitucionales.",
  },
  {
    Icon: Shield,
    title: "Protección penal",
    text: "Acompaño en la ejecución penal, garantizando el control de la legalidad de la pena y el acceso a derechos y beneficios, con especial atención a la dignidad humana.",
  },
  {
    Icon: HeartHandshake,
    title: "Acompañamiento",
    text: "Trabajo en el acceso a la justicia de infancias y mujeres en el ámbito penal, especialmente en casos de violencia de género y delitos contra la integridad sexual.",
  },
];

const countersData = [
  
];

function useCounter(target, isActive) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const duration = 1800;
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const AboutFeatures = () => {
  const countersRef = useRef(null);
  const countersInView = useInView(countersRef, { once: true, margin: "-80px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  return (
    <>
      <motion.div
        className="features-container"
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        {cards.map(({ Icon, title, text }, index) => (
          <motion.div
            key={index}
            className="about-feature-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="about-feature-icon-wrap">
              <Icon size={22} strokeWidth={1.8} />
            </div>
            <h3 className="about-feature-title">{title}</h3>
            <p className="about-feature-desc">{text}</p>
          </motion.div>
        ))}
      </motion.div>

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
