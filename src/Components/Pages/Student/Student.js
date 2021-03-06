import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomeStudent from "./HomeStudent";
import ListStudents from "./ListStudents";
import SelectStudent from "./SelectStudent";
import SaveStudent from "./SaveStudent";
import styles from "./Student.module.css";
import Dashboard from "../../Layout/Dashboard";
import { UserContext } from "../../UserStorage";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";
import StudentGrade from "./StudentGrade";
import FinancialStudent from "./FinancialStudent";
import StudentReport from "./StudentReport";

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
          <Route path="lista" element={<ListStudents />} />{" "}
          <Route path="id/:id" element={<SelectStudent />} />
          <Route path="editar/id/:id" element={<SaveStudent />} />
          <Route path="adicionar" element={<SaveStudent />} />
          <Route path="deletar/id/:id" element={<DeleteStudent />} />
          <Route path="grade/" element={<StudentGrade />} />
          <Route path="planejamento/" element={<StudentReport />} />
          <Route path="financeiro/" element={<FinancialStudent />} />
        </Routes>
      </div>
    </div>
  );
};

export default Student;
