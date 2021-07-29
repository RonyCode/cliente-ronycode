import React, { useContext } from "react";
import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserStorage";

const Dashboard = () => {
  const { src, userFirstName, userLogout } = useContext(UserContext);
  return (
    <div className={styles.dash}>
      <div>
        <img className={styles.imgProfile} src={src} alt="" />
      </div>
      <h3>Bem vindo usuário(a): </h3>
      <div className={styles.links}>
        <NavLink activeClassName={styles.active} to="/login/usuario">
          {userFirstName ? userFirstName : ""}
        </NavLink>

        <NavLink activeClassName={styles.active} to="/login/usuario/perfil">
          Meu Perfil
        </NavLink>

        {userFirstName && (
          <div className={styles.link} onClick={userLogout}>
            Sair
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
