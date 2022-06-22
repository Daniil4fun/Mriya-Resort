import React from "react";
import waves from '../../../icons/waves.svg';
import classes from './HeaderWaves.module.css';

function HeaderWaves() {

    return (
        <img className={classes.headerWaves} src={waves} alt="waves" />
    )
}

export default HeaderWaves;