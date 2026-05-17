import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Heart, MessageCircle, Send } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FalloCard = ({ imagenes, descripcion, likes }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: '10px' }}>
        <ul className="insta-dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="insta-card">
      {/* Header falso de Instagram (opcional para dar más realismo) */}
      <div className="insta-header">
        <div className="insta-avatar">
          <img src="images/logoDaniaVillanueva.png" alt="Dania Villanueva" />
        </div>
        <span className="insta-username">abogada.villanueva</span>
      </div>

      {/* Carrusel de Imágenes */}
      <div className="insta-carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {imagenes.map((img, index) => (
            <div key={index} className="insta-slide">
              <img src={img} alt={`Fallo slide ${index + 1}`} className="insta-image" />
            </div>
          ))}
        </Slider>

        {/* Flechas de navegación personalizadas */}
        {imagenes.length > 1 && (
          <>
            <button className="insta-arrow prev" onClick={() => sliderRef.current.slickPrev()}>
              &#10094;
            </button>
            <button className="insta-arrow next" onClick={() => sliderRef.current.slickNext()}>
              &#10095;
            </button>
          </>
        )}
      </div>

      {/* Acciones y Caption (siempre visible abajo) */}
      <div className="insta-footer">
        <div className="insta-actions">
          <Heart size={24} className="action-icon" />
          <MessageCircle size={24} className="action-icon" />
          <Send size={24} className="action-icon" />
        </div>


        <div className="insta-caption">
          <span className="insta-username">dania.villanueva</span> {descripcion}
        </div>
      </div>
    </div>
  );
};

export default FalloCard;