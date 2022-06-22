import React from "react";
import leftPartImage from '../../../img/leftPartImage.png';
import classes from './LeftPartImage.module.css';

function LeftPartImage() {

    return (
        <img className={classes.leftPartImage} src={leftPartImage} alt="leftPartImage" />
    )
}

export default LeftPartImage;