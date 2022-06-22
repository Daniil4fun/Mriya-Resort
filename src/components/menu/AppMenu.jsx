import React, { useState } from "react";
import menulogo from '../../icons/logo.svg';
import key from '../../icons/key.svg';
import longVerticalStripe from '../../icons/longVerticalStripe.svg';
import fbg from '../../icons/fbg.svg';
import twg from '../../icons/twg.svg';
import instag from '../../icons/instag.svg';
import stripeAfterMenu from '../../icons/stripeAfterMenu.svg';
import sepline from '../../icons/sepline.svg';
import closingCross from '../../icons/closingCross.svg';
import classes from './AppMenu.module.css';
import { NavLink } from "react-router-dom";
import MenuSlider1 from "./menu_sliders/MenuSlider1";
import MenuSlider2 from "./menu_sliders/MenuSlider2";
import MenuSlider3 from "./menu_sliders/MenuSlider3";

function AppMenu({ isActive, setIsActive }) {

    let [activeSubmenu, setActiveSubmenu] = useState(false);

    let [firstSlide, setFirstSlide] = useState(true);
    let [secondSlide, setSecondSlide] = useState(false);
    let [thirdSlide, setThirdSlide] = useState(false);

    function changeSlide(event) {
        if (event.target.className === classes.firstSlide) {
            setFirstSlide(true);
            setSecondSlide(false);
            setThirdSlide(false);
        } else if (event.target.className === classes.secondSlide) {
            setFirstSlide(false);
            setSecondSlide(true);
            setThirdSlide(false);
        } else if (event.target.className === classes.thirdSlide) {
            setFirstSlide(false);
            setSecondSlide(false);
            setThirdSlide(true);
        }
    }

    return (
        <div className={isActive ? classes.modalMenu : undefined}>
            <div style={isActive ? { display: 'block' } : { display: 'none' }} className={classes.menuItself}>
                <div className={classes.menuHead}>
                    <p className={classes.mediaLangs}>RU</p>
                    <img className={classes.menuLogo} src={menulogo} alt="menulogo" />
                    <div className={classes.navInMenu}>
                        <NavLink className={classes.navLinkInMenu} to={'/'}>О КОМПЛЕКСЕ</NavLink>
                        <NavLink className={classes.navLinkInMenu} to={'/'}>БЛОГ</NavLink>
                        <NavLink className={classes.navLinkInMenu} to={'/'}>FAQ</NavLink>
                        <NavLink className={classes.navLinkInMenu} to={'/'}>КОНТАКТЫ</NavLink>
                    </div>
                    <div className={classes.authInMenu}>
                        <img src={key} alt="key" />
                        <p>ВХОД</p>
                    </div>
                </div>
                <div className={classes.stripeAndBtns}>
                    <img src={longVerticalStripe} alt="longVerticalStripe" />
                    <div className={classes.btnsInMenu}>
                        <div>
                            <img src={fbg} alt="fbg" />
                        </div>
                        <div>
                            <img src={twg} alt="twg" />
                        </div>
                        <div>
                            <img src={instag} alt="instag" />
                        </div>
                    </div>
                </div>
                <div className={classes.resortMenu}>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Размещение</NavLink>
                    <NavLink className={classes.navLinkResortMenu} onMouseOver={() => setActiveSubmenu(true)} to={'/'}>Медицина</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Мероприятия</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Красота и восстановление</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Бары и рестораны</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Развлечения</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Спорт</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Детям</NavLink>
                    <NavLink className={classes.navLinkResortMenu} to={'/'}>Транспорт</NavLink>
                </div>
                <ul className={classes.mediaResortMenu}>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Размещение</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Медицина
                        <ul className={classes.mediaSubmenu}>
                            <li>Клиника персонализированной медицины</li>
                            <li>Медицинский центр</li>
                        </ul>
                    </NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Мероприятия</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Красота и восстановление</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Бары и рестораны</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Развлечения</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Спорт</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Детям</NavLink></li>
                    <li><NavLink className={classes.mediaNavLinkResortMenu} to={'/'}>Транспорт</NavLink></li>
                </ul>
                <div className={classes.stripeAfterMenu}>
                    <img src={stripeAfterMenu} alt="stripeAfterMenu" />
                </div>
                <div className={activeSubmenu ? classes.subMenu + ' ' + classes.subMenuActive : classes.subMenu}>
                    <div>
                        <NavLink to={'/'} className={classes.navLinkSubmenu}>Клиника персонализированной медицины</NavLink>
                        <NavLink to={'/'} className={classes.navLinkSubmenu}>Медицинский центр</NavLink>
                    </div>
                    <p>
                        Международные стандарты лечения и современные методики в сочетании с высококлассным сервисом
                        и проживанием в одном из лучших семейных курортов мира Mriya Resort & SPA 5*
                    </p>
                </div>
                <div className={classes.sepline}>
                    <img src={sepline} alt="sepline" />
                </div>
                {firstSlide ? <MenuSlider1 /> : undefined}
                {secondSlide ? <MenuSlider2 /> : undefined}
                {thirdSlide ? <MenuSlider3 /> : undefined}
                <div className={classes.sliderPoints}>
                    <div
                        className={classes.firstSlide}
                        onClick={event => changeSlide(event)}
                        style={firstSlide ? { background: '#D9C287' } : null}
                    ></div>
                    <div
                        className={classes.secondSlide}
                        onClick={event => changeSlide(event)}
                        style={secondSlide ? { background: '#D9C287' } : null}
                    ></div>
                    <div
                        className={classes.thirdSlide}
                        onClick={event => changeSlide(event)}
                        style={thirdSlide ? { background: '#D9C287' } : null}
                    ></div>
                </div>
                <div onClick={() => setIsActive(false)} className={classes.closingCross}>
                    <img src={closingCross} alt="closingCross" />
                </div>
                <button className={classes.mediaBtn}>НАЙТИ НОМЕР</button>
                <div className={classes.mediaNavMenu}>
                    <div>
                        <p><NavLink to={'/'}>О КОМПЛЕКСЕ</NavLink></p>
                        <p><NavLink to={'/'}>БЛОГ</NavLink></p>
                        <p><NavLink to={'/'}>FAQ</NavLink></p>
                    </div>
                    <div>
                        <p><NavLink to={'/'}>АФИША</NavLink></p>
                        <p><NavLink to={'/'}>СПЕЦПРЕДЛОЖЕНИЯ</NavLink></p>
                    </div>
                    <div>
                        <p><NavLink to={'/'}>ВАЖНАЯ ИНФОРМАЦИЯ</NavLink></p>
                        <p><NavLink to={'/'}>КОНТАКТЫ</NavLink></p>
                    </div>
                </div>
                <div className={classes.mediaPhone}>
                    <p>8 800 500 6847</p>
                </div>
                <div className={classes.mediaMail}>
                    <p>INFO@MRIYARESORT.COM</p>
                </div>
            </div>
        </div>
    )
}

export default AppMenu;