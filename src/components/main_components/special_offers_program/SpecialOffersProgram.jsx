import React from "react";
import firstSpecialOffer from '../../../img/firstSpecialOffer.png';
import secondSpecialOffer from '../../../img/secondSpecialOffer.png';
import quadrant from '../../../img/quadrant.png';
import classes from './SpecialOffersProgram.module.css';

function SpecialOffersProgram({carouselSO}) {

    return (
        <div style={{left: carouselSO + 'px'}} className={classes.specialOffersProgramWrapper}>
            <div className={classes.firstSpecialOffer}>
                <img src={firstSpecialOffer} alt="firstSpecialOffer" />
                <img src={quadrant} alt="quadrant" />
                <div className={classes.desc}>
                    <h3>-20%</h3>
                    <p>Для тех кто<br /> рядом</p>
                </div>
            </div>
            <div className={classes.secondSpecialOffer}>
                <img src={secondSpecialOffer} alt="secondSpecialOffer" />
                <img src={quadrant} alt="quadrant" />
                <div className={classes.desc}>
                    <h3>-10%</h3>
                    <p>Раннее<br /> бронирование</p>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffersProgram;