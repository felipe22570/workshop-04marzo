import React from "react";
import { useSelector } from "react-redux";
import "../styles/list.css";
const List = () => {
   const { products } = useSelector((store) => store.producto);

   //    const { nombre, codigo, precio, imagen, talla } = products;

   return (
      <div>
         <table className="tabla">
            <thead>
               <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Imagen</th>
                  <th>Talla</th>
                  <th>Precio</th>

                  <th></th>
               </tr>
            </thead>

            <tbody className="bodyt">
               {products.map((element, index) => (
                  <tr key={index}>
                     <td>{element.codigo}</td>
                     <td><img className="imagen"  width={80} height={80} src={element.imagen}/></td>
                     <td>{element.nombre}</td>
                     <td>{element.talla}</td>
                     <td>{element.precio}</td>
                     <td>
                        <button className="button">Eliminar</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default List;
