import React from "react";
import weather from '../../icons/weather.svg';
import classes from './Weather.module.css';

function Weather() {

    return (
        <img className={classes.weather} src={weather} alt="weather" />
    )
}

export default Weather;

