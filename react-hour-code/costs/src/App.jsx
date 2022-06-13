import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Companhia from "./components/pages/Companhia";
import NovoProjeto from "./components/pages/NovoProjeto";
import Projetos from "./components/pages/Projetos";
import Project from "./components/pages/Project";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="minHeight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/companhia" element={<Companhia />} />
            <Route path="/novoprojeto" element={<NovoProjeto />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
