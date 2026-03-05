import React from "react";
import { Scale, Shield, HeartHandshake } from "lucide-react";
import "../App.css";

const text1 =
    "Defensa penal con enfoque técnico y estratégico, orientada a la protección efectiva de los derechos constitucionales.";
const text2 =
  "Acompaño en la ejecución penal, garantizando el control de la legalidad de la pena y el acceso a derechos y beneficios, con especial atención a la dignidad humana.";

const text3 =
  "Trabajo en el acceso a la justicia de infancias y mujeres en el ámbito penal, especialmente en casos de violencia de género y delitos contra la integridad sexual.";

const AboutFeatures = () => {
  return (
    <div className="features-container">

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Scale size={50} />
          </div>
          <div className="flip-card-back">
            <p>{text1}</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Shield size={50} />
          </div>
          <div className="flip-card-back">
            <p>{text2}</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <HeartHandshake size={50} />
          </div>
          <div className="flip-card-back">
            <p>{text3}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutFeatures;