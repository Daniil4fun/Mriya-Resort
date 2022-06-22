import React from "react";
import photoAntistress from '../../../img/photoAntistress.png';
import quadrantMenu from '../../../img/quadrantMenu.png';
import AppButton from "../../UI/app_button/AppButton";
import classes from './MenuSlider.module.css';

function MenuSlider1() {

    return (
        <div className={classes.sliderInMenu}>
            <img src={photoAntistress} alt="photoAntistress" />
            <img src={quadrantMenu} alt="quadrantMenu" />
            <div>
                <h3>Антистресс</h3>
                <p>10-21 дня</p>
                <AppButton>ПОДРОБНЕЕ</AppButton>
            </div>
        </div>
    )
}

export default MenuSlider1;