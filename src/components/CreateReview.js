import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Pagination from '@material-ui/lab/Pagination';
import { handleSearchProduct } from '../store/actions/products'
import { useDispatch } from 'react-redux'
import { CreateProduct } from './CreateProduct'

import GridContainer from "custom_components/Grid/GridContainer.js"
import GridItem from 'custom_components/Grid/GridItem';

export const CreateReview = () => {
    const user = useSelector(state => state.postgres_user)
    const products = useSelector(state => state.searchProductsReducer.allProducts)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(handleSearchProduct(e.target.value)) 
    }

    const handlePageChange = (e, value) => {
        e.preventDefault()
        setPage(value)
    }

    return (
        <>
            <TextField id="product-name" label="Outlined" variant="outlined" onChange={handleChange}/>
            <GridContainer direction="row" justify="space-evenly" alignItems="flex-start">
                {products && products.map(product =>     
                            <CreateProduct {...product} key={product.itemId} />
                )}
            </GridContainer>
            <GridContainer alignItems="center" justify="center">
                <GridItem>
                    <Pagination count={100} page={page} onChange={handlePageChange} /> 
                </GridItem>     
            </GridContainer>
        </>
    )
}