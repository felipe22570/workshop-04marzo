import {
   addDoc,
   collection,
   deleteDoc,
   doc,
   getDocs,
   query,
   updateDoc,
   where,
} from "firebase/firestore";
import { db } from "../../src/firebase/firebaseConfig";

export const agregarProductoAsync = (newProducto) => {
   return (dispatch) => {
      addDoc(collection(db, "productos"), newProducto)
         .then((resp) => {
            console.log(resp);
            // Falta disparo de función sincrónica y de listar
         })
         .catch((error) => {
            console.log(error);
         });
   };
};

export const listarProductoAsync = () => {
   return async (dispatch) => {
      const colect = await getDocs(collection(db, "productos"));
      const listaProductos = [];
      colect.forEach((element) => {
         listaProductos.push({
            ...element.data(),
         });
      });
      //Falta disparo de función sincrónica
   };
};

export const actualizarProductoAsync = (codigo, producto) => {
   return async (dispatch) => {
      const editColect = collection(db, "productos");
      const q = query(editColect, where("codigo", "==", codigo));

      const datos = await getDocs(q);
      let id;
      datos.forEach(async (document) => {
         id = document.id;
      });

      const datoSelect = doc(db, "productos", id);
      await updateDoc(datoSelect, producto).then(() => listarProductoAsync());
   };
};

export const eliminarProductoAsync = (codigo) => {
   return async (dispatch) => {
      const delColect = collection(db, "productos");
      const dato = query(delColect, where("codigo", "==", codigo));

      const coleccion = await getDocs(dato);
      coleccion.forEach((element) => {
         deleteDoc(doc(db, "productos", element.id));
      });
      // Falta disparo de función sincrónica
   };
};
