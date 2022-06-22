import React from "react";
import petal from '../../../img/petal.png';
import mediaPetal from '../../../img/mediaPetal.png';
import classes from './Petal.module.css';

function Petal() {

    return (
        <>
            <img className={classes.petal} src={petal} alt="petal" />
            <img className={classes.mediaPetal} src={mediaPetal} alt="mediaPetal" />
        </>
    )
}

export default Petal;