import React from "react";
import singleWave from '../../../icons/singleWave.svg';
import classes from './SingleWave.module.css';

function SingleWave() {

    return (
        <img className={classes.singleWave} src={singleWave} alt="singleWave" />
    )
}

export default SingleWave;