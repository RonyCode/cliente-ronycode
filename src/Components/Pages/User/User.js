import React from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default User;
