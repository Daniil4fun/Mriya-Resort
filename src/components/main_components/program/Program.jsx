import React, { useState } from "react";
import ProgramType from "../program_type/ProgramType";
import RestCategoriesProgram from "../rest_categories_program/RestCategoriesProgram";
import SpecialOffersProgram from "../special_offers_program/SpecialOffersProgram";

function Program() {

    let [specialOffers, setSpecialOffers] = useState(true);
    let [afisha, setAfisha] = useState(false);
    let [restCategories, setRestCategories] = useState(false);

    let [carouselSO, setCarouselSO] = useState(0);
    let [carouselRC, setCarouselRC] = useState(0);

    function turnCarouselLeftSO() {
        let amount = 2;
        if (Math.abs(carouselSO) !== (amount * 400)) {
            setCarouselSO(carouselSO - 400);
        }
    }

    function turnCarouselRightSO() {
        if (carouselSO !== 0) {
            setCarouselSO(carouselSO + 400);
        }
    }

    function turnCarouselLeftRC() {
        let amount = 4;
        if (Math.abs(carouselRC) !== (amount * 400)) {
            setCarouselRC(carouselRC - 400);
        }
    }

    function turnCarouselRightRC() {
        if (carouselRC !== 0) {
            setCarouselRC(carouselRC + 400);
        }
    }

    return (
        <div>
            <ProgramType
                specialOffers={specialOffers}
                setSpecialOffers={setSpecialOffers}
                afisha={afisha}
                setAfisha={setAfisha}
                restCategories={restCategories}
                setRestCategories={setRestCategories}
                turnCarouselLeftSO={turnCarouselLeftSO}
                turnCarouselRightSO={turnCarouselRightSO}
                turnCarouselLeftRC={turnCarouselLeftRC}
                turnCarouselRightRC={turnCarouselRightRC}  
            />
            {specialOffers ? <SpecialOffersProgram carouselSO={carouselSO} /> : undefined}
            {restCategories ? <RestCategoriesProgram carouselRC={carouselRC} /> : undefined}
        </div>
    )
}

export default Program;