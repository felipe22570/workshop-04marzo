import { typesProducts } from "../types/types";

const initialState = {
    productos: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.add:
            return {
               productos: [action.payload]
            }

        case typesProducts.list:
            return {
                productos: [...action.payload]

            }

        case typesProducts.edit:
            return {
                ...state
            }

        case typesProducts.delete:
            return {
               productos: state.productos.filter(pro => pro.codigo !== action.payload)
            }

        default:
            return state;
    }
}