import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FormularioProduc = () => {

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  const { producto } = useSelector((store) => store.producto);

  console.log(producto);

  useEffect(() => {}, [producto]);

  return (
    <div>
      <div>
        <form id="formulario" >
          <h2 id="fieldset">Registra un Pais</h2>
          <div>
            <label>Codigo</label>
            <input name="codigo" value="x" />
          </div>
          <div>
            <label>Nombre</label>
            <input type="text" name="nombre" value="x" />
          </div>

          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <div>
            <label>Precio</label>
            <input name="precio" value="x" />
          </div>
          <div>
            <label>Imagen</label>
            <input type="file" name="imagen" value="x" />
          </div>
          <div>
            <button id="btn" >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioProduc;
