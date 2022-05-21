import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Carrinho } from "./pages/Carrinho";
import { Catalogos } from "./pages/Catalogos";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/catalogo" element={<Catalogos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}
