import React from "react";
import { PageHeader, TeacherItem, Input, Select } from "../../components";
import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={"Estes são os proffys disponíveis."}>
        <form action="" id="search-teachers">
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
          <Input type="time" label={"Hora"} name="time" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
