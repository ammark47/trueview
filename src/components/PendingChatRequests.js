import React from "react";
import GridContainer from "custom_components/Grid/GridContainer";
import GridItem from "custom_components/Grid/GridItem";
import { Paper, List, makeStyles } from '@material-ui/core'
import { PendingChatList } from "./PendingChatList";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}))

export const PendingChatRequests = () => {
    const classes = useStyles() 

    return (
        <GridContainer className={classes.root}>
            <GridContainer className={classes.root}>
                <GridItem xs={12}>
                    <GridContainer className={classes.root}>
                        <Paper elevation={2} className={classes.root}>
                            <List >
                                <PendingChatList /> 
                            </List>
                        </Paper>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </GridContainer>
    )
}