import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <NavLink className={styles.logo_img} to="/" arial-label="Educar - Home">
          <img src="../../Assets/novo-logo-composto.png" width="1080" alt="" />
        </NavLink>
        <nav className={styles.navlink}>
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
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
