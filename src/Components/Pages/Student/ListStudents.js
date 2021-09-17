import React from "react";
import axios from "axios";
import { GET_ALL_STD } from "../../../api/api";
import styles from "./ListStudents.module.css";
import { Link } from "react-router-dom";
import iconEdit from "../../../Assets/UserEdit_40958.png";
import iconSelect from "../../../Assets/User_40961.png";
import iconDelete from "../../../Assets/UserRemove_40959.png";
import iconEmail from "../../../Assets/email-outlined-envelope-back-symbol_icon-icons.com_57846.svg";
import iconAluno from "../../../Assets/user_icon-icons.com_48201.png";
import iconPlanejamento from "../../../Assets/planejamento.svg";
import { StudentContext } from "../../StudentStorage";

function ListStudents() {
  const [stdData, setStdData] = React.useState("");

  React.useEffect(() => {
    const getStds = async () => {
      try {
        const { url, options } = GET_ALL_STD();
        const response = await axios(url, options);
        response && setStdData(response.data.data);
        console.log(response.data);
      } catch (response) {
        console.log(response);
      }
    };
    getStds();
  }, []);

  return (
    <div className={styles.list_student}>
      <h1>Alunos da Espaço Educar</h1>
      <div className={styles.list_student_container}>
        <div className={styles.names}>
          <h3>Nome:</h3>
          {stdData &&
            stdData.map((item) => (
              <span className={styles.item} key={item.id}>
                <img
                  className={styles.list_student_icons}
                  src={iconAluno}
                  alt="icone aluno"
                />
                {item.name}
              </span>
            ))}
        </div>
        <div className={styles.email}>
          <h3>Email:</h3>
          {stdData &&
            stdData.map((item) => (
              <span key={item.id} className={styles.item}>
                {" "}
                <img
                  className={styles.list_student_icons}
                  src={iconEmail}
                  alt="icone email"
                />
                {item.email}
              </span>
            ))}
        </div>

        <div className={styles.buttons}>
          <div className={styles.list_student_button}>
            <h3>Aluno</h3>
            {stdData &&
              stdData.map((item) => (
                <Link
                  key={item.id}
                  className={styles.list_student_link}
                  to={"/login/aluno/id/" + item.id}
                >
                  <img
                    className={styles.icons}
                    src={iconSelect}
                    alt="icone selecionar"
                  />
                </Link>
              ))}
          </div>
          <div className={styles.list_student_button}>
            <h3>Editar</h3>
            {stdData &&
              stdData.map((item) => (
                <Link
                  key={item.id}
                  className={styles.list_student_link}
                  to={"/login/aluno/editar/id/" + item.id}
                >
                  <img
                    className={styles.icons}
                    src={iconEdit}
                    alt="icone editar"
                  />
                </Link>
              ))}
          </div>
          <div className={styles.list_student_button}>
            <h3>Deletar</h3>
            {stdData &&
              stdData.map((item) => (
                <Link
                  key={item.id}
                  className={styles.list_student_link}
                  to={"/login/aluno/deletar/id/" + item.id}
                >
                  <img
                    className={styles.icons}
                    src={iconDelete}
                    alt="icone delete"
                  />
                </Link>
              ))}
          </div>
          <div className={styles.list_student_button}>
            <h3>Planejamento</h3>
            {stdData &&
              stdData.map((item) => (
                <Link
                  key={item.id}
                  className={styles.list_student_link}
                  to={"/login/aluno/planejamento/id/" + item.id}
                >
                  <img
                    className={styles.icons}
                    src={iconPlanejamento}
                    alt="icone planejamento"
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListStudents;
