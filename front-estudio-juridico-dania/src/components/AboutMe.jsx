import React from "react";
import "../App.css";

const AboutMe = () => {
  return (
    <section className="about-container">
      <div className="about-image">
        <img 
          src="/images/DaniaVillanuevaAboutMe.jpg" 
          alt="Dania Villanueva - Abogada"
        />
      </div>

      <div className="about-content">
        <h2>Sobre mí</h2>
        <div className="divider"></div>

        <p>
          Soy Dania Villanueva, abogada comprometida con la defensa 
          de los derechos de mis clientes, brindando asesoramiento 
          jurídico integral con responsabilidad, ética y profesionalismo.
        </p>

        <p>
          Mi ejercicio profesional en el ámbito penal se estructura en tres ejes centrales: <br />
          <strong><em>defensas penales</em></strong>, <strong><em>ejecución penal</em></strong> y <strong><em>acompañamiento a víctimas</em></strong>, abordados desde una perspectiva jurídica rigurosa y con especial atención a los derechos humanos.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;