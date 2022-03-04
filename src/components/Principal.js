import React from 'react'
import Buscador from './Buscador'
import Footer from './Footer'
import FormularioProduc from './FormularioProduc'
import Header from './Header'
import List from './List'

const Principal = () => {
  return (
    <div>
        <Header/>
    <FormularioProduc/>
   <List/>
    {/* <Footer/> */}

    </div>
  )
}

export default Principal