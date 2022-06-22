import React from "react";
import menu from '../../../icons/menu.svg';
import classes from './HeaderMenu.module.css';

function HeaderMenu({isActive, setIsActive}) {

    return (
        <div onClick={() => setIsActive(!isActive)} className={classes.headerMenu}>
            <img src={menu} alt="menu" />
        </div>
    )
}

export default HeaderMenu;