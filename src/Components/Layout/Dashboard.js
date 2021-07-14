import React, { useContext } from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserStorage";

const Dashboard = () => {
  const { data, userLogout } = useContext(UserContext);
  return (
    <div className={styles.dash + " animeLeft"}>
      <ul className={styles.links}>
        <h3>Bem vindo</h3>
        {data ? data : ""}
        <li className={styles.link}>
          <Link to="/login/aluno/lista">ALunos</Link>
        </li>
        <li className={styles.link}>
          <Link to="/login/aluno/adicionar">Cadastrar aluno</Link>
        </li>
        <li className={styles.link}>
          {data && (
            <a type="submit" onClick={userLogout}>
              Sair
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
