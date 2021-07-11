import React, { useContext } from "react";
import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserStorage";

const Dashboard = () => {
  const { src, username, userLogout } = useContext(UserContext);
  return (
    <div className={styles.dash}>
      <div>
        <img className={styles.imgProfile} src={src} alt="" />
      </div>
      <h3>Bem vindo usuário(a): </h3>
      <ul className={styles.links}>
        <li className={styles.link}>
          <NavLink activeClassName={styles.active} to="/login/dashboard">
            {username ? username : ""}
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink activeClassName={styles.active} to="/login/usuario/perfil">
            Meu Perfil
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink activeClassName={styles.active} to="/login/aluno/lista">
            ALunos
          </NavLink>
        </li>
        <li className={styles.link}>
          <NavLink activeClassName={styles.active} to="/login/aluno/adicionar">
            Cadastrar aluno
          </NavLink>
        </li>
        <li className={styles.link}>
          {username && (
            <div className={styles.bnt_out} onClick={userLogout}>
              Sair
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
