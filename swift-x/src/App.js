import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginSignup from "./components/LoginSignup";
import Services from "./components/Services";

import "./styles/App.scss";
import "./styles/header.scss";
function App() {
  return (
    <Router>
      <Header />
      <div className="hidden"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
