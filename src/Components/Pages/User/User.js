import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import styles from "./User.module.css";
import UserForm from "./UserForm";
import Dashboard from "../../Layout/Dashboard";

const User = () => {
  return (
    <div>
      <Dashboard />
      <div className={styles.user}>
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="perfil" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default User;
