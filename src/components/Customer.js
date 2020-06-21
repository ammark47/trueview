import React from 'react'
import { Grid } from '@material-ui/core'
import { CustomerNavTabs } from 'components/CustomerNavTabs'


export const Customer = () => {

    return (
        <Grid container justify='center'>
            <Grid item  xs={12} sm={8} md={6}>
                <CustomerNavTabs />
            </Grid>
        </Grid>
    )
}