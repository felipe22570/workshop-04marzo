import React from "react";
import { Link } from "react-router-dom";
import salir from "../assets/images/eliminar.png"
import "../styles/Form.css"
import { useDispatch } from "react-redux";
import { useForm } from "../helpers/useForm";
import { registroEmailPasswordNombre } from "../Redux/actions/actionsRegistro";


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
         <Link className="equis" to="/"><img src={salir} width={15}/></Link>

            <form className="formulario" id="formulario" onSubmit={handleSubmit}>
               <h2 className="fieldset">Registrate</h2>
               <div>
                  <label className="label">Nombre</label>
                  <input
                     className="input"
                     name="nombre"
                     value={nombre}
                     onChange={handleInputChange}
                     placeholder="Nombres"
                  />
               </div>
               <div>
                  <label className="label">Correo</label>
                  <input
                     className="input"
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleInputChange}
                     placeholder="Correo"
                  />
               </div>

               <div>
                  <label className="label">Contraseña</label>
                  <input
                     className="input"
                     type="password"
                     name="contraseña"
                     value={contraseña}
                     onChange={handleInputChange}
                     placeholder="Contraseña"
                  />
               </div>

               <div>
                  <button className="btn" type="submit">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Registro;
