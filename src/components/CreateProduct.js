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


const styles = {
...imagesStyles,
cardTitle,
};

const useStyles = makeStyles(styles);

export const CreateProduct = (product) => {
    const classes = useStyles();
    console.log(product)
    return (
        <GridItem xs={4} md={4}>
            <Card style={{width: "20rem"}}>
            <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src="..."
                alt="Card-img-cap"
            />
            <CardBody>
                <h4 className={classes.cardTitle}>Card title</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button color="primary">Do something</Button>
            </CardBody>
            </Card>
        </GridItem>
    );
}