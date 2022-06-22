import React from "react";
import shortVerticalStripe from '../../../icons/shortVerticalStripe.svg';
import classes from './ShortVerticalStripe.module.css';

function ShortVerticalStripe() {

    return (
        <img
            className={classes.shortVerticalStripe}
            src={shortVerticalStripe}
            alt="shortVerticalStripe"
        />
    )
}

export default ShortVerticalStripe;