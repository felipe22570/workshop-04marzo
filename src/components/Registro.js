import React from "react";
import "../styles/form.css";
const Registro = () => {
   return (
      <div>
         <div>
            <form id="formulario" onSubmit="">
               <h2 id="fieldset">Registrate</h2>
               <div>
                  <label>Nombre</label>
                  <input name="nombre" onChange="" value="" placeholder="Nombres" />
               </div>
               <div>
                  <label>Apellido</label>
                  <input type="text" name="apellido" onChange="" value="" placeholder="Apellidos" />
               </div>

               <div>
                  <label>Correo</label>
                  <input type="correo" name="correo" value="" placeholder="Correo" />
               </div>

               <div>
                  <label>Contraseña</label>
                  <input type="password" name="contraseña" value="" placeholder="Contraseña" />
               </div>
               <div>
                  <label>Imagen</label>
                  <input type="file" name="imagen" onChange="" value="" />
               </div>

               <div>
                  <button id="btn" onClick="">
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Registro;
