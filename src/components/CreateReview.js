import React from 'react'
import { useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { handleSearchProduct } from '../store/actions/products'
import { useDispatch } from 'react-redux'
import { CreateProduct } from './CreateProduct'


export const CreateReview = () => {
    const user = useSelector(state => state.postgres_user)
    const products = useSelector(state => state.searchProductsReducer.allProducts)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()

        console.log(e.target.value)
        dispatch(handleSearchProduct(e.target.value))
        
    }

    return (
        <>
            <TextField id="product-name" label="Outlined" variant="outlined" onChange={handleChange}/>
            {products && products.map(product => 
                <CreateProduct product key={product.itemId}/>
            )}
        </>
    )
}