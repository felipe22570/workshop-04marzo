import { typesProducts } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.add:
            return {
               products: [action.payload]
            }

        case typesProducts.list:
            return {
                products: [...action.payload]

            }

        case typesProducts.edit:
            return {
                ...state
            }

        case typesProducts.delete:
            return {
               products: state.products.filter(pro => pro.codigo !== action.payload)
            }

        default:
            return state;
    }
}