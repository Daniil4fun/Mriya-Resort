import React from "react";
import classes from './AppButton.module.css';

function AppButton({children, ...props}) {

    return (
        <button {...props} className={classes.appButton}>{children}</button>
    )
}

export default AppButton;