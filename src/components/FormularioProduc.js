import React from 'react'
import "../styles/Form.css"
const FormularioProduc = () => {
  return (
    <div>
        <div>
           <form id="formulario" onSubmit="">
           <h2 id="fieldset">Registra un Producto</h2>
               <div>
                   <label>Código</label>
                   <input name="codigo" onChange=""  value=""/>
               </div>
               <div>
                   <label>Nombre</label>
                   <input  type="text" name="nombre" onChange=""  value="" />
               </div>
            
               <div>
                   <label>Precio</label>
                   <input  name="precio" value=""/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input  type="file" name="imagen" onChange=""  value=""/>
                    
               </div>

               <label for="talla">Talla</label>
               <select name="talla">

                   <option>S</option>
                   <option>M</option>
                   <option>L</option>
                   <option>XL</option>

               </select>
               <div>
                   <button id="btn" onClick="">Enviar</button> 
               </div>
           </form>
        </div>


    </div>
  )
}

export default FormularioProduc