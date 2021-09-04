import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { UserStorage } from "./Components/UserStorage";
import Contact from "./Components/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <header className="header">
            <Header />
          </header>
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="contato" element={<Contact />} />
            </Routes>
          </section>
          <footer className="footer">
            <Footer />
          </footer>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
