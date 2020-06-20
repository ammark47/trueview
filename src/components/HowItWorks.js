import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import GridContainer from 'custom_components/Grid/GridContainer'
import GridItem from 'custom_components/Grid/GridItem'
import { CustomerTimeLine } from './CustomerTimeLine'
import { ReviewerTimeLine } from './ReviewerTimeLine'

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js"

const customStyles = {
    ...styles,
    subTitle: {
        ...styles.title,
        color: '#8C93A8'
    }
}

const useStyles = makeStyles(customStyles)


export const HowItWorks = () => {
    const classes = useStyles()

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>How It Works</h2>
                </GridItem>
            </GridContainer>
            <GridContainer style={{ flexWrap: 'nowrap' }}>
                <GridItem xs={12} sm={12} md={12}>
                    <GridContainer direction="column">
                        <GridItem xs={12} sm={6} md={6}>
                            <h2 className={classes.subTitle}>Customer</h2>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <CustomerTimeLine />      
                        </GridItem>
                    </GridContainer>
                </GridItem>
                    <GridContainer direction="column" alignItems='flex-end' style={{ width: '100%' }}>
                        <GridItem xs={12} sm={6} md={6}>
                            <h2 className={classes.subTitle}>Reviewer</h2>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <ReviewerTimeLine />      
                        </GridItem>
                    </GridContainer>
            </GridContainer>
        </div>
    )
}