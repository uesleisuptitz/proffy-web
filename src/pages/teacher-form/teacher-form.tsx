import React, { useState, FormEvent } from "react";
import "./styles.css";
import { PageHeader, Input, Textarea, Select } from "../../components";
import { ICONS } from "../../assets";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function TeacherForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
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

  const createClass = (e: FormEvent) => {
    e.preventDefault();
    let data = {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    };
    api
      .post("classes", data)
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        history.push("/study");
      })

      .catch(() => alert("Ocorreu um erro ao tentar cadastrar seus dados!"));
  };

  const onScheduleItemValue = (i: number, field: string, value: string) => {
    console.log("Dados", i + "/" + field + "/" + value);
    let newArray = scheduleItems.map((item, i2) => {
      if (i2 === i) return { ...item, [field]: value };
      else return item;
    });
    setScheduleItems(newArray);
  };

  console.log("scheduleItems", scheduleItems);

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title={"Que incrível que você quer dar aulas."}
        desc={"O primeiro passo é preencher esse formulário de inscrição."}
      />
      <main>
        <form onSubmit={createClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label={"Nome completo"}
              name="name"
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              label={"Avatar"}
              name="avatar"
              id="avatar"
              value={avatar}
              onChange={({ target }) => setAvatar(target.value)}
            />
            <Input
              label={"WhatsApp"}
              name="whatsapp"
              id="whatsapp"
              value={whatsapp}
              onChange={({ target }) => setWhatsapp(target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={({ target }) => setBio(target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label={"Matéria"}
              name="subject"
              id="subject"
              value={subject}
              onChange={({ target }) => setSubject(target.value)}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciência", label: "Ciência" },
              ]}
            />
            <Input
              label={"Custo da sua hora por aula"}
              name="cost"
              id="cost"
              value={cost}
              onChange={({ target }) => setCost(target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={() => addNewScheduleItem()}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((item, i) => (
              <div className="schedule-item" key={item.week_day}>
                <Select
                  label={"Dia da semana"}
                  name="week_day"
                  id="week_day"
                  value={item.week_day}
                  onChange={({ target }) =>
                    onScheduleItemValue(i, "week_day", target.value)
                  }
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
                <Input
                  label={"Das"}
                  name="from"
                  id="from"
                  type="time"
                  value={item.from}
                  onChange={({ target }) =>
                    onScheduleItemValue(i, "from", target.value)
                  }
                />
                <Input
                  label={"Até"}
                  name="to"
                  id="to"
                  type="time"
                  value={item.to}
                  onChange={({ target }) =>
                    onScheduleItemValue(i, "to", target.value)
                  }
                />
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
            <button type={"submit"}>Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
