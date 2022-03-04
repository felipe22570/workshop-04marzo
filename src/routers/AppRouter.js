import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PruListar from '../components/PruListar'

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/listar" element={<PruListar />} />
         </Routes>
      </BrowserRouter>
   )
};

export default AppRouter;
