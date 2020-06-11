import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'

import GridContainer from 'custom_components/Grid/GridContainer.js'
import GridItem from 'custom_components/Grid/GridItem'
import TextField from '@material-ui/core/TextField'
import { ProductCard } from 'components/ProductCard'
import { handleSearchReviewedProduct } from 'store/actions/products'


export const Products = () => {
    const [page, setPage] = useState(1)
    const products = useSelector(state => state.searchProductsReducer.reviewedProducts)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(handleSearchReviewedProduct(e.target.value))
    }

    const handlePageChange = (e, value) => {
        e.preventDefault()
        setPage(value)
    }


    return (
        <GridContainer>
            <GridItem xs={12} >
                <TextField fullWidth id="product-name" label="Outlined" variant="outlined" onChange={handleChange}/>
            </GridItem>
            <GridItem>
                <GridContainer>
                    {products && products.map(product => 
                            <ProductCard {...product} key={product.id}/>
                    )}
                </GridContainer>
            </GridItem>
            
        </GridContainer>

    )
}