import React from "react";
import footerLogo from '../../../icons/logo.svg';
import classes from './FooterLogo.module.css';

function FooterLogo() {

    return (
        <img className={classes.footerLogo} src={footerLogo} alt="footerLogo" />
    )
}

export default FooterLogo;