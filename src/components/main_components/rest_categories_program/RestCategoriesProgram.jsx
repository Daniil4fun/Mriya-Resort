import React from "react";
import firstRestCategory from '../../../img/firstRestCategory.png';
import secondRestCategory from '../../../img/secondRestCategory.png';
import thirdRestCategory from '../../../img/thirdRestCategory.png';
import pad from '../../../img/pad.png';
import classes from './RestCategoriesProgram.module.css';

function RestCategoriesProgram({carouselRC}) {

    return (
        <div style={{left: carouselRC + 'px'}} className={classes.restCategoriesProgramWrapper}>
            <div className={classes.firstRestCategory}>
                <img src={firstRestCategory} alt="firstRestCategory" />
                <img src={pad} alt="pad" />
                <div className={classes.desc}>
                    <p>Семейный отдых</p>
                </div>
            </div>
            <div className={classes.secondRestCategory}>
                <img src={secondRestCategory} alt="secondRestCategory" />
                <img src={pad} alt="pad" />
                <div className={classes.desc}>
                    <p>Оздоровление</p>
                </div>
            </div>
            <div className={classes.thirdRestCategory}>
                <img src={thirdRestCategory} alt="thirdRestCategory" />
                <img src={pad} alt="pad" />
                <div className={classes.desc}>
                    <p>Релакс и красота</p>
                </div>
            </div>
            <div className={classes.firstRestCategory}>
                <img src={firstRestCategory} alt="firstRestCategory" />
                <img src={pad} alt="pad" />
                <div className={classes.desc}>
                    <p>Новые впечатления</p>
                </div>
            </div>
        </div>
    )
}

export default RestCategoriesProgram;