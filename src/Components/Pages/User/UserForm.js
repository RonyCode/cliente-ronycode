import React from "react";
import styles from "./UserForm.module.css";
import { UserContext } from "../../UserStorage";
import { Link } from "react-router-dom";

const UserForm = () => {
  const { username } = React.useContext(UserContext);

  return (
    <div className={styles.user_form}>
      <div className={styles.container}>
        <h3 className={styles.tittle}>Usuario(a): {username}</h3>

        <Link className={styles.icon} to="/login/aluno/lista">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/h72v2p3/contactlist-theuser-802.png"
            alt="contactlist-theuser-802"
            border="0"
          />
          <p className={styles.icon_name}>Lista de alunos</p>
        </Link>

        <Link className={styles.icon} to="/login/aluno/adicionar">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/7RR0p9Z/adduser-1103.png"
            alt="adduser-1103"
            border="0"
          />
          <p className={styles.icon_name}>Adicionar aluno</p>
        </Link>

        <Link className={styles.icon} to="/login/aluno/lista">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/18FGXvP/list-notes-930.png"
            alt="list-notes-930"
            border="0"
          />
          <p className={styles.icon_name}>Notas Aluno</p>
        </Link>

        <Link className={styles.icon} to="/login/aluno/lista">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/bNCqztB/filesystems-thefolder-636.png"
            alt="filesystems-thefolder-636"
            border="0"
          />
          <p className={styles.icon_name}>Editar/Remover aluno</p>
        </Link>

        <Link className={styles.icon} to="/login/usuario/eventos">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/ryy0fRj/calendar-tasks-1030.png"
            alt="calendar-tasks-1030"
            border="0"
          />
          <p className={styles.icon_name}>Eventos da semana</p>
        </Link>

        <Link className={styles.icon} to="/login/usuario/eventos">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/7bGjKrf/magnifier-search-1034.png"
            alt="magnifier-search-1034"
            border="0"
          />
          <p className={styles.icon_name}>Buscar Aluno</p>
        </Link>

        <Link className={styles.icon} to="/login/aluno/lista">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/sw579BW/education-the-Board-876.png"
            alt="education-the-Board-876"
            border="0"
          />
          <p className={styles.icon_name}>Planejamento Semanal </p>
        </Link>

        <Link className={styles.icon} to="/login/aluno/lista">
          <img
            className={styles.img_icon}
            src="https://i.ibb.co/M92p5T3/wallet-1288.png"
            alt="wallet-1288"
            border="0"
          />
          <p className={styles.icon_name}>Financeiro Aluno</p>
        </Link>
      </div>
    </div>
  );
};

export default UserForm;
