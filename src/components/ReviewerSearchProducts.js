import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import useConstant from 'use-constant'
import { useAsync, useAsyncAbortable } from 'react-async-hook'
import ReactLoading from 'react-loading'

import { searchAllWalmartProducts } from '../models/product'
import { TextField, Grid, makeStyles } from '@material-ui/core'
import { ReviewerProductCard } from 'components/ReviewerProductCard'

const styles = {
    searchBar: {
        backgroundColor: 'white',
        marginTop: '5em',
    },
    results: {
        marginTop: '2em',
        flexGrow: 1
    }
}

const useStyles = makeStyles(styles)

export const ReviewerSearchProducts = () => {
    const classes = useStyles()
    const [searchText, setSearchText] = useState('')
    const debouncedReviewerSearchProducts = useConstant(() => 
        AwesomeDebouncePromise(searchAllWalmartProducts, 300)
    )
    const { loading, error, result } = useAsyncAbortable( 
        async (abortSignal, searchText) => {
            if (searchText.length === 0) {
                return []
            } else {
                return debouncedReviewerSearchProducts(searchText, abortSignal)
            }
    } , [searchText])

    const handleChange = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }

    return (
        <Grid container>
            <Grid container justify="center">
                <Grid item xs={12} sm={12} md={6}>
                    <TextField  className={classes.searchBar} fullWidth variant='outlined' onChange={handleChange} />
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={10} className={classes.results}>   
                    {loading && <ReactLoading type={"spinningBubbles"} color={"#08415C"} height={667} width={375} />}
                    {result && result.map(product => (
                        <ReviewerProductCard key={product.itemId} {...product} />
                    ))}
            </Grid>
        </Grid>
    )
}