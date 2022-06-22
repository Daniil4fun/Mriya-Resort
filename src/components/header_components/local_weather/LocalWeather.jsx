import React from "react";
import classes from './LocalWeather.module.css';

function LocalWeather() {

    return (
        <div className={classes.localWeather}>
            <h3>27&#176;</h3>
            <p>Облачно</p>
            <p>Ялта, Россия</p>
        </div>
    )
}

export default LocalWeather;