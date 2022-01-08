import React from "react";
import styles from "./Contact.module.css";
import { StudentContext } from "../../StudentStorage";

const Contato = () => {
  const { getAllStudents, dataAllStudent } = React.useContext(StudentContext);

  React.useEffect(() => {
    getAllStudents();
  }, []);
  let monDays = [];
  let tuesDays = [];
  let wedDays = [];
  let thuDays = [];
  let friDays = [];

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent
        .split(",")
        .map((day) =>
          day.includes("seg")
            ? monDays.push({ hora: day, nome: item.name })
            : ""
        )
    );
  monDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent
        .split(",")
        .map((day) =>
          day.includes("ter")
            ? tuesDays.push({ hora: day, nome: item.name })
            : ""
        )
    );
  tuesDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent
        .split(",")
        .map((day) =>
          day.includes("qua")
            ? wedDays.push({ hora: day, nome: item.name })
            : ""
        )
    );
  wedDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent
        .split(",")
        .map((day) =>
          day.includes("qui")
            ? thuDays.push({ hora: day, nome: item.name })
            : ""
        )
    );
  thuDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent
        .split(",")
        .map((day) =>
          day.includes("sex")
            ? friDays.push({ hora: day, nome: item.name })
            : ""
        )
    );

  friDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  console.log(monDays.includes("seg"));
  return (
    <div className={styles.contact}>
      {monDays.map((i) => (
        <ul>
          <li>{i.nome}</li>
          <li>{i.hora}</li>
        </ul>
      ))}{" "}
      {tuesDays.map((i) => (
        <ul>
          <li>{i.nome}</li>
          <li>{i.hora}</li>
        </ul>
      ))}{" "}
      {wedDays.map((i) => (
        <ul>
          <li>{i.nome}</li>
          <li>{i.hora}</li>
        </ul>
      ))}{" "}
      {thuDays.map((i) => (
        <ul>
          <li>{i.nome}</li>
          <li>{i.hora}</li>
        </ul>
      ))}{" "}
      {friDays.map((i) => (
        <ul>
          <li>{i.nome}</li>
          <li>{i.hora}</li>
        </ul>
      ))}
    </div>
  );
};
export default Contato;
