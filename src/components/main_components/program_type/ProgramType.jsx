import React from "react";
import programArrowLeft from '../../../icons/programArrowLeft.svg';
import programArrowRight from '../../../icons/programArrowRight.svg';
import classes from './ProgramType.module.css';

function ProgramType(props) {

    function changeActiveType(event) {
        if (event.target.textContent === 'СПЕЦПРЕДЛОЖЕНИЯ') {
            props.setSpecialOffers(true);
            props.setAfisha(false);
            props.setRestCategories(false);
        } else if (event.target.textContent === 'АФИША') {
            props.setSpecialOffers(false);
            props.setAfisha(true);
            props.setRestCategories(false);
        } else if (event.target.textContent === 'КАТЕГОРИИ ОТДЫХА') {
            props.setSpecialOffers(false);
            props.setAfisha(false);
            props.setRestCategories(true);
        }
    }

    function changeLeftPosition() {
        if (props.specialOffers) {
            props.turnCarouselLeftSO();
        } else if (props.restCategories) {
            props.turnCarouselLeftRC();
        }
    }
    
    function changeRightPosition() {
        if (props.specialOffers) {
            props.turnCarouselRightSO();
        } else if (props.restCategories) {
            props.turnCarouselRightRC();
        }
    }

    return (
        <div className={classes.programTypeWrapper}>
            <div>
                <p onClick={event => changeActiveType(event)} className={props.specialOffers ? classes.activeType : undefined}>СПЕЦПРЕДЛОЖЕНИЯ</p>
                <p onClick={event => changeActiveType(event)} className={props.afisha ? classes.activeType : undefined}>АФИША</p>
                <p onClick={event => changeActiveType(event)} className={props.restCategories ? classes.activeType : undefined}>КАТЕГОРИИ ОТДЫХА</p>
            </div>
            <div>
                <img onClick={changeLeftPosition} src={programArrowLeft} alt="programArrowLeft" />
                <img onClick={changeRightPosition} src={programArrowRight} alt="programArrowRight" />
            </div>
            <hr />
        </div>
    )
}

export default ProgramType;