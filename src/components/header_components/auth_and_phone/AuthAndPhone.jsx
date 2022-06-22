import React from "react";
import key from '../../../icons/key.svg';
import mediaKey from '../../../icons/mediaKey.svg';
import classes from './AuthAndPhone.module.css';

function AuthAndPhone() {

    return (
        <>
            <div className={classes.authAndPhone}>
                <img src={key} alt="key" />
                <p>ВХОД</p>
                <p>8 800 500 6847</p>
            </div>
            <img className={classes.mediaKey} src={mediaKey} alt="mediaKey" />
        </>
    )
}

export default AuthAndPhone;