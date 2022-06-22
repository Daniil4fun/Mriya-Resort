import React, { useState } from "react";
import ChooseRest from "../choose_rest/ChooseRest";
import LeftPartImage from "../left_part_image/LeftPartImage";
import Program from "../program/Program";
import RightPartImage from "../right_part_image/RightPartImage";
import SingleWave from "../single_wave/SingleWave";
import Slide1 from "../slide1/Slide1";
import Slide2 from '../slide2/Slide2';
import Slide3 from '../slide3/Slide3';
import Slogan from "../slogan/Slogan";

function AppMain() {

    let [slide1, setSlide1] = useState(true);
    let [slide2, setSlide2] = useState(false);
    let [slide3, setSlide3] = useState(false);
    
    let slidesArr = [slide1, slide2, slide3];
    let settersSlides = [setSlide1, setSlide2, setSlide3];

    function changeSlideRight() {
        for (let i = 0; i < slidesArr.length; i++) {
            if (slidesArr[i] && (slidesArr[i + 1] !== undefined)) {
                settersSlides[i](false);
                settersSlides[i + 1](true);
            } else if (slidesArr[i] && (slidesArr[i + 1] === undefined)) {
                settersSlides[i](false);
                settersSlides[0](true);
            }
        }
    }

    function changeSlideLeft() {
        for (let i = slidesArr.length; i >= 0; i--) {
            if (slidesArr[i] && (slidesArr[i - 1] !== undefined)) {
                settersSlides[i](false);
                settersSlides[i - 1](true);
            } else if (slidesArr[i] && (slidesArr[i - 1] === undefined)) {
                settersSlides[i](false);
                settersSlides[settersSlides.length - 1](true);
            }
        }
    }

    return (
        <main>
            <ChooseRest />
            <Program />
            <SingleWave />
            <Slogan />
            <LeftPartImage />
            <RightPartImage />
            {slide1 && <Slide1 changeSlideRight={changeSlideRight} changeSlideLeft={changeSlideLeft} />}
            {slide2 && <Slide2 changeSlideRight={changeSlideRight} changeSlideLeft={changeSlideLeft} />}
            {slide3 && <Slide3 changeSlideRight={changeSlideRight} changeSlideLeft={changeSlideLeft} />}
        </main>
    )
}

export default AppMain;