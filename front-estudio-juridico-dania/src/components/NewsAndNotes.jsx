import React from "react";

import "../App.css";
const newsData = [
  {
    id: 1,
    title: "Reforma en el Código Civil 2026",
    description:
      "Se introducen modificaciones relevantes en materia contractual que impactan directamente en acuerdos comerciales y civiles.",
    image: "https://www.lanacion.com.ar/resizer/v2/karina-milei-en-la-apertura-de-64OQ4YDJF5FYXPHTL5U4KUHMJE.JPEG?auth=b8bf5916069d6b8b4b78e532983a69fa1455b778d49e426c78106911bf6fb36d&width=880&height=586&quality=70&smart=true",
    link: "https://www.lanacion.com.ar/"
  },
  {
    id: 2,
    title: "Nuevo régimen laboral",
    description:
      "Cambios en el régimen laboral argentino que afectan indemnizaciones y contratos de trabajo.",
    image: "https://www.clarin.com/img/2026/01/21/ap-taxzpJ_1256x620__1.jpg",
    link: "https://www.clarin.com/"
  },
  {
    id: 3,
    title: "Actualización tributaria",
    description:
      "La AFIP anunció nuevas medidas que modifican el esquema impositivo para pymes.",
    image: "https://www.infobae.com/resizer/v2/FT2ETGTAUBH3TEVPJ3KKNIQJVQ.jpg?auth=f29f299cdeaae30de31636ccae55040731d84facecc9515561ca374df75840bb&smart=true&width=992&height=558&quality=85",
    link: "https://www.infobae.com/"
  }
];

const NewsAndNotes = () => {
  return (
    <section className="news-section">
      <h2 className="news-title">Noticias & Notas Destacadas</h2>
      
        <p>En este espacio comparto noticias, análisis y notas de interés vinculadas al ámbito jurídico y a la actualidad penal. <br />
        El objetivo es acercar información clara y reflexiones que permitan comprender mejor los debates y desafíos del sistema de justicia.</p>
      <div className="news-container">
        {newsData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsAndNotes;