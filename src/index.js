import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
// import FormularioProduc from "./components/FormularioProduc";
ReactDOM.render(
   <Provider store={store}>
      <AppRouter />
   </Provider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
