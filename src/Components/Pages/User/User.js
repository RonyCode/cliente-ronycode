import React from "react";
import { Route, Routes } from "react-router-dom";
import UserForm from './UserForm';

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserForm/>} />
      </Routes>
    </div>
  );
};

export default User;
