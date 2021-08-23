import React from "react";
import axios from "axios";
import { DELETE_STD, GET_ALL_STD } from "../../../api/api";
import styles from "./ListStudents.module.css";
import { Link, useParams } from "react-router-dom";
import iconEdit from "../../../Assets/UserEdit_40958.png";
import iconDelete from "../../../Assets/UserRemove_40959.png";

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
      <h1> ALUNOS CADASTRADOS</h1>
      <div className={styles.list_student_container}>
        <div className={styles.names}>
          <h3>Nome:</h3>
          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>{item.name}</span>
            ))}
        </div>
        <div className={styles.email}>
          <h3>Email:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>{item.email}</span>
            ))}
        </div>
        <div className={styles.phones}>
          <h3>Telefone:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>{item.phone}</span>
            ))}
        </div>
        <div className={styles.address}>
          <h3>Endereço:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>{item.address}</span>
            ))}
        </div>
        <div className={styles.birthday}>
          <h3>Data Nasc:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>{item.birthday}</span>
            ))}
        </div>
        <div className={styles.grade}>
          <h3>Escolaridade:</h3>

          {stdData &&
            stdData.map((item) => (
              <span className={styles.item}>{item.grade}</span>
            ))}
        </div>
        <div className={styles.registration_date}>
          <h3>Data Mat:</h3>

          {stdData &&
            stdData.map((item) => (
              <p className={styles.item}>{item.registrationDate}</p>
            ))}
        </div>{" "}
        <div className={styles.expiration_date}>
          <h3>Vencimento:</h3>

          {stdData &&
            stdData.map((item) => (
              <p className={styles.item}>{item.expirationDate}</p>
            ))}
        </div>{" "}
        <div className={styles.button_edit}>
          <h3>Editar</h3>
          {stdData &&
            stdData.map((item) => (
              <Link className={styles.button} to={"/login/aluno/id/" + item.id}>
                <img
                  className={styles.icons}
                  src={iconEdit}
                  alt="icone editar"
                />
              </Link>
            ))}
        </div>
        <div className={styles.button_remove}>
          <h3>Remover</h3>
          {stdData &&
            stdData.map((item) => (
              <Link
                className={styles.button}
                to={"/login/aluno/deletar/" + item.id}
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
  );
}

export default ListStudents;
