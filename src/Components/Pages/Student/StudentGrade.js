import React from "react";
import styles from "./StudentGrade.module.css";
import { WeekDay } from "../../../Helper/Weekday/WeekDay";
import iconSeg from "../../../Assets/seg.png";
import iconTer from "../../../Assets/ter.png";
import iconQua from "../../../Assets/qua.png";
import iconQui from "../../../Assets/qui.png";
import iconSex from "../../../Assets/sex.png";
import iconEditStudent from "../../../Assets/editAluno.svg";
import iconStudent from "../../../Assets/estudante.svg";
import { Link } from "react-router-dom";
import { StudentContext } from "../../StudentStorage";

const StudentGrade = () => {
  const { seg, ter, qua, qui, sex } = WeekDay();
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
      item.dayStudent.split(",").map((day) =>
        day.includes("seg")
          ? monDays.push({
              hora: day,
              nome: item.name,
              id: item.id,
              grade: item.grade,
              progress: item.progress,
            })
          : ""
      )
    );
  monDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent.split(",").map((day) =>
        day.includes("ter")
          ? tuesDays.push({
              hora: day,
              nome: item.name,
              id: item.id,
              grade: item.grade,
              progress: item.progress,
            })
          : ""
      )
    );
  tuesDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent.split(",").map((day) =>
        day.includes("qua")
          ? wedDays.push({
              hora: day,
              nome: item.name,
              id: item.id,
              grade: item.grade,
              progress: item.progress,
            })
          : ""
      )
    );
  wedDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent.split(",").map((day) =>
        day.includes("qui")
          ? thuDays.push({
              hora: day,
              nome: item.name,
              id: item.id,
              grade: item.grade,
              progress: item.progress,
            })
          : ""
      )
    );
  thuDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  dataAllStudent &&
    dataAllStudent.map((item) =>
      item.dayStudent.split(",").map((day) =>
        day.includes("sex")
          ? friDays.push({
              hora: day,
              nome: item.name,
              id: item.id,
              grade: item.grade,
              progress: item.progress,
            })
          : ""
      )
    );
  friDays.sort((a, b) => (a.hora > b.hora ? 1 : b.hora > a.hora ? -1 : 0));

  return (
    <div className={styles.planning}>
      <div className={styles.planning_container}>
        <main className={styles.planning_table}>
          <div className={styles.planning_table_seg}>
            <div className={styles.table_item_header}>
              <img
                className={styles.planning_table_img}
                src={iconSeg}
                alt="icone segunda"
              />
              <p>{seg}</p>
            </div>
          </div>
          <div className={styles.table_seg_content}>
            {monDays &&
              monDays.map((item) => (
                <div key={item.id} className={styles.table_content_list}>
                  <div className={styles.content_list_item}>
                    <img
                      className={styles.content_list_img}
                      src={iconStudent}
                      alt=""
                    />

                    <ul>
                      <b>{item.nome}</b>
                      <li>{item.hora}</li>
                      <li>{item.grade}</li>
                      <li>{item.progress}</li>
                    </ul>
                    <Link to={"/login/aluno/editar/id/" + item.id}>
                      <img
                        className={styles.icon_edit_student}
                        src={iconEditStudent}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.planning_table_ter}>
            <div className={styles.table_item_header}>
              <img
                className={styles.planning_table_img}
                src={iconTer}
                alt="icone terça"
              />
              <p>{ter}</p>
            </div>
          </div>
          <div className={styles.table_ter_content}>
            {tuesDays &&
              tuesDays.map((item) => (
                <div key={item.id} className={styles.table_content_list}>
                  <div className={styles.content_list_item}>
                    <img
                      className={styles.content_list_img}
                      src={iconStudent}
                      alt=""
                    />

                    <ul>
                      <b>{item.nome}</b>
                      <li>{item.hora}</li>
                      <li>{item.grade}</li>
                      <li>{item.progress}</li>
                    </ul>
                    <Link to={"/login/aluno/editar/id/" + item.id}>
                      <img
                        className={styles.icon_edit_student}
                        src={iconEditStudent}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.planning_table_qua}>
            <div className={styles.table_item_header}>
              <img
                className={styles.planning_table_img}
                src={iconQua}
                alt="icone quarta"
              />
              <p>{qua}</p>
            </div>
          </div>
          <div className={styles.table_qua_content}>
            {wedDays &&
              wedDays.map((item) => (
                <div key={item.id} className={styles.table_content_list}>
                  <div className={styles.content_list_item}>
                    <img
                      className={styles.content_list_img}
                      src={iconStudent}
                      alt=""
                    />

                    <ul>
                      <b>{item.nome}</b>
                      <li>{item.hora}</li>
                      <li>{item.grade}</li>
                      <li>{item.progress}</li>
                    </ul>
                    <Link to={"/login/aluno/editar/id/" + item.id}>
                      <img
                        className={styles.icon_edit_student}
                        src={iconEditStudent}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.planning_table_qui}>
            <div className={styles.table_item_header}>
              <img
                className={styles.planning_table_img}
                src={iconQui}
                alt="icone qui"
              />
              <p>{qui}</p>
            </div>
          </div>
          <div className={styles.table_qui_content}>
            {thuDays &&
              thuDays.map((item) => (
                <div key={item.id} className={styles.table_content_list}>
                  <div className={styles.content_list_item}>
                    <img
                      className={styles.content_list_img}
                      src={iconStudent}
                      alt=""
                    />

                    <ul>
                      <b>{item.nome}</b>
                      <li>{item.hora}</li>
                      <li>{item.grade}</li>
                      <li>{item.progress}</li>
                    </ul>
                    <Link to={"/login/aluno/editar/id/" + item.id}>
                      <img
                        className={styles.icon_edit_student}
                        src={iconEditStudent}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.planning_table_sex}>
            <div className={styles.table_item_header}>
              <img
                className={styles.planning_table_img}
                src={iconSex}
                alt="icone sexta"
              />
              <p>{sex}</p>
            </div>
          </div>
          <div className={styles.table_sex_content}>
            {friDays &&
              friDays.map((item) => (
                <div key={item.id} className={styles.table_content_list}>
                  <div className={styles.content_list_item}>
                    <img
                      className={styles.content_list_img}
                      src={iconStudent}
                      alt=""
                    />

                    <ul>
                      <b>{item.nome}</b>
                      <li>{item.hora}</li>
                      <li>{item.grade}</li>
                      <li>{item.progress}</li>
                    </ul>
                    <Link to={"/login/aluno/editar/id/" + item.id}>
                      <img
                        className={styles.icon_edit_student}
                        src={iconEditStudent}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentGrade;
