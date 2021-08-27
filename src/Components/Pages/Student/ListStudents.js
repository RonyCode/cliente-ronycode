import React from "react";
import axios from "axios";
import { DELETE_STD, GET_ALL_STD } from "../../../api/api";
import styles from "./ListStudents.module.css";
import { Link, useParams } from "react-router-dom";
import iconEdit from "../../../Assets/UserEdit_40958.png";
import iconDelete from "../../../Assets/UserRemove_40959.png";
import iconCalendar from "../../../Assets/3586371-calendar-date-event-schedule_107943.svg";
import iconPhone from "../../../Assets/phone_icon-icons.com_48251.png";
import iconEmail from "../../../Assets/email-outlined-envelope-back-symbol_icon-icons.com_57846.svg";
import iconAluno from "../../../Assets/user_icon-icons.com_48201.png";
import iconEndereco from "../../../Assets/endereco.svg";
import iconEstudo from "../../../Assets/book-with-bookmark-educational-tool-outlined-symbol_icon-icons.com_57884.svg";

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
      {/*<h1>Meus Alunos</h1>*/}

      <div className={styles.list_student_container}>
        <h1>Alunos da Espaço Educar</h1>
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
              <span className={styles.item}>
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
        <div className={styles.phones}>
          <h3>Telefone:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>
                {" "}
                <img
                  className={styles.list_student_icons}
                  src={iconPhone}
                  alt="icone telefone"
                />
                {item.phone}
              </span>
            ))}
        </div>
        <div className={styles.address}>
          <h3>Endereço:</h3>
          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>
                <img
                  className={styles.list_student_icons}
                  src={iconEndereco}
                  alt="icone endereço"
                />
                {item.address}
              </span>
            ))}
        </div>
        <div className={styles.birthday}>
          <h3>Data Nasc:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>
                <img
                  className={styles.list_student_icons}
                  src={iconCalendar}
                  alt="icone calendario"
                />
                {item.birthday}
              </span>
            ))}
        </div>
        <div className={styles.grade}>
          <h3>Escolaridade:</h3>
          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>
                <img
                  className={styles.list_student_icons}
                  src={iconEstudo}
                  alt="icone escolaridade"
                />
                {item.grade}
              </span>
            ))}
        </div>
        <div className={styles.registration_date}>
          <h3>Data Mat:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>
                <img
                  className={styles.list_student_icons}
                  src={iconCalendar}
                  alt="icone calendario"
                />
                {item.registrationDate}
              </span>
            ))}
        </div>{" "}
        <div className={styles.expiration_date}>
          <h3>Vencimento:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>
                {" "}
                <img
                  className={styles.list_student_icons}
                  src={iconCalendar}
                  alt="icone calendario"
                />
                {item.expirationDate}
              </span>
            ))}
        </div>{" "}
        <div className={styles.buttons}>
          <div className={styles.button_edit}>
            <h3>Editar</h3>
            {stdData &&
              stdData.map((item) => (
                <Link
                  className={styles.button}
                  to={"/login/aluno/id/" + item.id}
                >
                  <img
                    className={styles.icons}
                    src={iconEdit}
                    alt="icone editar"
                  />
                </Link>
              ))}
          </div>
          <div className={styles.button_remove}>
            <h3>Deletar</h3>
            {stdData &&
              stdData.map((item) => (
                <Link
                  className={styles.button}
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
        </div>
      </div>
    </div>
  );
}

export default ListStudents;
