import React from "react";
import logo from '../../../icons/logo.svg';
import stars from '../../../icons/stars.svg';
import classes from './NavLogo.module.css';

function NavLogo() {

    return (
        <div className={classes.navLogo}>
            <img src={logo} alt="logo" />
            <div className={classes.stars}>
                <img src={stars} alt="stars" />
            </div>
        </div>
    )
}

export default NavLogo;