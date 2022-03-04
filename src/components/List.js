import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyn } from "../redux/actions/actionProducts";
import "../styles/list.css";
import EditarProd from "./EditarProds";

const List = () => {
   const dispatch = useDispatch();
   const { products } = useSelector((store) => store.producto);
   const [modal, setModal] = useState(false);
   const [enviarDatosModal, setEnviarDatosModal] = useState([]);

   //    const { nombre, codigo, precio, imagen, talla } = products;

   const editar = (codigo) => {
      console.log(codigo);
      const traerElProducto = products.find((p) => p.codigo === codigo);

      setModal(true);
      setEnviarDatosModal(traerElProducto);
   };

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
                     <td>
                        <img className="imagen" width={80} height={80} src={element.imagen} />
                     </td>
                     <td>{element.nombre}</td>
                     <td>{element.talla}</td>
                     <td>{element.precio}</td>
                     <td>
                        <button
                           onClick={() => editar(element.codigo)}
                           className="button"
                           style={{ marginRight: "10%" }}
                        >
                           Editar
                        </button>
                        <button
                           className="button"
                           onClick={() => dispatch(deleteAsyn(element.codigo))}
                        >
                           Eliminar
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         {modal === true ? <EditarProd modal={enviarDatosModal} /> : ""}
      </div>
   );
};

export default List;
