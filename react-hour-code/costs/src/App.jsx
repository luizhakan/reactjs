import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Contato from "./components/pages/Contato";
import Companhia from "./components/pages/Companhia";
import NovoProjeto from "./components/pages/NovoProjeto";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Projetos from "./components/pages/Projetos";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="minHeight">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contato" element={<Contato />} />
            <Route exact path="/companhia" element={<Companhia />} />
            <Route exact path="/novoprojeto" element={<NovoProjeto />} />
            <Route exact path="/projetos" element={<Projetos />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
