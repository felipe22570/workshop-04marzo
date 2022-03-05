import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../helpers/useForm";
import { listAsynProducts, listSearchAsyn } from "../Redux/actions/actionProducts";
import salir from "../assets/images/eliminar.png"

import "../styles/styles.css"
const Search = () => {
   const dispatch = useDispatch();

   const { search } = useSelector((store) => store.producto);
   console.log(search);

   const [values, handleInputChange] = useForm({
      searchText: "",
   });

   const { searchText } = values;

   const handleSearch = (e) => {
      e.preventDefault();
      dispatch(listSearchAsyn(searchText));
   };

   useEffect(() => {
      dispatch(listAsynProducts());
   }, []);

   return (
      <div>
          <Link className="equis" to="/"><img src={salir} width={15}/></Link>

          <div className="m-auto">
          <div className="m-auto">
         <h1 >Buscar</h1>
         <hr />
         </div>
         <div>
            <form className="form" onSubmit={handleSearch}>
               <div className="busqueda">
               <input
                  type="text"
                  placeholder="Buscar"
                  className="form-control search"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={handleInputChange}
               />
            </div>
   

               <button type="submit" className="btn m-1  btn-outline-primary">
                  Buscar
               </button>
            </form>
         </div>
         </div>

         
            <div className="m-auto">

            
            <h4 className="nose"> Resultados </h4>
            <hr />
            <div className="col-7 ">
            {search ? (
               search.map((product) => (
                  <div key={product.codigo}>
                     <p>{product.nombre}</p>
                     <img src={product.imagen} alt="" />
                     <p>{product.precio}</p>
                  </div>
               ))
            ) : (
               <p>Busca tu prenda favorita</p>
            
            )}
            </div>
            </div>
         
      </div>
   );
};

export default Search;
