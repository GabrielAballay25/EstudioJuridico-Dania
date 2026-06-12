import React from 'react';
import { motion, useInView } from 'framer-motion';
import FalloCard from './FalloCard';
import caso1A from '../assets/3LibertadCondicional/A_LibertadCondicional_1.png';
import caso2A from '../assets/3LibertadCondicional/A_LibertadCondicional_2.png';
import caso3A from '../assets/3LibertadCondicional/A_LibertadCondicional_3.png';
import caso4A from '../assets/3LibertadCondicional/A_LibertadCondicional_4.png';
import caso5A from '../assets/3LibertadCondicional/A_LibertadCondicional_5.png';
import caso6A from '../assets/3LibertadCondicional/A_LibertadCondicional_6.png';

import caso1B from '../assets/4Amenaza/B_Amenaza_1.png';
import caso2B from '../assets/4Amenaza/B_Amenaza_2.png';
import caso3B from '../assets/4Amenaza/B_Amenaza_3.png';
import caso4B from '../assets/4Amenaza/B_Amenaza_4.png';
import caso5B from '../assets/4Amenaza/B_Amenaza_5.png';
import caso6B from '../assets/4Amenaza/B_Amenaza_6.png';

import caso1C from '../assets/5PrisionDomiciliaria/C_PrisionDomiciliaria_1.png';
import caso2C from '../assets/5PrisionDomiciliaria/C_PrisionDomiciliaria_2.png';
import caso3C from '../assets/5PrisionDomiciliaria/C_PrisionDomiciliaria_3.png';
import caso4C from '../assets/5PrisionDomiciliaria/C_PrisionDomiciliaria_4.png';
import caso5C from '../assets/5PrisionDomiciliaria/C_PrisionDomiciliaria_5.png';
import caso6C from '../assets/5PrisionDomiciliaria/C_PrisionDomiciliaria_6.png';

import caso1D from '../assets/6SobreseimientoPorLegitimaDefensa/D_LegitimaDefensa_1.png'
import caso2D from '../assets/6SobreseimientoPorLegitimaDefensa/D_LegitimaDefensa_2.png'
import caso3D from '../assets/6SobreseimientoPorLegitimaDefensa/D_LegitimaDefensa_3.png'
import caso4D from '../assets/6SobreseimientoPorLegitimaDefensa/D_LegitimaDefensa_4.png'
import caso5D from '../assets/6SobreseimientoPorLegitimaDefensa/D_LegitimaDefensa_5.png'
import caso6D from '../assets/6SobreseimientoPorLegitimaDefensa/D_LegitimaDefensa_6.png'

import caso1E from '../assets/7VAC/vac1.png';
import caso2E from '../assets/7VAC/vac2.png';
import caso3E from '../assets/7VAC/vac3.png';
import caso4E from '../assets/7VAC/vac4.png';
import caso5E from '../assets/7VAC/vac5.png';
import caso6E from '../assets/7VAC/vac6.png';

import caso1F from '../assets/8Camara/camara1.png';
import caso2F from '../assets/8Camara/camara2.png';
import caso3F from '../assets/8Camara/camara3.png';
import caso4F from '../assets/8Camara/camara4.png';
import caso5F from '../assets/8Camara/camara5.png';
import caso6F from '../assets/8Camara/camara6.png';
import caso7F from '../assets/8Camara/camara7.png';
import caso8F from '../assets/8Camara/camara8.png';
import caso9F from '../assets/8Camara/camara9.png';
import caso10F from '../assets/8Camara/camara10.png';

const fallosData = [
  {
    id: 1,
    imagenes: [caso1A, caso2A, caso3A, caso4A, caso5A, caso6A],
    descripcion: "La ejecución penal no es automática. Se trabaja. En este caso, una persona condenada por homicidio simple accedió a la libertad condicional en la primera oportunidad posible. Pero no fue casualidad. Se realizaron distintos aportes durante la etapa de ejecución para que se pueda obtener este resultado tan favorable para el condenado.",
    likes: 124,
  },
  {
    id: 2,
    imagenes: [caso1B, caso2B, caso3B, caso4B, caso5B, caso6B],
    descripcion: "En una causa por amenazas y privación ilegítima de la libertad, se obtuvo el sobreseimiento total de la imputada luego de demostrar que los hechos investigados no constituían delito. Durante el proceso se logró, en primer término, su recuperación de la libertad, y posteriormente se acreditó la atipicidad de las conductas atribuidas.",
    likes: 89,
  },
  {
    id: 3,
    imagenes: [caso1C, caso2C, caso3C, caso4C, caso5C, caso6C],
    descripcion: "Prisión domiciliaria más allá del límite legal ¿El límite de 5 años es absoluto? Este caso demuestra que no. Cuando hay niños involucrados, el análisis no puede ser meramente formal. El foco debe estar puesto en el interés superior del niño y en las consecuencias reales de las decisiones judiciales.",
    likes: 145,
  },
  {
    id: 4,
    imagenes: [caso1D, caso2D, caso3D, caso4D, caso5D, caso6D],
    descripcion: "En un caso de lesiones y daño en el marco de un conflicto de pareja, el tribunal resolvió el sobreseimiento al acreditarse que los hechos ocurrieron en un contexto de violencia de género. Se valoró la prueba con perspectiva de género y se concluyó que la conducta fue una respuesta defensiva, necesaria y proporcional.",
    likes: 167,
  },
  {
    id: 5,
    imagenes: [caso1E, caso2E, caso3E, caso4E, caso5E, caso6E],
    descripcion: "Justicia en una causa de violencia sexual en la infancia. La Cámara Sexta del Crimen condenó al imputado a 16 años de prisión e hizo lugar al pedido formulado por esta querella, reconociendo además una reparación civil para la víctima.",
    likes: 189,
  },
  {
    id: 6,
    imagenes: [caso1F, caso2F, caso3F, caso4F, caso5F, caso6F, caso7F, caso8F, caso9F, caso10F],
    descripcion: "Cámaras ocultas en baños de mujeres dentro del ámbito judicial. Un caso que interpela el derecho a la intimidad, la integridad sexual y el acceso a una reparación integral para las víctimas.",
    likes: 212,
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const FallosJuridicos = () => {
  const sectionRef = React.useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="fallos-juridicos" className="fallos-seccion" ref={sectionRef}>

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
            className="fallos-titulo"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Casos Resueltos
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
            <p>Aquí está un breve resumen interactivo sobre los distintos casos jurídicos que más han destacado. </p>
            <p>Si desea leer los fallos, no dude en contactarse.</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fallos-grid"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        {fallosData.map(fallo => (
          <FalloCard
            key={fallo.id}
            imagenes={fallo.imagenes}
            descripcion={fallo.descripcion}

          />
        ))}
      </motion.div>

    </section>
  );
};

export default FallosJuridicos;