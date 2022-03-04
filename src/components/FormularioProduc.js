import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileUploas } from "../helpers/FileUploads";
import { useForm } from "../helpers/useForm";
import { addAsyn } from "../redux/actions/actionProducts";
import "../styles/form.css";

const FormularioProduc = () => {
   const dispatch = useDispatch();

   const { producto } = useSelector((store) => store.producto);

   let [values, handleInputChange, reset] = useForm({
      nombre: "",
      codigo: "",
      precio: "",
      imagen: "",
      talla: "",
   });
   const { nombre, codigo, precio, imagen, talla } = values;

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addAsyn(values));
      console.log(nombre, codigo, precio, imagen);
      reset();
   };
   const handleFileChange = (e) => {
      const file = e.target.files[0];
      fileUploas(file)
         .then((resp) => {
            values.imagen = resp;
            console.log(resp);
         })
         .catch((error) => {
            console.log(error.message);
         });
   };

   console.log(producto);

   useEffect(() => {}, [producto]);

   return (
      <div>
         <div>
            <form id="formulario" onSubmit={handleSubmit}>
               <h2 id="fieldset">Registra un Producto</h2>
               <div>
                  <label>Código</label>
                  <input name="codigo" value={codigo} onChange={handleInputChange} />
               </div>
               <div>
                  <label>Nombre</label>
                  <input type="text" name="nombre" value={nombre} onChange={handleInputChange} />
               </div>

               <div>
                  <label>Precio</label>
                  <input name="precio" value={precio} onChange={handleInputChange} />
               </div>
               <div>
                  <label>Imagen</label>
                  <input type="file" name="imagen" value={imagen} onChange={handleFileChange} />
               </div>

               <div>
                  <label for="talla">Talla</label>
                  <input type="text" name="talla" value={talla} onChange={handleInputChange} />
               </div>
               {/* <select name="talla" onChange={handleInputChange}>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
               </select> */}
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

export default FormularioProduc;
