import React from 'react'
import { Grid } from '@material-ui/core'
import { CustomerNavTabs } from 'components/CustomerNavTabs'
import { useParams } from 'react-router-dom'


export const Customer = () => {
    const { path } = useParams()

    return (
        <Grid container justify='center'>
            <Grid item  xs={12} sm={12} md={8}>
                <CustomerNavTabs path={path}/>
            </Grid>
        </Grid>
    )
}