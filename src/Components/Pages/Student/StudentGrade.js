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
  const { getAllDayStudents, dataDayAllStudent } =
    React.useContext(StudentContext);
  const [arraySeg, setArraySeg] = React.useState([]);

  React.useEffect(() => {
    getAllDayStudents();
  }, []);

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
            {/*{dataDayAllStudent &&*/}
            {/*  dataDayAllStudent*/}
            {/*    .sort((a, b) => (a.mon > b.mon ? 1 : -1))*/}
            {/*    .map((item) => (*/}
            {/*      <div key={item.id_student}>*/}
            {/*        <li>{item.name + " " + item.mon}</li>*/}
            {/*      </div>*/}
            {/*    ))}*/}

            {dataDayAllStudent &&
              dataDayAllStudent
                .sort((a, b) => (a.mon > b.mon ? 1 : -1))
                .map((item) =>
                  item.mon ? (
                    <div className={styles.table_content_list}>
                      <div className={styles.content_list_item}>
                        <img
                          className={styles.content_list_img}
                          src={iconStudent}
                          alt=""
                        />

                        <ul key={item.id_student}>
                          <li>
                            <b>{item.id_student}</b>
                          </li>
                          <li>
                            <b>{item.name}</b>
                          </li>
                          <li>{item.mon}</li>
                        </ul>
                        <Link to={"/login/aluno/editar/id/" + item.id_student}>
                          <img
                            className={styles.icon_edit_student}
                            src={iconEditStudent}
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )}
          </div>
          {/*<div className={styles.planning_table_ter}>*/}
          {/*  <div className={styles.table_item_header}>*/}
          {/*    <img*/}
          {/*      className={styles.planning_table_img}*/}
          {/*      src={iconTer}*/}
          {/*      alt="icone terça"*/}
          {/*    />*/}
          {/*    <p>{ter}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={styles.table_ter_content}>*/}
          {/*  {dataAllStudent &&*/}
          {/*    dataAllStudent.map((item) =>*/}
          {/*      item.dayStudent*/}
          {/*        .split(",")*/}
          {/*        .sort()*/}
          {/*        .map((item2) =>*/}
          {/*          item2.substr(0, 3) === "ter" ? (*/}
          {/*            <div key={item.id} className={styles.table_content_list}>*/}
          {/*              <div className={styles.content_list_item}>*/}
          {/*                <img*/}
          {/*                  className={styles.content_list_img}*/}
          {/*                  src={iconStudent}*/}
          {/*                  alt=""*/}
          {/*                />*/}

          {/*                <ul>*/}
          {/*                  <b>{item.name}</b>*/}
          {/*                  <li>{item.phone}</li>*/}

          {/*                  <li>{item2}</li>*/}
          {/*                </ul>*/}
          {/*                <Link to={"/login/aluno/editar/id/" + item.id}>*/}
          {/*                  <img*/}
          {/*                    className={styles.icon_edit_student}*/}
          {/*                    src={iconEditStudent}*/}
          {/*                    alt=""*/}
          {/*                  />*/}
          {/*                </Link>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          ) : (*/}
          {/*            ""*/}
          {/*          )*/}
          {/*        )*/}
          {/*    )}*/}
          {/*</div>*/}
          {/*<div className={styles.planning_table_qua}>*/}
          {/*  <div className={styles.table_item_header}>*/}
          {/*    <img*/}
          {/*      className={styles.planning_table_img}*/}
          {/*      src={iconQua}*/}
          {/*      alt="icone quarta"*/}
          {/*    />*/}
          {/*    <p>{qua}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={styles.table_qua_content}>*/}
          {/*  {dataAllStudent &&*/}
          {/*    dataAllStudent.map((item) =>*/}
          {/*      item.dayStudent.split(",").map((item2) =>*/}
          {/*        item2.substr(0, 3) === "qua" ? (*/}
          {/*          <div key={item.id} className={styles.table_content_list}>*/}
          {/*            <div className={styles.content_list_item}>*/}
          {/*              <img*/}
          {/*                className={styles.content_list_img}*/}
          {/*                src={iconStudent}*/}
          {/*                alt=""*/}
          {/*              />*/}

          {/*              <ul>*/}
          {/*                <b>{item.name}</b>*/}
          {/*                <li>{item.phone}</li>*/}

          {/*                <li>{item2}</li>*/}
          {/*              </ul>*/}
          {/*              <Link to={"/login/aluno/editar/id/" + item.id}>*/}
          {/*                <img*/}
          {/*                  className={styles.icon_edit_student}*/}
          {/*                  src={iconEditStudent}*/}
          {/*                  alt=""*/}
          {/*                />*/}
          {/*              </Link>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        ) : (*/}
          {/*          ""*/}
          {/*        )*/}
          {/*      )*/}
          {/*    )}*/}
          {/*</div>*/}
          {/*<div className={styles.planning_table_qui}>*/}
          {/*  <div className={styles.table_item_header}>*/}
          {/*    <img*/}
          {/*      className={styles.planning_table_img}*/}
          {/*      src={iconQui}*/}
          {/*      alt="icone quinta"*/}
          {/*    />*/}
          {/*    <p>{qui}</p>*/}
          {/*  </div>*/}
          {/*</div>{" "}*/}
          {/*<div className={styles.table_qui_content}>*/}
          {/*  {dataAllStudent &&*/}
          {/*    dataAllStudent.map((item) =>*/}
          {/*      item.dayStudent.split(",").map((item2) =>*/}
          {/*        item2.substr(0, 3) === "qui" ? (*/}
          {/*          <div key={item.id} className={styles.table_content_list}>*/}
          {/*            <div className={styles.content_list_item}>*/}
          {/*              <img*/}
          {/*                className={styles.content_list_img}*/}
          {/*                src={iconStudent}*/}
          {/*                alt=""*/}
          {/*              />*/}

          {/*              <ul>*/}
          {/*                <b>{item.name}</b>*/}
          {/*                <li>{item.phone}</li>*/}

          {/*                <li>{item2}</li>*/}
          {/*              </ul>*/}
          {/*              <Link to={"/login/aluno/editar/id/" + item.id}>*/}
          {/*                <img*/}
          {/*                  className={styles.icon_edit_student}*/}
          {/*                  src={iconEditStudent}*/}
          {/*                  alt=""*/}
          {/*                />*/}
          {/*              </Link>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        ) : (*/}
          {/*          ""*/}
          {/*        )*/}
          {/*      )*/}
          {/*    )}*/}
          {/*</div>*/}
          {/*<div className={styles.planning_table_sex}>*/}
          {/*  <div className={styles.table_item_header}>*/}
          {/*    <img*/}
          {/*      className={styles.planning_table_img}*/}
          {/*      src={iconSex}*/}
          {/*      alt="icone sexta"*/}
          {/*    />*/}
          {/*    <p>{sex}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className={styles.table_sex_content}>*/}
          {/*  {dataAllStudent &&*/}
          {/*    dataAllStudent.map((item) =>*/}
          {/*      item.dayStudent.split(",").map((item2) =>*/}
          {/*        item2.substr(0, 3) === "sex" ? (*/}
          {/*          <div key={item.id} className={styles.table_content_list}>*/}
          {/*            <div className={styles.content_list_item}>*/}
          {/*              <img*/}
          {/*                className={styles.content_list_img}*/}
          {/*                src={iconStudent}*/}
          {/*                alt=""*/}
          {/*              />*/}

          {/*              <ul>*/}
          {/*                <b>{item.name}</b>*/}
          {/*                <li>{item.phone}</li>*/}

          {/*                <li>{item2}</li>*/}
          {/*              </ul>*/}
          {/*              <Link to={"/login/aluno/editar/id/" + item.id}>*/}
          {/*                <img*/}
          {/*                  className={styles.icon_edit_student}*/}
          {/*                  src={iconEditStudent}*/}
          {/*                  alt=""*/}
          {/*                />*/}
          {/*              </Link>*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        ) : (*/}
          {/*          ""*/}
          {/*        )*/}
          {/*      )*/}
          {/*    )}*/}
          {/*</div>*/}
        </main>
      </div>
    </div>
  );
};

export default StudentGrade;
