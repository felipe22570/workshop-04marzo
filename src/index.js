import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import AppRouter from "./routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioProduc from "./components/FormularioProduc";
import Principal from "./components/Principal";
import Registro from "./components/Registro";
ReactDOM.render(
   <React.StrictMode>
      <Principal/>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
