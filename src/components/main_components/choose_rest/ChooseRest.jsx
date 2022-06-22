import React from "react";
import ChooseRestForm from "../choose_rest_form/ChooseRestForm";
import classes from './ChooseRest.module.css';

function ChooseRest() {

    return (
        <div className={classes.chooseRest}>
            <h2>Выберите свой отдых</h2>
            <ChooseRestForm />
        </div>
    )
}

export default ChooseRest;