import React from 'react'
import { TextField, Grid, makeStyles, Card, CardMedia, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        borderRadius: 0,
    },
    media: {
        height: 300,
    },
    content: {
        backgroundColor: "rgb(215, 253, 236)",
        '&:hover': {
            boxShadow: '0px 2px 6px -1px rgba(0,0,0,0.2) 0px 2px 6px 0px rgba(0,0,0,0.14) 0px 2px 6px 0px rgba(0,0,0,0.12)',
            backgroundColor: '#08415C',
            color: 'white'
        }
    }
})

export const CustomerProductCard = (product) => {
    const classes = useStyles()
    const {
        small_image,
        product_name,
        store_item_id
    } = product

    console.log(product)
    return (
        <Grid item xs={12} sm={12} md={3} >
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={small_image}/>
                <CardContent className={classes.content}>
                    <Typography variant='subtitle1'>
                        {product_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {store_item_id}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}