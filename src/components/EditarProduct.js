import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { editAsyn } from "../redux/actions/actionProducts";

const EditarProd = ({ modal }) => {
   console.log(modal);
   const dispatch = useDispatch();
   const [show, setShow] = useState(true);
   const handleClose = () => setShow(false);

   const [values, handleInputChange, reset] = useForm({
      nombre: modal.nombre,
      codigo: modal.codigo,
      precio: modal.precio,
   });
   const { nombre, codigo, precio } = values;

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editAsyn(codigo, values));

      reset();
   };

   return (
      <div>
         <>
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Editar Planta</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de la Planta</Form.Label>
                        <Form.Control
                           type="text"
                           name="nombre"
                           placeholder="Enter nombre"
                           value={nombre}
                           onChange={handleInputChange}
                        />

                        <Form.Label>Codigo</Form.Label>
                        <Form.Control
                           type="text"
                           name="codigo"
                           placeholder="El codigo contine dos letras y 3 numeros"
                           value={codigo}
                           onChange={handleInputChange}
                        />

                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                           type="text"
                           name="precio"
                           placeholder="El precio en Pesos Colombiano"
                           value={precio}
                           onChange={handleInputChange}
                        />
                     </Form.Group>

                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button type="submit" variant="primary" onClick={handleClose}>
                        Save Changes
                     </Button>
                  </Form>
               </Modal.Body>
            </Modal>
         </>
      </div>
   );
};

export default EditarProd;
