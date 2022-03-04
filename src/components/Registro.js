import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../helpers/useForm";
import { registroEmailPasswordNombre } from "../redux/actions/actionsRegistro";
import "../styles/form.css";
const Registro = () => {
   const dispatch = useDispatch();

   let [values, handleInputChange, reset] = useForm({
      nombre: "",
      correo: "",
      contraseña: "",
   });
   const { nombre, email, contraseña } = values;

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(registroEmailPasswordNombre(email, contraseña, nombre));

      reset();
   };

   return (
      <div>
         <div>
            <form id="formulario" onSubmit={handleSubmit}>
               <h2 id="fieldset">Registrate</h2>
               <div>
                  <label>Nombre</label>
                  <input
                     name="nombre"
                     value={nombre}
                     onChange={handleInputChange}
                     placeholder="Nombres"
                  />
               </div>
               <div>
                  <label>Correo</label>
                  <input
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleInputChange}
                     placeholder="Correo"
                  />
               </div>

               <div>
                  <label>Contraseña</label>
                  <input
                     type="password"
                     name="contraseña"
                     value={contraseña}
                     onChange={handleInputChange}
                     placeholder="Contraseña"
                  />
               </div>

               <div>
                  <button id="btn" type="submit">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Registro;
