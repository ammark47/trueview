import React from "react";
import { useSelector } from 'react-redux'

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
    const customer = useSelector(state => state.authReducer.postgres_user)
    console.log(pendingChatRequest)
    const handleClick = () => {
    }
    
    return (
        <ListItem alignItems="flex-start" divider>
            <GridContainer className={classes.root} justify="space-evenly">
                <GridItem xs={3}>
                    <Typography variant='h6' gutterBottom>Ammar Karim</Typography>
                </GridItem>
                <GridItem xs={3}>
                    <GridContainer className={classes.root} direction="row">
                        <GridContainer className={classes.root} >
                            <GridItem sm={4} >
                                <Image src="https://i5.walmartimages.com/asr/a31d17bb-ebee-4ef0-b0c6-144b691e96d1_1.828640dc873bc869490e24e607ff237a.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF"/>
                            </GridItem>
                            <GridItem sm={8}>
                                <Typography variant='h6' noWrap>This is a really This is a really description</Typography>
                            </GridItem>
                        </GridContainer>
                    </GridContainer>
                    {/* <Rating align="center" readOnly value={3}></Rating> */}
                </GridItem>
                <GridItem xs={3} align="center">
                    <Link to={"/products/" + pendingChatRequest.id + '/' } className={classes.createReviewLink}>
                        <Button color="primary" onClick={handleClick}>Check This Reviewer</Button>
                    </Link>
                </GridItem>
            </GridContainer>
        </ListItem>
    );
}