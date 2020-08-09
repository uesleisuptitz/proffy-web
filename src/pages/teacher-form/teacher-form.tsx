import React, { useState } from "react";
import "./styles.css";
import { PageHeader, Input, Textarea, Select } from "../../components";
import { ICONS } from "../../assets";

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title={"Que incrível que você quer dar aulas."}
        desc={"O primeiro passo é preencher esse formulário de inscrição."}
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label={"Nome completo"} name="name" id="name" />
          <Input label={"Avatar"} name="avatar" id="avatar" />
          <Input label={"WhatsApp"} name="whatsapp" id="whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            label={"Matéria"}
            name="subject"
            id="subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciência", label: "Ciência" },
            ]}
          />
          <Input label={"Custo da sua hora por aula"} name="cost" id="cost" />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={() => addNewScheduleItem()}>
              + Novo horário
            </button>
          </legend>
          {scheduleItems.map((item) => (
            <div className="schedule-item" key={item.week_day}>
              <Select
                label={"Dia da semana"}
                name="week_day"
                id="week_day"
                options={[
                  { value: "0", label: "Segunda" },
                  { value: "1", label: "Terça" },
                  { value: "2", label: "Quarta" },
                  { value: "3", label: "Quinta" },
                  { value: "4", label: "Sexta" },
                  { value: "5", label: "Sábado" },
                  { value: "6", label: "Domingo" },
                ]}
              />
              <Input label={"Das"} name="from" id="from" type="time" />
              <Input label={"Até"} name="to" id="to" type="time" />
            </div>
          ))}
        </fieldset>
        <footer>
          <p>
            <img src={ICONS.warningIcon} alt="Aviso importante" />
            Importante!
            <br />
            Preencha todos dos dados
          </p>
          <button type={"button"}>Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
