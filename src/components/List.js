import React from 'react'
import "../styles/list.css"
const List = () => {
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



                <tbody className='bodyt'>

                    <tr>
                        <td>codigo</td>
                        <td className='imagen'>imagen</td>
                        <td>nombre</td>
                        <td>talla</td>
                        <td>precio</td>
                        <td><button className='button'>Eliminar</button></td>
                    </tr>




                </tbody>
        

            </table>
        </div>
    )
}

export default List