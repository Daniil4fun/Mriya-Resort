import React from "react";
import classes from './NavLangs.module.css';

function NavLangs() {

    return (
        <div className={classes.navLangs}>
            <p>RU</p>
            <p className={classes.engLang}>ENG</p>
        </div>
    )
}

export default NavLangs;