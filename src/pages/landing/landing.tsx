import React, { useState, useEffect } from "react";
import { IMAGES, ICONS } from "../../assets";
import { Link } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((resp) => setTotalConnections(resp.data.total));
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={IMAGES.logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={IMAGES.landingImg} alt="" className="hero-image" />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={ICONS.studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={ICONS.giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões realizadas{" "}
          <img src={ICONS.purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
