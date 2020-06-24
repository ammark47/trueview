/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const customStyles = {
  ...styles,
  footerBottom: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '2.5rem'
  }
}

const useStyles = makeStyles(customStyles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
    [classes.footerBottom]: false
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/ammarkarim/"
                className={classes.block}
                target="_blank"
              >
                <LinkedInIcon className={classes.icon} /> Linkedin
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto: iammkarim25@gmail.com"
                className={classes.block}
                target="_blank"
              >
                <EmailIcon className={classes.icon} /> Email
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} Ammar Karim
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
