import React from "react";

import GridContainer from 'custom_components/Grid/GridContainer'
import GridItem from 'custom_components/Grid/GridItem'
import { Container, TextField, makeStyles, Typography, Paper } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { Link } from "react-router-dom";
import Button from "../custom_components/CustomButtons/Button.js";



const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
}))

export const ReviewerListItem = ( product ) => {
    const classes = useStyles();

    return (
        <GridContainer className={classes.root} justify="space-evenly">
            <GridItem xs={2}>
                <Typography variant='h4' gutterBottom>Ammar Karim</Typography>
            </GridItem>
            <GridItem xs={1}>
                <Rating align="center" readOnly value={3}></Rating>
            </GridItem>
            <GridItem xs={3}>
                <Typography variant='body2' gutterBottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat vitae erat in hendrerit. Proin eleifend, justo id dictum lacinia, orci sem tincidunt tellus, eget gravida lacus est sed lectus. Vivamus quis viverra purus, quis accumsan tellus. Nullam neque quam, porttitor vel lorem mattis, tempor pretium justo. Aliquam ante nisl, volutpat vitae ex eu, dignissim bibendum nibh. Aliquam lobortis orci sit amet neque pretium varius. Donec orci turpis, aliquet lobortis sem feugiat, tincidunt dignissim metus.</Typography>
            </GridItem>
            <GridItem xs={3} align="center">
                <Link to={"/products/" + product.id + '/' } className={classes.createReviewLink}>
                    <Button color="primary">Create Review</Button>
                </Link>
            </GridItem>
        </GridContainer>
    );
}