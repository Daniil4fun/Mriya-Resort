import React from "react";
import classes from './ChooseRestForm.module.css';

function ChooseRestForm() {

    return (
        <form className={classes.chooseRestForm} onSubmit={event => event.preventDefault()}>
            <select>
                <option defaultValue={'Семейный отдых'}>Семейный отдых</option>
            </select>
            <input type="text" defaultValue="пт, 8 мая - вс, 17 мая" />
            <input type="text" defaultValue="2 взрослых • без детей • 1 номер" />
            <button>Найти</button>
        </form>
    )
}

export default ChooseRestForm;