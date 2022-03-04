import React from "react";
import { useDispatch } from "react-redux";
import { registroEmailPasswordNombre } from "../redux/actions/actionsRegistro";
import "../styles/Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Registro = () => {
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         nombre: "",
         email: "",
         contraseña: "",
      },
      validationSchema: Yup.object({
         nombre: Yup.string().required(),
         email: Yup.string().email().required(),
         contraseña: Yup.string().required(),
      }),
      onSubmit: (data) => {
         const { nombre, email, contraseña } = data;
         dispatch(registroEmailPasswordNombre(email, contraseña, nombre));
      },
   });

   return (
      <div>
         <div>
            <form className="formulario" id="formulario" onSubmit={formik.handleSubmit}>
               <h2 className="fieldset">Registrate</h2>
               <div>
                  <label className="label">Nombre</label>
                  <input
                     className="input"
                     name="nombre"
                     onChange={formik.handleChange}
                     placeholder="Nombres"
                  />
               </div>
               <div>
                  <label className="label">Correo</label>
                  <input
                     className="input"
                     type="email"
                     name="email"
                     onChange={formik.handleChange}
                     placeholder="Correo"
                  />
               </div>

               <div>
                  <label className="label">Contraseña</label>
                  <input
                     className="input"
                     type="password"
                     name="contraseña"
                     onChange={formik.handleChange}
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
