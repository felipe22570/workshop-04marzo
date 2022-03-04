import React from "react";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../redux/actions/actionsLoginAsync";

import { ButtonGoogle, ContLogin } from "../styles/loginStyle";

const Login = () => {
   const dispatch = useDispatch();
   const handleGoogle = () => {
      dispatch(loginGoogle());
   };

   return (
      <ContLogin>
         <h1>Login</h1>
         <form>
            <input type="email" name="" id="" placeholder="Ingresa tu usuario" />
            <input type="password" name="" id="" placeholder="Ingresa tu contraseña" />
            <button type="submit">Enviar</button>
         </form>
         <ButtonGoogle onClick={handleGoogle}>
            <img
               src="https://res.cloudinary.com/dcane9asx/image/upload/v1646412788/5847f9cbcef1014c0b5e48c8_ahn6z7.png"
               alt=""
            />
            Ingresa con google
         </ButtonGoogle>
      </ContLogin>
   );
};

export default Login;
