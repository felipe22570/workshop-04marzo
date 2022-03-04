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
import { db } from "../../firebase/firebaseConfig";
import { typesProducts } from "../types/types";

// Editar

export const editAsyn = (codigo, producto) => {
  return async (dispatch) => {
    const traerCollection = collection(db, "productos");
    const q = query(traerCollection, where("codigo", "==", codigo));
    const datosQ = await getDocs(q);
    let id;
    datosQ.forEach(async (docu) => {
      id = docu.id;
    });
    console.log(id);

    const docRef = doc(db, "productos", id);
    await updateDoc(docRef, producto).then(() => listAsynProducts());
  };
};

export const editSyn = (codigo, product) => {
  return {
    type: typesProducts.edit,
    payload: product,
  };
};

// Listar

export const listAsynProducts = () => {
  return async (dispatch) => {
    const traerDatos = await getDocs(collection(db, "productos"));
    const productos = [];
    traerDatos.forEach((doc) => {
      productos.push({
        ...doc.data(),
      });
    });
    dispatch(listProductSyn(productos));
  };
};

export const listProductSyn = (productos) => {
  return {
    type: typesProducts.list,
    payload: productos,
  };
};

// Eliminar

export const deleteAsyn = (codigo) => {
  return async (dispatch) => {
    const traerCollection = collection(db, "productos");
    const q = query(traerCollection, where("codigo", "==", codigo));
    const datosQ = await getDocs(q);
    datosQ.forEach((docu) => {
      deleteDoc(doc(db, "productos", docu.id));
    });
    dispatch(deleteSyn(codigo));
  };
};

export const deleteSyn = (codigo) => {
  return {
    type: typesProducts.delete,
    payload: codigo,
  };
};

// Agregar nuevo producto

export const addAsyn = (newProduct) => {
  return (dispatch) => {
    addDoc(collection(db, "productos"), newProduct)
      .then((resp) => {
        dispatch(addSyn(newProduct));
        dispatch(listAsynProducts());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addSyn = (products) => {
  return {
    type: typesProducts.add,
    payload: products,
  };
};
