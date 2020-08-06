import React from "react";
import { ICONS } from "../../assets";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src={
            "http://s2.glbimg.com/k9S_nEXQns81MzLlZO61JyCwqRM=/0x0:694x363/695x364/s.glbimg.com/po/tt2/f/original/2015/07/01/snapchat-flashy-features.jpg"
          }
          alt=""
        />
        <div>
          <strong>Uéslei Suptitz</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Você termina de ler o parágrafo.
        <br />
        Aí tem que ler de novo porque estava viajando em outra dimensão.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={ICONS.whatsAppIcon} alt="whatsAppIcon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
