import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Offer />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/regulamin" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
