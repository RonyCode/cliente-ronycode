import React from "react";
import styles from "./WeekPlanning.module.css";
import { WeekDay } from "../../../Helper/Weekday/WeekDay";
import iconSeg from "../../../Assets/seg.png";
import iconTer from "../../../Assets/ter.png";
import iconQua from "../../../Assets/qua.png";
import iconQui from "../../../Assets/qui.png";
import iconSex from "../../../Assets/sex.png";
import { StudentContext } from "../../StudentStorage";
import { useParams } from "react-router-dom";

const WeekPlanning = () => {
  const { seg, ter, qua, qui, sex } = WeekDay();
  const [historyGrade, setHistoryGrade] = React.useState(seg);
  const [textArea, setTextArea] = React.useState("");
  const { stdName, selectStudent, stdGrade } = React.useContext(StudentContext);
  const { id } = useParams();
  React.useEffect(() => {
    selectStudent(id);
  }, [stdName, stdName]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  let selectedTeste = false;
  const options = [
    "janeiro",
    "fevereiro",
    "marco",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  for (let i = 0; i < options.length; i++) {
    if (i === new Date().getMonth()) selectedTeste = options[i];
  }
  console.log(selectedTeste);
  return (
    <div className={styles.planning}>
      <div className={styles.planning_container}>
        <h1>Planejamento Semanal</h1>
        <div className={styles.planning_table}>
          <div className={styles.planning_table_historyGrade}>
            <label htmlFor="">
              <b>Mês</b>
            </label>

            <select
              className={styles.add_student_select}
              value={historyGrade}
              onChange={({ target }) => setHistoryGrade(target.value)}
            >
              {options.map((item) => (
                <option key={item} selected={selectedTeste} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.planning_table_item}>
            <label htmlFor="description-seg">
              <img
                className={styles.planning_table_img}
                src={iconSeg}
                alt="icone segunda"
              />
            </label>

            <ul>
              {" "}
              <li> Data: {seg}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <label htmlFor="description-ter">
              <img
                className={styles.planning_table_img}
                src={iconTer}
                alt="icone terca"
              />
            </label>
            <ul>
              <li> Data: {ter}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <label htmlFor="description-qua">
              <img
                className={styles.planning_table_img}
                src={iconQua}
                alt="icone quarta"
              />
            </label>
            <ul>
              <li> Data: {qua}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <label htmlFor="description-qui">
              <img
                className={styles.planning_table_img}
                src={iconQui}
                alt="icone quinta"
              />
            </label>
            <ul>
              <li> Data: {qui}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <label htmlFor="description-sex">
              <img
                className={styles.planning_table_img}
                src={iconSex}
                alt="icone sexta"
              />
            </label>
            <ul>
              <li> Data: {sex}</li>
            </ul>
          </div>

          <div className={styles.table_description_tittle}>
            <ul>
              <li>
                Aluno: <b>{stdName}</b>
              </li>
              <li>
                Serie: <b>{stdGrade}</b>
              </li>
            </ul>
          </div>
          <div className={styles.planning_table_week}>
            <ul>
              <li>
                Do dia: <b>{seg}</b> à <b>{sex}</b>
              </li>
              <li>
                {" "}
                Horário: <b>07h:30min </b> às <b>11h:30min</b>
              </li>
              Horário: <b>11h:30min </b> às <b>17h:30min</b>
            </ul>
          </div>

          <form
            className={styles.table_description_item}
            onSubmit={handleSubmit}
          >
            <textarea
              className={styles.description_text_area}
              name="description"
              id="description-seg"
              value={textArea || ""}
              onChange={({ target }) => setTextArea(target.value)}
            />

            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </form>

          <form
            className={styles.table_description_item}
            onSubmit={handleSubmit}
          >
            <textarea
              className={styles.description_text_area}
              name="description"
              id="description-ter"
            >
              teste ter Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Consequuntur dolore facilis itaque numquam sunt voluptatum?
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </form>

          <form
            className={styles.table_description_item}
            onSubmit={handleSubmit}
          >
            <textarea
              className={styles.description_text_area}
              name="description"
              id="description-qua"
            >
              teste qua Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Consequuntur dolore facilis itaque numquam sunt voluptatum?
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </form>

          <form
            className={styles.table_description_item}
            onSubmit={handleSubmit}
          >
            <textarea
              className={styles.description_text_area}
              name="description"
              id="description-qui"
            >
              teste qui Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Consequuntur dolore facilis itaque numquam sunt voluptatum?
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </form>

          <form
            className={styles.table_description_item}
            onSubmit={handleSubmit}
          >
            <textarea
              className={styles.description_text_area}
              name="description"
              id="description-sex"
            >
              teste sex Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Consequuntur dolore facilis itaque numquam sunt voluptatum?
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeekPlanning;
