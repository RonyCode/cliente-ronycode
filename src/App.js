import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { UserStorage } from "./Components/UserStorage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
            </Routes>
          </section>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
