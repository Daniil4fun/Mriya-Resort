import React from "react";
import petalBorder from '../../../icons/petalBorder.svg';
import classes from './PetalBorder.module.css';

function PetalBorder() {

    return (
        <img className={classes.petalBorder} src={petalBorder} alt="petalBorder" />
    )
}

export default PetalBorder;