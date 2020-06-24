import React from 'react'
import { Grid } from '@material-ui/core'
import { CustomerNavTabs } from 'components/CustomerNavTabs'
import { useParams } from 'react-router-dom'


export const Customer = () => {
    const { path } = useParams()

    return (
        <Grid item container justify="center">
            <CustomerNavTabs path={path}/>
        </Grid>
    )
}