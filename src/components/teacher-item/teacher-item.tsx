import React from "react";
import { ICONS } from "../../assets";
import "./styles.css";
import api from "../../services/api";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  data: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
  const { id, avatar, bio, cost, name, subject, whatsapp } = data;
  const createCon = () => api.post("connections", { user_id: id });
  return (
    <article className="teacher-item" key={id}>
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/hora <strong>R$ {cost}</strong>
        </p>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          onClick={createCon}
        >
          <img src={ICONS.whatsAppIcon} alt="whatsAppIcon" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
