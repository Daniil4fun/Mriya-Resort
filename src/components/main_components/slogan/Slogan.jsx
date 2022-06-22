import React from 'react';
import vector from '../../../icons/vector.svg';
import AppButton from '../../UI/app_button/AppButton';
import classes from './Slogan.module.css';

function Slogan() {

    return (
        <div className={classes.slogan}>
            <h2>Mriya Resort & SPA &#8212;<br /><b>больше чем просто отдых</b></h2>
            <img src={vector} alt="vector" />
            <p>
                В окружении необычного<br className={classes.media} /> природного ландшафта курорт<br />
                становится по-настоящему<br className={classes.media} /> уникальным. Это место идеально<br className={classes.media} /> для <br className={classes.desktop} />
                тех, кто больше гор любит<br className={classes.media} /> только море.
            </p>
            <AppButton>О КОМПЛЕКСЕ</AppButton>
        </div>
    )
}

export default Slogan;