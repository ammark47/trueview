import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
                <Box p={2}>
                <Typography>{children}</Typography>
                </Box>
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
        marginTop: '5em'
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

}));
    

export const CustomerNavTabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
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
                <CustomerLinkTab className={classes.linkTab} label="Search For Product" href="/drafts" {...Customera11yProps(0)} />
                <CustomerLinkTab className={classes.linkTab} label="Chat" href="/trash" {...Customera11yProps(1)} />
                </Tabs>
            </AppBar>
            <CustomerTabPanel value={value} index={0}>
                Search For Product
            </CustomerTabPanel>
            <CustomerTabPanel value={value} index={1}>
                Chat
            </CustomerTabPanel>
        </div>
    )
}