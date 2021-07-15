import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from "./UserForm";
import Dashboard from "../../Layout/Dashboard";

const User = () => {
  return (
    <div>
      <Dashboard />
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </div>
  );
};

export default User;
