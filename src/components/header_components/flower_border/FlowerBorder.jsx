import React from "react";
import flowerBorder from '../../../icons/flowerBorder.svg';
import mediaFlowerBorder from '../../../img/mediaFlowerBorder.png';
import classes from './FlowerBorder.module.css';

function FlowerBorder() {

    return (
        <>
            <img className={classes.flowerBorder} src={flowerBorder} alt="flowerBorder" />
            <img className={classes.mediaFlowerBorder} src={mediaFlowerBorder} alt="mediaFlowerBorder" />
        </>
    )
}

export default FlowerBorder;