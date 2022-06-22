import React from "react";
import AppHeaderNav from "../app_header_nav/AppHeaderNav";
import HeaderResort from "../header_resort/HeaderResort";
import HeaderWaves from "../header_waves/HeaderWaves";
import ShortVerticalStripe from "../short_vertical_stripe/ShortVerticalStripe";
import RoundButton from "../../UI/round_button/RoundButton";
import classes from './AppHeader.module.css';
import arrowBottom from '../../../icons/arrowBottom.svg';
import FlowerBorder from "../flower_border/FlowerBorder";
import Flower from "../flower/Flower";
import SocialNetworks from "../social_networks/SocialNetworks";
import PetalBorder from "../petal_border/PetalBorder";
import Petal from "../petal/Petal";
import Weather from "../../weather/Weather";
import Pin from "../pin/Pin";
import LocalWeather from "../local_weather/LocalWeather";

function AppHeader({isActive, setIsActive}) {

    return (
        <header className={classes.appHeader}>
            <AppHeaderNav isActive={isActive} setIsActive={setIsActive} />
            <HeaderWaves />
            <HeaderResort />
            <ShortVerticalStripe />
            <RoundButton style={{position: 'absolute', top: '744px', left: '140px'}}>
                <img src={arrowBottom} alt="arrowBottom" />
            </RoundButton>
            <FlowerBorder />
            <Flower />
            <SocialNetworks />
            <PetalBorder />
            <Petal />
            <Weather />
            <Pin />
            <LocalWeather />
        </header>
    )
}

export default AppHeader;