import React from "react";
import AuthAndPhone from "../auth_and_phone/AuthAndPhone";
import HeaderMenu from "../header_menu/HeaderMenu";
import HeaderNavLinks from "../header_nav_links/HeaderNavLinks";
import NavLangs from "../nav_langs/NavLangs";
import NavLogo from "../nav_logo/NavLogo";
import classes from './AppHeaderNav.module.css';

function AppHeaderNav({isActive, setIsActive}) {

    return (
        <nav className={classes.appHeaderNav}>
            <HeaderMenu isActive={isActive} setIsActive={setIsActive} />
            <HeaderNavLinks />
            <NavLogo />
            <NavLangs />
            <AuthAndPhone />
        </nav>
    )
}

export default AppHeaderNav;