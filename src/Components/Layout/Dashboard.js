import React from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { UserStorage } from "../UserStorage";

const Dashboard = ({ username }) => {
  const { email, setEmail, id, setId } = React.useContext(UserStorage);

  return (
    <div className={styles.dash}>
      <ul className={styles.link}>
        <h3>Bem vindo</h3>
        <p>{email}</p>
        <li className={styles.links}>
          <Link to="/login/aluno/lista">ALunos</Link>
        </li>
        <li className={styles.links}>
          <Link to="/login/aluno/adicionar">Cadastrar aluno</Link>
        </li>
        <li className={styles.links}>
          <Link to="/sair">Sair</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
