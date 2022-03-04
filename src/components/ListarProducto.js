import React, { useEffect, useState } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsyn } from "../Redux/actions/actionProducts";
import EditarProd from "./EditarProduct";

const ListarProd = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const { producto } = useSelector((store) => store.producto);

  console.log(producto);

  useEffect(() => {}, [producto]);

  const editar = (codigo) => {
    const traerProducto = producto.find((t) => t.codigo === codigo);

    setModal(true);
    setEnviarDatosModal(traerProducto);
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {producto.map((p, index) => (
            <tr key={index}>
              <td>{p.codigo}</td>
              <td>{p.nombre}</td>

              <td>{p.descripcion}</td>
              <td>{p.precio}</td>

              <Button>
                <Image
                  width={20}
                  src="https://res.cloudinary.com/danimel/image/upload/v1646015685/edit_nh7sll.png"
                  onClick={() => editar(p.codigo)}
                />
              </Button>
              <Button>
                <Image
                  width={20}
                  src="https://res.cloudinary.com/danimel/image/upload/v1646015682/trash_2_vcdean.png"
                  onClick={() => dispatch(deleteAsyn(p.codigo))}
                />
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
      {modal === true ? <EditarProd modal={enviarDatosModal} /> : ""}
    </div>
  );
};

export default ListarProd;
