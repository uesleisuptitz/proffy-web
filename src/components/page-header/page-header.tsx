import React from "react";
import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../assets";
import "./styles.css";

interface PageHeaderProps {
  title: String;
  desc?: String;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, desc }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={ICONS.backIcon} alt="Voltar" />
        </Link>
        <img src={IMAGES.logoImg} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {desc && <p>{desc}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
