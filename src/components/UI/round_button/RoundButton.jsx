import React from "react";
import classes from './RoundButton.module.css';

function RoundButton({children, ...props}) {

    return (
        <div {...props} className={classes.roundButton}>
            {children}
        </div>
    )
}

export default RoundButton;