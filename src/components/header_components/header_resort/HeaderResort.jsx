import React from "react";
import AppButton from "../../UI/app_button/AppButton";
import classes from './HeaderResort.module.css';

function HeaderResort() {

    let styles = {
        AppButtonFirst: {
            background: '#BCA56A',
            color: 'white'
        },
        AppButtonSecond: {
            marginLeft: '40px'
        }
    }

    return (
        <div className={classes.headerResort}>
            <h3>FAMILY & HEALTH CLUB</h3>
            <h1>Mriya <br />Resort</h1>
            <p>Российский курорт для всей<br className={classes.mediaBr} /> семьи<br className={classes.desktopBr} /> на берегу черного моря</p>
            <div>
                <AppButton id={classes.mediaBtnLeft} style={styles.AppButtonFirst}>НАЙТИ НОМЕР</AppButton>
                <AppButton id={classes.mediaBtnRight} style={styles.AppButtonSecond}>3D ТУР</AppButton>
            </div>
        </div>
    )
}

export default HeaderResort;