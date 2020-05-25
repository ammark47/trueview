import React from 'react'
import { useSelector } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { handleSearchProduct } from '../store/actions/products'
import { useDispatch } from 'react-redux'


export const CreateReview = () => {
    const user = useSelector(state => state.postgres_user)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()

        console.log(e.target.value)
        dispatch(handleSearchProduct(e.target.value))
        
    }

    return (
        <TextField id="product-name" label="Outlined" variant="outlined" onChange={handleChange}/>
    )
}