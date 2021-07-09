import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { UserContext } from "../UserStorage";

const Header = () => {
  const { login, username } = useContext(UserContext);
  return (
    <div>
      <header className={styles.header}>
        <NavLink className={styles.logo_img} to="/" arial-label="Educar - Home">
          <img src="../../Assets/novo-logo-composto.png" width="1080" alt="" />
        </NavLink>
        <ul className={styles.navlink}>
          {login === true ? (
            <li className={styles.link}>
              <NavLink activeClassName={styles.active} to="/login/dashboard">
                {username}
              </NavLink>
            </li>
          ) : (
            <li className={styles.link}>
              <NavLink activeClassName={styles.active} to="/login">
                Login
              </NavLink>
            </li>
          )}
          <li className={styles.link}>
            <NavLink activeClassName={styles.active} to="/home">
              Sobre
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink activeClassName={styles.active} to="/usuario">
              Contato
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
