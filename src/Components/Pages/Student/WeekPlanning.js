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
  const { stdName, stdGrade, selectStudent } = React.useContext(StudentContext);
  const [nomeAluno, setNomeAluno] = React.useState("");
  const [serieAluno, setSerieAluno] = React.useState("");
  const { id } = useParams();
  React.useEffect(() => {
    selectStudent(id);
    setNomeAluno(stdName);
    setSerieAluno(stdGrade);
  }, [stdName, stdGrade, id, selectStudent]);

  return (
    <div className={styles.planning}>
      <div className={styles.planning_container}>
        <h1>
          Planejamento Semanal Aluno: {nomeAluno} Escolaridade: {serieAluno}
        </h1>
        <div className={styles.planning_table}>
          <div className={styles.planning_table_title}>Calendário</div>
          <div className={styles.planning_table_item}>
            <img
              className={styles.planning_table_img}
              src={iconSeg}
              alt="icone segunda"
            />
            <ul>
              {" "}
              <li> Data: {seg}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <img
              className={styles.planning_table_img}
              src={iconTer}
              alt="icone terca"
            />
            <ul>
              <li> Data: {ter}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <img
              className={styles.planning_table_img}
              src={iconQua}
              alt="icone quarta"
            />
            <ul>
              <li> Data: {qua}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <img
              className={styles.planning_table_img}
              src={iconQui}
              alt="icone quinta"
            />
            <ul>
              <li> Data: {qui}</li>
            </ul>
          </div>
          <div className={styles.planning_table_item}>
            {" "}
            <img
              className={styles.planning_table_img}
              src={iconSex}
              alt="icone sexta"
            />
            <ul>
              <li> Data: {sex}</li>
            </ul>
          </div>
          <div className={styles.table_description_tittle}>Descrição</div>

          <div className={styles.table_description_item}>
            <textarea
              className={styles.description_text_area}
              name="description"
              id=""
            >
              teste seg
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </div>
          <div className={styles.table_description_item}>
            {" "}
            <textarea
              className={styles.description_text_area}
              name="description"
              id=""
            >
              teste ter
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </div>
          <div className={styles.table_description_item}>
            {" "}
            <textarea
              className={styles.description_text_area}
              name="description"
              id=""
            >
              teste qua
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </div>
          <div className={styles.table_description_item}>
            {" "}
            <textarea
              className={styles.description_text_area}
              name="description"
              id=""
            >
              teste qui
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </div>
          <div className={styles.table_description_item}>
            {" "}
            <textarea
              className={styles.description_text_area}
              name="description"
              id=""
            >
              teste sex
            </textarea>
            <div className={styles.text_area_buttons}>
              <button className={styles.text_area_button}>salvar</button>
              <button className={styles.text_area_button}>Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekPlanning;
