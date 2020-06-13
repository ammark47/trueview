import React from "react";
import { useSelector } from 'react-redux'
import useFetch from 'use-http'
import { LoadingIndicator } from "stream-chat-react";
import { PendingChatItem } from "./PendingChatItem";
import GridContainer from 'custom_components/Grid/GridContainer'
import GridItem from 'custom_components/Grid/GridItem'
import { Container, TextField, makeStyles, Typography, Paper, ListItem } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import { Link } from "react-router-dom";
import Button from "../custom_components/CustomButtons/Button.js";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    listHeader: {
        backgroundColor: '#03fcbe'
    }
}))


export const PendingChatList = ( ) => {
    const classes = useStyles()
    const user = useSelector(state => state.authReducer.postgres_user)
    const { loading, error, data = []  } = useFetch("/db/chat/" + user.id, [])

    return (
        <>
            <ListItem divider className={classes.listHeader} alignItems="flex-start">
                <GridContainer className={classes.root} alignItems="center" >
                    <GridItem xs={4}>
                        <Typography variant='h5'>Requesting Customer</Typography>
                    </GridItem>
                    <GridItem xs={4}>
                        <Typography variant='h5'>Product Info</Typography>
                    </GridItem>
                </GridContainer>
            </ListItem>
            {loading && <LoadingIndicator />}
            {data && data.map(pendingChatRequest => 
                <PendingChatItem {...pendingChatRequest} key={pendingChatRequest.id} />
            )}
        </>
    )
}