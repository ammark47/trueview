import React from "react";
import { useSelector } from 'react-redux'
import { acceptChat } from '../models/chat'

import GridContainer from 'custom_components/Grid/GridContainer'
import GridItem from 'custom_components/Grid/GridItem'
import { Container, TextField, makeStyles, Typography, Paper, ListItem } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { Link } from "react-router-dom";
import Button from "../custom_components/CustomButtons/Button.js";
import Image from 'material-ui-image'


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
}))

export const PendingChatItem = ( pendingChatRequest ) => {
    const classes = useStyles()
    const user = useSelector(state => state.authReducer.postgres_user)
    const { 
        name,
        customer_id: customerId, 
        product_id: productId, 
        product_name: productName,
        small_image: productImage,
        review_id: reviewId
    } = pendingChatRequest

    const handleClick = () => {
        acceptChat(user.id, customerId, reviewId)
    }
    
    return (
        <ListItem alignItems="flex-start" divider>
            <GridContainer className={classes.root} justify="space-evenly">
                <GridItem xs={3}>
                    <Typography variant='h6' gutterBottom>{name}</Typography>
                </GridItem>
                <GridItem xs={3}>
                    <GridContainer className={classes.root} direction="row">
                        <GridContainer className={classes.root} >
                            <GridItem sm={4} >
                                <Image src={productImage}/>
                            </GridItem>
                            <GridItem sm={8}>
                                <Typography variant='h6' noWrap>{productName}</Typography>
                            </GridItem>
                        </GridContainer>
                    </GridContainer>
                </GridItem>
                <GridItem xs={3} align="center">
                    <Link to={`/reviewer/chat/${customerId}/${reviewId}`} className={classes.createReviewLink}>
                        <Button color="primary" onClick={handleClick}>Accept Chat</Button>
                    </Link>
                </GridItem>
            </GridContainer>
        </ListItem>
    );
}