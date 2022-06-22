import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './HeaderNavLinks.module.css';

function HeaderNavLinks() {

    let styles = {
        NavLink: {
            textDecoration: 'none',
            marginLeft: '64px',
            color: '#3D3C3C'
        },
        firstNavLink: {
            textDecoration: 'none',
            marginLeft: '0px',
            color: '#3D3C3C'
        }
    }

    return (
        <div className={classes.navLinks}>
            <NavLink style={styles.firstNavLink} to={'/'}>О КОМПЛЕКСЕ</NavLink>
            <NavLink style={styles.NavLink} to={'/'}>БЛОГ</NavLink>
            <NavLink style={styles.NavLink} to={'/'}>FAQ</NavLink>
            <NavLink style={styles.NavLink} to={'/'}>КОНТАКТЫ</NavLink>
        </div>
    )
}

export default HeaderNavLinks;