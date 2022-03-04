import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../helpers/useForm";
import { listAsynProducts, listSearchAsyn } from "../redux/actions/actionProducts";

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
         <h1>Buscar</h1>
         <hr />

         <div>
            <form onSubmit={handleSearch}>
               <input
                  type="text"
                  placeholder="Buscar"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={handleInputChange}
               />

               <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                  Buscar
               </button>
            </form>
         </div>

         <div className="col-7">
            <h4> Resultados </h4>
            <hr />

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
   );
};

export default Search;
