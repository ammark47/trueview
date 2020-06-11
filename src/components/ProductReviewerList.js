import React from 'react'
import GridContainer from 'custom_components/Grid/GridContainer'
import GridItem from 'custom_components/Grid/GridItem'
import { Container, TextField, makeStyles, Typography, Paper, List } from '@material-ui/core'
import Image from 'material-ui-image'
import { grayColor } from 'assets/jss/material-kit-react'
import Rating from '@material-ui/lab/Rating'
import { ReviewerList } from './ReviewerList'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    idColor: {
        color: grayColor
    },

}))

export const ProductReviewerList = () => {
    const classes = useStyles() 

    return (
        <GridContainer className={classes.root} direction="row">
            <GridItem>
                <GridContainer  className={classes.root} >
                    <GridContainer  direction="row" className={classes.root}>
                        <GridItem md={4} sm={4}>
                            <Image src="https://i5.walmartimages.com/asr/a31d17bb-ebee-4ef0-b0c6-144b691e96d1_1.828640dc873bc869490e24e607ff237a.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF"/>
                        </GridItem>
                        <GridItem xs={8}>
                            <GridContainer direction="column" className={classes.root} alignItems="stretch">
                                <Paper elevation={3}>
                                    <GridItem>
                                        <Typography variant='h3' gutterBottom>Breathing Mask</Typography>
                                    </GridItem>
                                    
                                        <GridItem> 
                                            <GridContainer direction='row' className={classes.root}>
                                                <GridItem xs={4}>
                                                    <Rating readOnly value={3}></Rating>
                                                </GridItem>
                                                <GridItem xs={6}>
                                                    <Typography variant='subtitle1' className={classes.idColor} gutterBottom>Walmart #: n28h39h92</Typography>
                                                </GridItem>
                                            </GridContainer>
                                        </GridItem>
                                    <GridItem>
                                        <Typography variant='body1' gutterBottom>Manufacturer: WhirlpoolPart Number: WP12550109QDescription: Gasket ReGenuine OEM Part</Typography>
                                    </GridItem>
                                </Paper>
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                </GridContainer>
            </GridItem>
            <GridItem>
                <GridContainer className={classes.root} direction="column" >
                        <Paper elevation={2}>
                            <List >
                                <ReviewerList />
                            </List>
                        </Paper>
                </GridContainer>
            </GridItem>
        </GridContainer>
    )
}