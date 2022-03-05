import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginEmailPassword, loginGoogle } from "../Redux/actions/actionsLoginAsync";
import * as Yup from "yup";
import { ButtonGoogle, ContLogin } from "../styles/loginStyle";


const Login = () => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: Yup.object({
         email: Yup.string().email().required(),
         password: Yup.string().required(),
      }),
      onSubmit: (data) => {
         const { email, password } = data;
         dispatch(loginEmailPassword(email, password));
      },
   });

   const handleGoogle = () => {
      dispatch(loginGoogle());
   };

   return (
      <ContLogin>
         <h1>Login</h1>
         <form onSubmit={formik.handleSubmit}>
            <input
               type="email"
               name="email"
               onChange={formik.handleChange}
               id=""
               placeholder="Ingresa tu usuario"
            />
            <input
               type="password"
               name="password"
               onChange={formik.handleChange}
               id=""
               placeholder="Ingresa tu contraseña"
            />
            <button type="submit">Enviar</button>
         </form>
         <ButtonGoogle onClick={handleGoogle}>
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1646412788/5847f9cbcef1014c0b5e48c8_ahn6z7.png"
               alt=""
            />
            Ingresa con google
         </ButtonGoogle>
         <Link to="/registro">Registrarse con correo</Link>
      </ContLogin>

     
   );
};

export default Login;
