import React from "react";
import styles from "./WeekPlanning.module.css";
import { WeekDay } from "../../../Helper/Weekday/WeekDay";
import iconSeg from "../../../Assets/seg.png";
import iconTer from "../../../Assets/ter.png";
import iconQua from "../../../Assets/qua.png";
import iconQui from "../../../Assets/qui.png";
import iconSex from "../../../Assets/sex.png";
import iconEditStudent from "../../../Assets/edit.svg";
import iconStudent from "../../../Assets/student_4872.png";
import { StudentContext } from "../../StudentStorage";
import { Link, useParams } from "react-router-dom";
import { getCreateClassFromContext } from "eslint-plugin-react/lib/util/pragma";

const WeekPlanning = () => {
  const { seg, ter, qua, qui, sex } = WeekDay();
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
    "Rony A.A Silva",
    "Gerada Gizelia P.",
    "Matheus H. P. Silva",
    "Daniel Victor. P. Silva",
    "Rony A.A Silva",
    "Gerada Gizelia P.",
    "Matheus H. P. Silva",
    "Daniel Victor. P. Silva",
  ];
  const optionsTer = [
    "Rony A.A Silva",
    "Gerada Gizelia P.",
    "Matheus H. P. Silva",
    "Daniel Victor. P. Silva",
    "Rony A.A Silva",
    "Gerada Gizelia P.",
    "Matheus H. P. Silva",
    "Daniel Victor. P. Silva",
    "Rony A.A Silva",
    "Gerada Gizelia P.",
    "Matheus H. P. Silva",
    "Daniel Victor. P. Silva",
  ];
  for (let i = 0; i < options.length; i++) {
    if (i === new Date().getMonth()) selectedTeste = options[i];
  }

  const handleMouseScroll = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log(event.pageX);
    console.log(event.pageY);
    if (event.pageX < 1150) {
      window.scrollTo((event.currentTarget.scrollLeft += 30), 60);
    } else {
      window.scrollTo((event.currentTarget.scrollLeft -= 30), 60);
    }
  };

  return (
    <div className={styles.planning}>
      <div className={styles.planning_container}>
        <main className={styles.planning_table} onMouseOver={handleMouseScroll}>
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
            {options.map((item) => (
              <div className={styles.table_content_list}>
                <div className={styles.content_list_item}>
                  <img
                    className={styles.content_list_img}
                    src={iconStudent}
                    alt=""
                  />
                  <p>{item}</p>
                  <p>{stdGrade}</p>
                  Horário: 11:30
                  <Link to={"/login/aluno/editar/id/"}>
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
            {optionsTer.map((item) => (
              <div className={styles.table_content_list}>
                <div className={styles.content_list_item}>
                  <img
                    className={styles.content_list_img}
                    src={iconStudent}
                    alt=""
                  />
                  <p>{item}</p>
                  Horário: 11:30
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
            {optionsTer.map((item) => (
              <div className={styles.table_content_list}>
                <div className={styles.content_list_item}>
                  <img
                    className={styles.content_list_img}
                    src={iconStudent}
                    alt=""
                  />
                  <p>{item}</p>
                  Horário: 11:30
                </div>
              </div>
            ))}
          </div>
          <div className={styles.planning_table_qui}>
            <div className={styles.table_item_header}>
              <img
                className={styles.planning_table_img}
                src={iconQui}
                alt="icone quinta"
              />
              <p>{qui}</p>
            </div>
          </div>{" "}
          <div className={styles.table_qui_content}>
            {optionsTer.map((item) => (
              <div className={styles.table_content_list}>
                <div className={styles.content_list_item}>
                  <img
                    className={styles.content_list_img}
                    src={iconStudent}
                    alt=""
                  />
                  <p>{item}</p>
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
            {optionsTer.map((item) => (
              <div className={styles.table_content_list}>
                <div className={styles.content_list_item}>
                  <img
                    className={styles.content_list_img}
                    src={iconStudent}
                    alt=""
                  />
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className={styles.button_table_left}
            onClick={handleMouseScroll}
          >
            Left
          </button>
          <button
            className={styles.button_table_right}
            onClick={handleMouseScroll}
          >
            Right
          </button>
        </main>
      </div>
    </div>
  );
};

export default WeekPlanning;
