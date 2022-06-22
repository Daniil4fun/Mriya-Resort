import React from "react";
import { NavLink } from 'react-router-dom';
import sliderArrowLeft from '../../../icons/sliderArrowLeft.svg';
import sliderArrowRight from '../../../icons/sliderArrowRight.svg';
import shortHorizontalStripe from '../../../icons/shortHorizontalStripe.svg';
import gym from '../../../img/gym.png';
import food from '../../../img/food.png';
import pool from '../../../img/pool.png';
import classes from './Slide1.module.css';

function Slide1({changeSlideRight, changeSlideLeft}) {

    return (
        <div className={classes.slider}>
            <div>
                <h2>Все включено</h2>
                <div className={classes.sliderBtns}>
                    <span onClick={changeSlideLeft}>
                        <img src={sliderArrowLeft} alt="sliderArrowLeft" />
                    </span>
                    <span onClick={changeSlideRight}>
                        <img src={sliderArrowRight} alt="sliderArrowRight" />
                    </span>
                </div>
            </div>
            <div className={classes.sliderMainContent}>
                <div className={classes.leftMainContent}>
                    <img src={gym} alt="gym" />
                    <p>
                        Занимайтесь в тренажерном зале и посещайте групповые <br className={classes.desktopBr} />
                        тренировки
                    </p>
                    <div>
                        <NavLink id={classes.sliderNavLink} to={'/'}>ЧИТАТЬ БОЛЬШЕ</NavLink>
                        <img src={shortHorizontalStripe} alt="shortHorizontalStripe" />
                    </div>
                </div>
                <div className={classes.rightMainContent}>
                    <div className={classes.media}>
                        <h3>ОЗДОРОВЛЕНИЕ</h3>
                        <p>
                            Mriya Resort - это<br />
                            маленький город со<br />
                            множеством<br />
                            возможностей,<br />
                            каждый найдет себе<br />
                            занятие по вкусу
                        </p>
                    </div>
                    <div className={classes.mediaFood}>
                        <img src={food} alt="food" />
                        <p>
                            Питаться в ресторане <br className={classes.desktopBr} />
                            шведской<br className={classes.mediaBr} /> линии согласно <br className={classes.desktopBr} />
                            выбранному<br className={classes.mediaBr} /> варианту
                        </p>
                        <div>
                            <NavLink id={classes.sliderNavLink} to={'/'}>ЧИТАТЬ БОЛЬШЕ</NavLink>
                            <img src={shortHorizontalStripe} alt="shortHorizontalStripe" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.sliderAsideContent}>
                <img src={pool} alt="pool" />
                <p>
                    Исследовать все<br className={classes.desktopBr} />
                    общедоступные<br className={classes.mediaBr} /> зоны и <br className={classes.desktopBr} />
                    территории комплекса
                </p>
                <div>
                    <NavLink id={classes.sliderNavLink} to={'/'}>ЧИТАТЬ БОЛЬШЕ</NavLink>
                    <img src={shortHorizontalStripe} alt="shortHorizontalStripe" />
                </div>
            </div>
        </div>
    )
}

export default Slide1;