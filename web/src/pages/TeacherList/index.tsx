import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { TeacherListContainer, SearchTeachersForm, Main } from "./styles";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    try {
      const { data } = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(data);
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    <TeacherListContainer>
      <PageHeader title="Estes são os proffys disponíveis">
        <SearchTeachersForm onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Educação física", label: "Educação física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            name="time"
            label="Hora"
          />

          <button type="submit">Buscar</button>
        </SearchTeachersForm>
      </PageHeader>

      <Main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Main>
    </TeacherListContainer>
  );
}

export default TeacherList;
