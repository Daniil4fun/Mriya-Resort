import React from "react";
import flower from '../../../img/flower.png';
import classes from './Flower.module.css';

function Flower() {

    return (
        <img className={classes.flower} src={flower} alt="flower" />
    )
}

export default Flower;