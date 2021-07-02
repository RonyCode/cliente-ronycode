import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { UserContext } from "../UserStorage";

const Header = () => {
  const { login, data } = useContext(UserContext);
  return (
    <div>
      <header className={styles.header}>
        <NavLink className={styles.logo_img} to="/" arial-label="Educar - Home">
          <img src="../../Assets/novo-logo-composto.png" width="1080" alt="" />
        </NavLink>
        <nav className={styles.navlink}>
          {login === true ? (
            <NavLink className={styles.link} to="/login/dashboard">
              {data}
            </NavLink>
          ) : (
            <NavLink className={styles.link} to="/login">
              Login
            </NavLink>
          )}

          <NavLink className={styles.link} to="/login">
            Sobre
          </NavLink>

          <NavLink className={styles.link} to="/login">
            Contato
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
