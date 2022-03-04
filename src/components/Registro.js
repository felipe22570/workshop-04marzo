import React from "react";
import { Link } from "react-router-dom";
import salir from "../assets/images/eliminar.png"
import "../styles/Form.css"
const Registro = () => {
   return (
      <div>
         <div>
         <Link className="equis" to="/"><img src={salir} width={15}/></Link>
            <form className="formulario" onSubmit="">
               <h2 className="fieldset">Registrate</h2>
               <div>
                  <label className="label">Nombre</label>
                  <input  className="input" name="nombre" onChange="" value="" placeholder="Nombres" />
               </div>
               <div>
                  <label className="label">Apellido</label>
                  <input className="input" type="text" name="apellido" onChange="" value="" placeholder="Apellidos" />
               </div>

               <div>
                  <label className="label">Correo</label>
                  <input className="input" type="correo" name="correo" value="" placeholder="Correo" />
               </div>

               <div>
                  <label className="label">Contraseña</label>
                  <input className="input" type="password" name="contraseña" value="" placeholder="Contraseña" />
               </div>
               <div>
                  <label className="label">Imagen</label>
                  <input  className="input"type="file" name="imagen" onChange="" value="" />
               </div>

               <div>
                  <button className="btn" onClick="">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Registro;
