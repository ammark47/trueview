import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../custom_components/Card/Card.js";
import CardBody from "../custom_components/Card/CardBody.js";
import Button from "../custom_components/CustomButtons/Button.js";

import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "../assets/jss/material-kit-react.js";
import GridItem from "custom_components/Grid/GridItem.js"
import { Link } from "react-router-dom";


const styles = {
    ...imagesStyles,
    cardTitle,
    createReviewLink: {
        textDecoration: 'none'
    }
};

const useStyles = makeStyles(styles);

export const ProductCard = ( product ) => {
    const classes = useStyles();

    return (
        <GridItem xs={4} md={4}>
            <Card style={{width: "20rem"}}>
            <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={product.largeImage}
                alt="Card-img-cap"
            />
            <CardBody>
                <h4 className={classes.cardTitle}>Card title</h4>
                <p>{product.name}</p>
                <Link to={"/products/" + product.id} className={classes.createReviewLink}>
                    <Button color="primary">Create Review</Button>
                </Link>
            </CardBody>
            </Card>
        </GridItem>
    );
}