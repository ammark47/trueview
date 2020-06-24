/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, MeetingRoomSharp } from "@material-ui/icons";

// core components
import CustomDropdown from "custom_components/CustomDropdown/CustomDropdown.js";
import Button from "custom_components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export const LoggedOutHeaderLinks = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                onClick={props.logIn}
                color="transparent"
                className={classes.navLink}
                >
                <MeetingRoomSharp className={classes.icons} /> Log In / Register
                </Button>
            </ListItem>
        </List>
    );
}
