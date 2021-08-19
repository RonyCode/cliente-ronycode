import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";
import LoginRecover from "./LoginRecover";
import LoginReset from "./LoginReset";
import Student from "../Student/Student";
import Dashboard from "../../Layout/Dashboard";
import User from "../User/User";
import ProtectedRoute from "../../../Helper/ProtectedRoute/ProtectedRoute";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="cadastrar" element={<LoginRegister />} />
        <Route path="recuperar" element={<LoginRecover />} />
        <Route path="resetar" element={<LoginReset />} />
        <Route path="aluno/*" element={<Student />} />
        <ProtectedRoute path="usuario/*" element={<User />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Login;
