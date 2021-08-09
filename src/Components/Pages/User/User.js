import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./User.module.css";
import UserForm from "./UserForm";
import Dashboard from "../../Layout/Dashboard";
import UserProfile from "./UserProfile";

const User = () => {
  return (
    <div className={styles.user}>
      <Dashboard />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/perfil" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default User;
