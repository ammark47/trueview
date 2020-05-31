import { SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCT_SUCCESS } from "../actions/products"

const initialState = {}

export const searchProductsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                loadingProducts: true
            }
        case SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loadingProducts: false,
                allProducts: action.allProducts
            }
        default:
            return state
    }
}