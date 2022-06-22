import React from "react";
import tablet from '../../../img/tablet.png';
import classes from './Tablet.module.css';

function Tablet() {

    return (
        <img className={classes.tablet} src={tablet} alt="tablet" />
    )
}

export default Tablet;