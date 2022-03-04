import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Agregar from "../components/AgregarProduct";
import FormularioProduc from "../components/FormularioProduc";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Agregar" element={<FormularioProduc />} />
        {/* <Route path="/AgregarProd" element={<Agregar/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
