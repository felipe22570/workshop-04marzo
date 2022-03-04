import React from 'react'

const FormularioProduc = () => {
  return (
    <div>
        <div>
           <form id="formulario" onSubmit="">
           <h2 id="fieldset">Registra un Pais</h2>
               <div>
                   <label>Codigo</label>
                   <input name="codigo" onChange=""  value=""/>
               </div>
               <div>
                   <label>Nombre</label>
                   <input  type="text" name="nombre"onChange=""  value="" />
               </div>
              
               <select>
                   <option>S</option>
                   <option>M</option>
                   <option>L</option>
                   <option>XL</option>

               </select>
               <div>
                   <label>Precio</label>
                   <input  name="precio" value=""/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input  type="file" name="imagen" onChange=""  value=""/>
                    
               </div>
               <div>
                   <button id="btn" onClick="">Enviar</button> 
               </div>
           </form>
        </div>


    </div>
  )
}

export default FormularioProduc