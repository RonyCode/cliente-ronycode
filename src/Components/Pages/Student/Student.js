import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeStudent from "./HomeStudent";
import ListStudents from "./ListStudents";
import SelectStudent from "./SelectStudent";
import AddStudent from "./AddStudent";
import styles from "./Student.module.css";
import Dashboard from "../../Layout/Dashboard";

const Student = () => {
  return (
    <div>
      <Dashboard />
      <div className={styles.student}>
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
