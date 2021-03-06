/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { ExitToAppSharp } from "@material-ui/icons"

// core components
import CustomDropdown from "custom_components/CustomDropdown/CustomDropdown.js";
import Button from "custom_components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export const LoggedInHeaderLinks = (props) => {
    const classes = useStyles()
    const history = useHistory()

    const handleCustomerLink = () => {
        history.push('/customers')
    }

    const handleReviewerLink = () => {
        history.push('/reviewers')
    }

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    onClick={handleCustomerLink}
                    color="transparent"
                    className={classes.navLink}
                >
                Customer
                </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                onClick={handleReviewerLink}
                color="transparent"
                className={classes.navLink}
                >
                Reviewer
                </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                    onClick={props.logOut}
                    color="transparent"
                    className={classes.navLink}
                >
                <ExitToAppSharp className={classes.icons} /> Log Out
                </Button>
            </ListItem>
        </List>
    );
}
