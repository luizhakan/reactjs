import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CadastrarProfissional from "./pages/CadastrarProfissional.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cadastrar-profissional",
    element: <CadastrarProfissional />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
