import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion, useInView } from 'framer-motion';
import FalloCard from './FalloCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fallosData = [
  {
    id: 1,
    caso: "Nombre del caso 1",
    descripcion: [
      "Acción Legal: descripción de la acción tomada.",
      "Argumento Clave: argumento principal utilizado.",
      "Éxito Obtenido: resultado favorable conseguido.",
    ],
    urlPdf: "/pdfs/fallo1.pdf"
  },
  {
    id: 2,
    caso: "Nombre del caso 2",
    descripcion: [
      "Acción Legal: descripción de la acción tomada.",
      "Argumento Clave: argumento principal utilizado.",
      "Éxito Obtenido: resultado favorable conseguido.",
    ],
    urlPdf: "/pdfs/fallo2.pdf"
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const FallosJuridicos = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    arrows: false,
    swipe: false,
    draggable: false,
    touchMove: false,
  };

  return (
    <section className="fallos-seccion" ref={sectionRef}>

      <motion.div
        className="fallos-header"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="fallos-titulo">Fallos Jurídicos</h2>
        <p className="fallos-subtitulo">
          Resoluciones judiciales obtenidas a lo largo de la trayectoria profesional.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <Slider ref={sliderRef} {...settings}>
          {fallosData.map(fallo => (
            <div key={fallo.id}>
              <FalloCard
                caso={fallo.caso}
                descripcion={fallo.descripcion}
                urlPdf={fallo.urlPdf}
              />
            </div>
          ))}
        </Slider>

        <div className="fallos-nav-botones">
          <button
            className="fallos-nav-btn"
            onClick={() => sliderRef.current.slickPrev()}
          >
            &larr; Caso Anterior
          </button>
          <button
            className="fallos-nav-btn"
            onClick={() => sliderRef.current.slickNext()}
          >
            Siguiente Caso &rarr;
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default FallosJuridicos;