import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPhoto from "./UserPhoto";

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserPhoto />} />
      </Routes>
    </div>
  );
};

export default User;
