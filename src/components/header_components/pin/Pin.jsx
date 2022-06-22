import React from "react";
import pin from '../../../icons/pin.svg';
import classes from './Pin.module.css';

function Pin() {

    return (
        <img className={classes.pin} src={pin} alt="pin" />
    )
}

export default Pin;