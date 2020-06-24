import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CustomerSearchProducts } from './CustomerSearchProducts';
import { CustomerChat } from './CustomerChat';
import { Grid } from '@material-ui/core'


const CustomerTabPanel = (props) => {
    const { children, value, index, ...other } = props

    return (
        <div 
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
            >
            {value === index && (
                <>
                {children}
                </>
            )}
        </div>
    )
}

const Customera11yProps = (index) => {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    }
}

const CustomerLinkTab = (props) => {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props} />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        marginTop: '5em',
    },
    tab: {
        backgroundColor: "#D7FDEC",
        color: '#08415C',
    },
    linkTab: {
        "&:hover": {
            backgroundColor: "#F56476",
            color: "#08415C",
            textDecoration: 'none',
            boxShadow:
                "0 14px 26px -12px #F56476, 0 4px 23px 0px #F56476, 0 8px 10px -5px #F56476"
            },
        textDecoration: 'none'
    }
}))
    

export const CustomerNavTabs = ({ path }) => {
    const classes = useStyles()
    const [value, setValue] = useState("search")

    useEffect(() => {
        if (path) {
            setValue(path)
        }
    }, [path])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item xs={12} md={8}>
                <AppBar position="static">
                    <Tabs
                        selectionFollowsFocus
                        indicatorColor='secondary'
                        className={classes.tab}
                        TabIndicatorProps={{style: {backgroundColor: "#F56476"}}}
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs"
                        >
                        <CustomerLinkTab className={classes.linkTab} label="Search For Product" href="/drafts" value={"search"} {...Customera11yProps("search")} />
                        <CustomerLinkTab className={classes.linkTab} label="Chat" href="/trash" value={"chat"} {...Customera11yProps("chat")} />
                    </Tabs>
                </AppBar>
            </Grid>
            <Grid item xs={12} md={10} >
                <CustomerTabPanel value={value} index={"search"}>
                    <CustomerSearchProducts />
                </CustomerTabPanel>
                <CustomerTabPanel value={value} index={"chat"}>
                    <CustomerChat />
                </CustomerTabPanel>
            </Grid>
        </Grid>
    )
}