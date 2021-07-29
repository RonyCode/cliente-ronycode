import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "./UserForm";
import Dashboard from "../../Layout/Dashboard";
import UserProfile from "./UserProfile";

const User = () => {
  return (
    <div>
      <Dashboard />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/perfil" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default User;
