export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS'
export const SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST'

export const SEARCH_REVIEWED_PRODUCT_SUCCESS = 'SEARCH_REVIEWED_PRODUCT_SUCCESS'
export const SEARCH_REVIEWED_PRODUCT_REQUEST = 'SEARCH_REVIEWED_PRODUCT_REQUEST'

export const ADD_PRODUCT_TO_REVIEW_CART = 'ADD_PRODUCT_TO_REVIEW_CART'

export const handleSearchProduct = ( search ) => {
    return {
        type: SEARCH_PRODUCT_REQUEST,
        searchKey: search
    }
}

export const handleSearchReviewedProduct = ( searchKey ) => {
    return {
        type: SEARCH_REVIEWED_PRODUCT_REQUEST,
        searchKey
    }
}

export const addProductReviewCart = (productToReview) => {
    return {
        type: ADD_PRODUCT_TO_REVIEW_CART,
        productToReview
    }
}
