import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import User from "./Components/Pages/User/User";
import Login from "./Components/Pages/Login/Login";
import Header from "./Components/Layout/Header";
import Logout from "./Helper/Logout";
import Footer from "./Components/Layout/Footer";
import { UserStorage } from "./Components/UserStorage";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <BrowserRouter>
          <Header />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="usuario/*" element={<User />} />
              <Route path="sair" element={<Logout />} />
            </Routes>
          </section>
          <Footer />
        </BrowserRouter>
      </UserStorage>
    </div>
  );
}

export default App;
