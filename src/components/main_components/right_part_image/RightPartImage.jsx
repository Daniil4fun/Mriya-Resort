import React from "react";
import rightPartImage from '../../../img/rightPartImage.png';
import classes from './RightPartImage.module.css';

function RightPartImage() {

    return (
        <img className={classes.rightPartImage} src={rightPartImage} alt="rightPartImage" />
    )
}

export default RightPartImage;