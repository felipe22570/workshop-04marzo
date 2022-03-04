import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import Principal from "../components/Principal";
import Registro from "../components/Registro";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [checking, setChecking] = useState(false);

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            setIsLoggedIn(true);
         } else {
            setIsLoggedIn(false);
         }
         setChecking(false);
      });
   }, []);

   if (checking) {
      return <h1>Espere...</h1>;
   }

   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <PublicRoute isAuthenticated={isLoggedIn}>
                     <Login />
                  </PublicRoute>
               }
            />
              <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                    <Registro/>
                    </PublicRoute> 
                } />

            <Route path="/principal" element={
               <PrivateRoute isAuthenticated={isLoggedIn}>
                  <Principal />
               </PrivateRoute>
            } />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
