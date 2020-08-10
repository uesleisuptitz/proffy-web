import React, { useState, useEffect } from "react";
import { PageHeader, TeacherItem, Input, Select } from "../../components";
import "./styles.css";
import api from "../../services/api";
import { Teacher } from "../../components/teacher-item/teacher-item";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (subject && week_day && time)
      api
        .get(`/classes`, {
          params: {
            subject,
            week_day,
            time,
          },
        })
        .then(({ data }) => setTeachers(data));
  }, [subject, week_day, time]);

  console.log("teachers", teachers);
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={"Estes são os proffys disponíveis."}>
        <form action="" id="search-teachers">
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
          <Select
            label={"Dia da semana"}
            name="week_day"
            id="week_day"
            value={week_day}
            onChange={({ target }) => setWeekDay(target.value)}
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
            type="time"
            label={"Hora"}
            name="time"
            value={time}
            onChange={({ target }) => setTime(target.value)}
          />
        </form>
      </PageHeader>
      <main>
        {teachers.map((t: Teacher) => (
          <TeacherItem data={t} key={t.id} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
