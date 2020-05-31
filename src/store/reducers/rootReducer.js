import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { searchProductsReducer } from './searchProducts'

export default combineReducers({
    authReducer,
    searchProductsReducer
})