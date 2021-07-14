import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import HomeStudent from "./HomeStudent";
import ListStudents from "./ListStudents";
import SelectStudent from "./SelectStudent";
import AddStudent from "./AddStudent";
import styles from "./Student.module.css";
import Dashboard from "../../Layout/Dashboard";
import { UserContext } from "../../UserStorage";

const Student = () => {
  const { brand } = React.useContext(UserContext);

  return (
    <div>
      <Dashboard />
      <div className={styles.student}>
        <div className={styles.brand}>
          {brand && (
            <div className={styles.link}>
              <NavLink activeClassName={styles.active} to="/login/usuario">
                Usuario
              </NavLink>
            </div>
          )}
          {brand && (
            <div className={styles.link}>
              <NavLink activeClassName={styles.active} to="/login/usuario">
                {brand}
              </NavLink>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<HomeStudent />} />
          <Route path="lista" element={<ListStudents />} />{" "}
          <Route path="id/:id" element={<SelectStudent />} />
          <Route path="adicionar" element={<AddStudent />} />
        </Routes>
      </div>
    </div>
  );
};

export default Student;
