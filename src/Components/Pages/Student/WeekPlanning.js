import React from "react";
import styles from "./WeekPlanning.module.css";
import { WeekDay } from "../../../Helper/Weekday/WeekDay";
import iconSeg from "../../../Assets/seg.png";
import iconTer from "../../../Assets/ter.png";
import iconQua from "../../../Assets/qua.png";
import iconQui from "../../../Assets/qui.png";
import iconSex from "../../../Assets/sex.png";
import iconStudent from "../../../Assets/student_4872.png";
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
          <table className={styles.planning_container}>
            <tbody>
              <th>
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
              </th>
              <th colSpan={3}>
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
              </th>
              <th colSpan={2}>
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
              </th>
              <tr>
                <th>Horário</th>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
                <td>
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
                </td>
              </tr>
              <tr>
                <th rowSpan={2}>
                  {" "}
                  <ul className={styles.table_list_hours}>
                    <li>Matutino</li>
                    <li> 07h:30min</li>
                    <li>11h:30min</li>
                  </ul>
                </th>
                <td className={styles.table_column_seg} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <div className={styles.students_table_item}>
                      <img
                        className={styles.icon_table_student}
                        src={iconStudent}
                        alt="icone-estudante"
                      />
                      <div className={styles.table_student_item}>{stdName}</div>
                      <div className={styles.table_student_item}>
                        {stdGrade}
                      </div>
                      <div className={styles.table_student_item}>{"07:30"}</div>
                    </div>
                    <div className={styles.students_table_item}>
                      <img
                        className={styles.icon_table_student}
                        src={iconStudent}
                        alt="icone-estudante"
                      />
                      <div className={styles.table_student_item}>{stdName}</div>
                      <div className={styles.table_student_item}>
                        {stdGrade}
                      </div>
                      <div className={styles.table_student_item}>{"07:30"}</div>
                    </div>
                    <div className={styles.students_table_item}>
                      <img
                        className={styles.icon_table_student}
                        src={iconStudent}
                        alt="icone-estudante"
                      />
                      <div className={styles.table_student_item}>{stdName}</div>
                      <div className={styles.table_student_item}>
                        {stdGrade}
                      </div>
                      <div className={styles.table_student_item}>{"07:30"}</div>
                    </div>
                    <div className={styles.students_table_item}>
                      <img
                        className={styles.icon_table_student}
                        src={iconStudent}
                        alt="icone-estudante"
                      />
                      <div className={styles.table_student_item}>{stdName}</div>
                      <div className={styles.table_student_item}>
                        {stdGrade}
                      </div>
                      <div className={styles.table_student_item}>{"07:30"}</div>
                    </div>
                    <div className={styles.students_table_item}>
                      <img
                        className={styles.icon_table_student}
                        src={iconStudent}
                        alt="icone-estudante"
                      />
                      <div className={styles.table_student_item}>{stdName}</div>
                      <div className={styles.table_student_item}>
                        {stdGrade}
                      </div>
                      <div className={styles.table_student_item}>{"07:30"}</div>
                    </div>
                    <div className={styles.students_table_item}>
                      <img
                        className={styles.icon_table_student}
                        src={iconStudent}
                        alt="icone-estudante"
                      />
                      <div className={styles.table_student_item}>{stdName}</div>
                      <div className={styles.table_student_item}>
                        {stdGrade}
                      </div>
                      <div className={styles.table_student_item}>{"07:30"}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.table_column_ter} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_column_qua} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_column_qui} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_column_sex} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
              </tr>{" "}
              <tr></tr>
              <tr>
                <th rowSpan={2}>
                  {" "}
                  <ul className={styles.table_list_hours}>
                    <li>Vespertino</li>
                    <li> 13h:30min</li>
                    <li>17h:30min</li>
                  </ul>
                </th>
                <td className={styles.table_colum_seg} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_colum_ter} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_colum_qua} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_colum_qui} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
                <td className={styles.table_colum_sex} rowSpan={2}>
                  <div className={styles.list_students_table}>
                    <img
                      className={styles.icon_table_student}
                      src={iconStudent}
                      alt="icone-estudante"
                    />
                    <div className={styles.table_student_item}>{stdName}</div>
                    <div className={styles.table_student_item}>{stdGrade}</div>
                    <div className={styles.table_student_item}>{"horario"}</div>
                  </div>
                </td>
              </tr>{" "}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeekPlanning;
