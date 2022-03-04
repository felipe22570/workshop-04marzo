import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { addAsyn } from '../Redux/actions/actionProducts'
import { fileUpload } from '../helpers/FileUploads';

const Agregar = () => {

    const dispatch = useDispatch()

    let [values, handleInputChange, reset] = useForm({
       nombre: '',
       codigo: '',
       precio: '',
       imagen: ''
    })

    const { nombre, codigo, precio, imagen } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addAsyn(values))
        console.log(nombre, codigo, precio, imagen)
        reset()
    }
    const handleFileChange =(e)=>{
        const file = e.target.files[0]
        fileUpload(file)
            .then(resp =>{
               values.foto = resp
                console.log(resp)
            })
            .catch(error =>{
                console.log(error.message)
            })
    }



    return (
        <div>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Ingresar nombre" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" placeholder="El codigo contine dos letras y 3 numeros" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" placeholder="El precio en Pesos Colombiano" value={precio} onChange={handleInputChange} />
                
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imagen" placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button type="submit">
                    <Image width={40} src='https://cdn-icons-png.flaticon.com/512/117/117885.png' />
                </Button>
             
            </Form>
        
        </div>
    );
};

export default Agregar;